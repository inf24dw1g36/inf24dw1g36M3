import {Entity, model, property, hasMany} from '@loopback/repository';
import {Reserva} from './reserva.model';

@model({settings: {mysql: {table: 'hospede'}}})
export class Hospede extends Entity {
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
    type: 'string',
    required: true,
  })
  nif: string;

  @property({
    type: 'number',
    required: true,
  })
  telefone: number;

  @property({
    type: 'string',
    required: true,
  })
  endereco: string;

  @hasMany(() => Reserva, {keyTo: 'id_hospede'})
  reservas: Reserva[];

  constructor(data?: Partial<Hospede>) {
    super(data);
  }
}

export interface HospedeRelations {
  // describe navigational properties here
}

export type HospedeWithRelations = Hospede & HospedeRelations;
