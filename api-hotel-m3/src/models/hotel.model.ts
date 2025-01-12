import {Entity, model, property, hasMany} from '@loopback/repository';
import {Quarto} from './quarto.model';

@model({settings: {mysql: {table: 'hotel'}}})
export class Hotel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  estrelas: number;

  @property({
    type: 'string',
    required: true,
  })
  endereco: string;

  @hasMany(() => Quarto, {keyTo: 'id_hotel'})
  quartos: Quarto[];

  constructor(data?: Partial<Hotel>) {
    super(data);
  }
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
