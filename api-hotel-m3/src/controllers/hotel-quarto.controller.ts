import {
  Count,
  CountSchema,
  Filter,
  property,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Hotel,
  Quarto,
} from '../models';
import {HotelRepository} from '../repositories';

export class HotelQuartoController {
  constructor(
    @repository(HotelRepository) protected hotelRepository: HotelRepository,
  ) { }

  @get('/hotels/{id}/quartos', {
    responses: {
      '200': {
        description: 'Array of Hotel has many Quarto',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              property: {
                type: 'array',
                items: getModelSchemaRef(Quarto)},
              },
              total: {type: 'number'} 
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Quarto>,
  ): Promise<{ data:Quarto[] ; total:number }> {
    const quartos = await this.hotelRepository.quartos(id).find(filter);

    const total = quartos.length;
    return {
      data:quartos,
      total:total,
    };
  }

  @post('/hotels/{id}/quartos', {
    responses: {
      '200': {
        description: 'Hotel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Quarto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Hotel.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quarto, {
            title: 'NewQuartoInHotel',
            exclude: ['id'],
            optional: ['id_hotel']
          }),
        },
      },
    }) quarto: Omit<Quarto, 'id'>,
  ): Promise<Quarto> {
    return this.hotelRepository.quartos(id).create(quarto);
  }

  @patch('/hotels/{id}/quartos', {
    responses: {
      '200': {
        description: 'Hotel.Quarto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quarto, {partial: true}),
        },
      },
    })
    quarto: Partial<Quarto>,
    @param.query.object('where', getWhereSchemaFor(Quarto)) where?: Where<Quarto>,
  ): Promise<Count> {
    return this.hotelRepository.quartos(id).patch(quarto, where);
  }

  @del('/hotels/{id}/quartos', {
    responses: {
      '200': {
        description: 'Hotel.Quarto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Quarto)) where?: Where<Quarto>,
  ): Promise<Count> {
    return this.hotelRepository.quartos(id).delete(where);
  }
}
