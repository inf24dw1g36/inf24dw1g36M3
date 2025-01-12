import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Quarto} from '../models';
import {QuartoRepository} from '../repositories';

export class QuartoController {
  constructor(
    @repository(QuartoRepository)
    public quartoRepository : QuartoRepository,
  ) {}

  @post('/quartos')
  @response(200, {
    description: 'Quarto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Quarto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quarto, {
            title: 'NewQuarto',
            exclude: ['id'],
          }),
        },
      },
    })
    quarto: Omit<Quarto, 'id'>,
  ): Promise<Quarto> {
    return this.quartoRepository.create(quarto);
  }

  @get('/quartos/count')
  @response(200, {
    description: 'Quarto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Quarto) where?: Where<Quarto>,
  ): Promise<Count> {
    return this.quartoRepository.count(where);
  }

  @get('/quartos')
  @response(200, {
    description: 'Array of Quarto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Quarto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
  ): Promise<Quarto[]> {
    return this.quartoRepository.find();
  }

  @patch('/quartos')
  @response(200, {
    description: 'Quarto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quarto, {partial: true}),
        },
      },
    })
    quarto: Quarto,
    @param.where(Quarto) where?: Where<Quarto>,
  ): Promise<Count> {
    return this.quartoRepository.updateAll(quarto, where);
  }

  @get('/quartos/{id}')
  @response(200, {
    description: 'Quarto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Quarto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
  ): Promise<Quarto> {
    return this.quartoRepository.findById(id);
  }

  @patch('/quartos/{id}')
  @response(204, {
    description: 'Quarto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quarto, {partial: true}),
        },
      },
    })
    quarto: Quarto,
  ): Promise<void> {
    await this.quartoRepository.updateById(id, quarto);
  }

  @put('/quartos/{id}')
  @response(204, {
    description: 'Quarto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() quarto: Quarto,
  ): Promise<void> {
    await this.quartoRepository.replaceById(id, quarto);
  }

  @del('/quartos/{id}')
  @response(204, {
    description: 'Quarto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.quartoRepository.deleteById(id);
  }
}
