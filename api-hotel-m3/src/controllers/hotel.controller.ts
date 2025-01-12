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
import {Hotel} from '../models';
import {HotelRepository} from '../repositories';

export class HotelController {
  constructor(
    @repository(HotelRepository)
    public hotelRepository : HotelRepository,
  ) {}

  @post('/hotels')
  @response(200, {
    description: 'Hotel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Hotel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {
            title: 'NewHotel',
            exclude: ['id'],
          }),
        },
      },
    })
    hotel: Omit<Hotel, 'id'>,
  ): Promise<Hotel> {
    return this.hotelRepository.create(hotel);
  }

  @get('/hotels/count')
  @response(200, {
    description: 'Hotel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
  ): Promise<Count> {
    return this.hotelRepository.count();
  }

  @get('/hotels')
  @response(200, {
    description: 'Array of Hotel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Hotel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
  ): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  @patch('/hotels')
  @response(200, {
    description: 'Hotel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {partial: true}),
        },
      },
    })
    hotel: Hotel,
  ): Promise<Count> {
    return this.hotelRepository.updateAll(hotel);
  }

  @get('/hotels/{id}')
  @response(200, {
    description: 'Hotel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Hotel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
  ): Promise<Hotel> {
    return this.hotelRepository.findById(id);
  }

  @patch('/hotels/{id}')
  @response(204, {
    description: 'Hotel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hotel, {partial: true}),
        },
      },
    })
    hotel: Hotel,
  ): Promise<void> {
    await this.hotelRepository.updateById(id, hotel);
  }

  @put('/hotels/{id}')
  @response(204, {
    description: 'Hotel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hotel: Hotel,
  ): Promise<void> {
    await this.hotelRepository.replaceById(id, hotel);
  }

  @del('/hotels/{id}')
  @response(204, {
    description: 'Hotel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hotelRepository.deleteById(id);
  }
}
