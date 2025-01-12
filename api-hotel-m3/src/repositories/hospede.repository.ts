import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelsDataSource} from '../datasources';
import {Hospede, HospedeRelations, Reserva} from '../models';
import {ReservaRepository} from './reserva.repository';

export class HospedeRepository extends DefaultCrudRepository<
  Hospede,
  typeof Hospede.prototype.id,
  HospedeRelations
> {

  public readonly reservas: HasManyRepositoryFactory<Reserva, typeof Hospede.prototype.id>;

  constructor(
    @inject('datasources.hotels') dataSource: HotelsDataSource, @repository.getter('ReservaRepository') protected reservaRepositoryGetter: Getter<ReservaRepository>,
  ) {
    super(Hospede, dataSource);
    this.reservas = this.createHasManyRepositoryFactoryFor('reservas', reservaRepositoryGetter,);
    this.registerInclusionResolver('reservas', this.reservas.inclusionResolver);
  }
}
