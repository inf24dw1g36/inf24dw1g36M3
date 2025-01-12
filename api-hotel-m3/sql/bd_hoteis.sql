create database IF NOT EXISTS Hotels CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

use Hotels;

create table IF NOT EXISTS init(
	id int primary key,
	state_bd varchar(4) DEFAULT 'done'
);

create table IF NOT EXISTS hotel( 
	id int primary key auto_increment,
	nome varchar(100) not null,
	estrelas int not null,
	endereco varchar(200) not null
);

create table IF NOT EXISTS quarto(
	id int primary key auto_increment,
	numero int not null,
	preco float not null,
	id_hotel int not null,
	FOREIGN KEY (id_hotel) REFERENCES hotel(id)
);

create table IF NOT EXISTS hospede(
	id int primary key auto_increment,
	nome varchar(100) not null,
	nif varchar(9) not null,
	telefone int not null,
	endereco varchar(200) not null
);

create table IF NOT EXISTS reserva (
	id int primary key auto_increment,
	data_inic datetime not null, 
	data_fim datetime not null,
	id_quarto int not null,
	id_hospede int not null,
	FOREIGN KEY (id_quarto) REFERENCES quarto(id),
	FOREIGN KEY (id_hospede) REFERENCES hospede(id)
);