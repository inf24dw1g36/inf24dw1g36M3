import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Hospede} from './hospede.model';
import {Quarto} from './quarto.model';

@model({settings: {mysql: {table: 'reserva'}}})
export class Reserva extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  data_inic: string;

  @property({
    type: 'date',
    required: true,
  })
  data_fim: string;
  @belongsTo(() => Hospede, {name: 'hospede'})
  id_hospede: number;

  @belongsTo(() => Quarto, {name: 'quarto'})
  id_quarto: number;

  constructor(data?: Partial<Reserva>) {
    super(data);
  }
}

export interface ReservaRelations {
  // describe navigational properties here
}

export type ReservaWithRelations = Reserva & ReservaRelations;
