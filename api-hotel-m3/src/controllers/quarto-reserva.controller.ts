import {
  Count,
  CountSchema,
  Filter,
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
  Quarto,
  Reserva,
} from '../models';
import {QuartoRepository} from '../repositories';

export class QuartoReservaController {
  constructor(
    @repository(QuartoRepository) protected quartoRepository: QuartoRepository,
  ) { }

  @get('/quartos/{id}/reservas', {
    responses: {
      '200': {
        description: 'Array of Quarto has many Reserva',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Reserva)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Reserva>,
  ): Promise<Reserva[]> {
    return this.quartoRepository.reservas(id).find(filter);
  }

  @post('/quartos/{id}/reservas', {
    responses: {
      '200': {
        description: 'Quarto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reserva)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Quarto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reserva, {
            title: 'NewReservaInQuarto',
            exclude: ['id'],
            optional: ['id_quarto']
          }),
        },
      },
    }) reserva: Omit<Reserva, 'id'>,
  ): Promise<Reserva> {
    return this.quartoRepository.reservas(id).create(reserva);
  }

  @patch('/quartos/{id}/reservas', {
    responses: {
      '200': {
        description: 'Quarto.Reserva PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reserva, {partial: true}),
        },
      },
    })
    reserva: Partial<Reserva>,
    @param.query.object('where', getWhereSchemaFor(Reserva)) where?: Where<Reserva>,
  ): Promise<Count> {
    return this.quartoRepository.reservas(id).patch(reserva, where);
  }

  @del('/quartos/{id}/reservas', {
    responses: {
      '200': {
        description: 'Quarto.Reserva DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Reserva)) where?: Where<Reserva>,
  ): Promise<Count> {
    return this.quartoRepository.reservas(id).delete(where);
  }
}
