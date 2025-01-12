import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {HotelsDataSource} from '../datasources';
import {Reserva, ReservaRelations, Hospede, Quarto} from '../models';
import {HospedeRepository} from './hospede.repository';
import {QuartoRepository} from './quarto.repository';

export class ReservaRepository extends DefaultCrudRepository<
  Reserva,
  typeof Reserva.prototype.id,
  ReservaRelations
> {

  public readonly hospede: BelongsToAccessor<Hospede, typeof Reserva.prototype.id>;

  public readonly quarto: BelongsToAccessor<Quarto, typeof Reserva.prototype.id>;

  constructor(
    @inject('datasources.hotels') dataSource: HotelsDataSource, @repository.getter('HospedeRepository') protected hospedeRepositoryGetter: Getter<HospedeRepository>, @repository.getter('QuartoRepository') protected quartoRepositoryGetter: Getter<QuartoRepository>,
  ) {
    super(Reserva, dataSource);
    this.quarto = this.createBelongsToAccessorFor('quarto', quartoRepositoryGetter,);
    this.registerInclusionResolver('quarto', this.quarto.inclusionResolver);
    this.hospede = this.createBelongsToAccessorFor('hospede', hospedeRepositoryGetter,);
    this.registerInclusionResolver('hospede', this.hospede.inclusionResolver);
  }
}
