import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelsDataSource} from '../datasources';
import {Hotel, HotelRelations, Quarto} from '../models';
import {QuartoRepository} from './quarto.repository';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.id,
  HotelRelations
> {

  public readonly quartos: HasManyRepositoryFactory<Quarto, typeof Hotel.prototype.id>;

  constructor(
    @inject('datasources.hotels') dataSource: HotelsDataSource, @repository.getter('QuartoRepository') protected quartoRepositoryGetter: Getter<QuartoRepository>,
  ) {
    super(Hotel, dataSource);
    this.quartos = this.createHasManyRepositoryFactoryFor('quartos', quartoRepositoryGetter,);
    this.registerInclusionResolver('quartos', this.quartos.inclusionResolver);
  }
}
