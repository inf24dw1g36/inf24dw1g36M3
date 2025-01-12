import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Reserva,
  Hospede,
} from '../models';
import {ReservaRepository} from '../repositories';

export class ReservaHospedeController {
  constructor(
    @repository(ReservaRepository)
    public reservaRepository: ReservaRepository,
  ) { }

  @get('/reservas/{id}/hospede', {
    responses: {
      '200': {
        description: 'Hospede belonging to Reserva',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hospede),
          },
        },
      },
    },
  })
  async getHospede(
    @param.path.number('id') id: typeof Reserva.prototype.id,
  ): Promise<Hospede> {
    return this.reservaRepository.hospede(id);
  }
}
