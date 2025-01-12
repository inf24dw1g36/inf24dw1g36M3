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
  Quarto,
} from '../models';
import {ReservaRepository} from '../repositories';

export class ReservaQuartoController {
  constructor(
    @repository(ReservaRepository)
    public reservaRepository: ReservaRepository,
  ) { }

  @get('/reservas/{id}/quarto', {
    responses: {
      '200': {
        description: 'Quarto belonging to Reserva',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Quarto),
          },
        },
      },
    },
  })
  async getQuarto(
    @param.path.number('id') id: typeof Reserva.prototype.id,
  ): Promise<Quarto> {
    return this.reservaRepository.quarto(id);
  }
}
