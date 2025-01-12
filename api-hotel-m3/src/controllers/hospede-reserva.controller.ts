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
  Hospede,
  Reserva,
} from '../models';
import {HospedeRepository} from '../repositories';

export class HospedeReservaController {
  constructor(
    @repository(HospedeRepository) protected hospedeRepository: HospedeRepository,
  ) { }

  @get('/hospedes/{id}/reservas', {
    responses: {
      '200': {
        description: 'Array of Hospede has many Reserva',
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
  ): Promise<Reserva[]> {
    return this.hospedeRepository.reservas(id).find();
  }

  @post('/hospedes/{id}/reservas', {
    responses: {
      '200': {
        description: 'Hospede model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reserva)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Hospede.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reserva, {
            title: 'NewReservaInHospede',
            exclude: ['id'],
            optional: ['id_hospede']
          }),
        },
      },
    }) reserva: Omit<Reserva, 'id'>,
  ): Promise<Reserva> {
    return this.hospedeRepository.reservas(id).create(reserva);
  }

  @patch('/hospedes/{id}/reservas', {
    responses: {
      '200': {
        description: 'Hospede.Reserva PATCH success count',
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
    return this.hospedeRepository.reservas(id).patch(reserva, where);
  }

  @del('/hospedes/{id}/reservas', {
    responses: {
      '200': {
        description: 'Hospede.Reserva DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Reserva)) where?: Where<Reserva>,
  ): Promise<Count> {
    return this.hospedeRepository.reservas(id).delete(where);
  }
}
