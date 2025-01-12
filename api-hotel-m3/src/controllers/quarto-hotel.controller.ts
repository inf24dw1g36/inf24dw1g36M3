import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Quarto,
  Hotel,
} from '../models';
import {QuartoRepository} from '../repositories';

export class QuartoHotelController {
  constructor(
    @repository(QuartoRepository)
    public quartoRepository: QuartoRepository,
  ) { }

  @get('/quartos/{id}/hotel', {
    responses: {
      '200': {
        description: 'Hotel belonging to Quarto',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hotel),
          },
        },
      },
    },
  })
  async getHotel(
    @param.path.number('id') id: typeof Quarto.prototype.id,
  ): Promise<Hotel> {
    return this.quartoRepository.hotel(id);
  }
}
