CREATE DATABASE IF NOT EXISTS estados_cidades;
USE estados_cidades;

CREATE TABLE estado (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  uf CHAR(2) NOT NULL UNIQUE
);

CREATE TABLE cidade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  estado_uf CHAR(2) NOT NULL,
  CONSTRAINT fk_cidade_estado
    FOREIGN KEY (estado_uf)
    REFERENCES estado(uf)
);
