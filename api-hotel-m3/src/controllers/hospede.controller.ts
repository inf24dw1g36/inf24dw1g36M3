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
import {Hospede} from '../models';
import {HospedeRepository} from '../repositories';

export class HospedeController {
  constructor(
    @repository(HospedeRepository)
    public hospedeRepository : HospedeRepository,
  ) {}

  @post('/hospedes')
  @response(200, {
    description: 'Hospede model instance',
    content: {'application/json': {schema: getModelSchemaRef(Hospede)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hospede, {
            title: 'NewHospede',
            exclude: ['id'],
          }),
        },
      },
    })
    hospede: Omit<Hospede, 'id'>,
  ): Promise<Hospede> {
    return this.hospedeRepository.create(hospede);
  }

  @get('/hospedes/count')
  @response(200, {
    description: 'Hospede model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Hospede) where?: Where<Hospede>,
  ): Promise<Count> {
    return this.hospedeRepository.count(where);
  }

  @get('/hospedes')
  @response(200, {
    description: 'Array of Hospede model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Hospede, {includeRelations: true}),
        },
      },
    },
  })
  async find(
  ): Promise<Hospede[]> {
    return this.hospedeRepository.find();
  }

  @patch('/hospedes')
  @response(200, {
    description: 'Hospede PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hospede, {partial: true}),
        },
      },
    })
    hospede: Hospede,
    @param.where(Hospede) where?: Where<Hospede>,
  ): Promise<Count> {
    return this.hospedeRepository.updateAll(hospede, where);
  }

  @get('/hospedes/{id}')
  @response(200, {
    description: 'Hospede model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Hospede, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
  ): Promise<Hospede> {
    return this.hospedeRepository.findById(id);
  }

  @patch('/hospedes/{id}')
  @response(204, {
    description: 'Hospede PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hospede, {partial: true}),
        },
      },
    })
    hospede: Hospede,
  ): Promise<void> {
    await this.hospedeRepository.updateById(id, hospede);
  }

  @put('/hospedes/{id}')
  @response(204, {
    description: 'Hospede PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hospede: Hospede,
  ): Promise<void> {
    await this.hospedeRepository.replaceById(id, hospede);
  }

  @del('/hospedes/{id}')
  @response(204, {
    description: 'Hospede DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hospedeRepository.deleteById(id);
  }
}
