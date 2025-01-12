import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Hotel} from './hotel.model';
import {Reserva} from './reserva.model';

@model({settings: {mysql: {table: 'quarto'}}})
export class Quarto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @belongsTo(() => Hotel, {name: 'hotel'})
  id_hotel: number;

  @hasMany(() => Reserva, {keyTo: 'id_quarto'})
  reservas: Reserva[];

  constructor(data?: Partial<Quarto>) {
    super(data);
  }
}

export interface QuartoRelations {
  // describe navigational properties here
}

export type QuartoWithRelations = Quarto & QuartoRelations;
