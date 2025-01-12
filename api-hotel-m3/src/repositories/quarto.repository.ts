import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelsDataSource} from '../datasources';
import {Quarto, QuartoRelations, Hotel, Reserva} from '../models';
import {HotelRepository} from './hotel.repository';
import {ReservaRepository} from './reserva.repository';

export class QuartoRepository extends DefaultCrudRepository<
  Quarto,
  typeof Quarto.prototype.id,
  QuartoRelations
> {

  public readonly hotel: BelongsToAccessor<Hotel, typeof Quarto.prototype.id>;

  public readonly reservas: HasManyRepositoryFactory<Reserva, typeof Quarto.prototype.id>;

  constructor(
    @inject('datasources.hotels') dataSource: HotelsDataSource, @repository.getter('HotelRepository') protected hotelRepositoryGetter: Getter<HotelRepository>, @repository.getter('ReservaRepository') protected reservaRepositoryGetter: Getter<ReservaRepository>,
  ) {
    super(Quarto, dataSource);
    this.reservas = this.createHasManyRepositoryFactoryFor('reservas', reservaRepositoryGetter,);
    this.registerInclusionResolver('reservas', this.reservas.inclusionResolver);
    this.hotel = this.createBelongsToAccessorFor('hotel', hotelRepositoryGetter,);
    this.registerInclusionResolver('hotel', this.hotel.inclusionResolver);
  }
}
