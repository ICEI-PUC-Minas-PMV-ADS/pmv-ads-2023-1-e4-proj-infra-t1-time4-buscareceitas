CREATE DATABASE dbReceitas

CREATE TABLE Ingrediente
(
  IdIngrediente bigint NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Ingrediente',
  NomeIngrediente varchar(128) NOT NULL COMMENT 'Nome do Ingrediente',
  UnidadeMedida varchar(32) NOT NULL COMMENT 'Unidade de media associada ao ingrediente',
  IdUsuario bigint NOT NULL COMMENT 'Identificador do usuário que cadastrou o ingrediente',
  ObsIngrediente varchar(512) NOT NULL COMMENT 'Observacoes complementares associadas ao ingrediente',
  CONSTRAINT PK_Ingrediente PRIMARY KEY (IdIngrediente)
)
COMMENT 'Tabela que armazena os ingredientes associados a uma receita';

CREATE TABLE Perfil
(
  IdPerfil bigint NOT NULL AUTO_INCREMENT COMMENT 'PK da tabela Perfil',
  NomePerfil varchar(128) NOT NULL COMMENT 'Nome do  perfil associado ao usuário',
  DescPerfil varchar(512) COMMENT 'Descrição do perfil',
  CONSTRAINT PK_Perfil PRIMARY KEY (IdPerfil)
)
COMMENT 'Tabela que armazena perfis de usuários utilizados no sistema';

CREATE TABLE Perfil_Usuario
(
  IdPerfil bigint NOT NULL,
  IdUsuario bigint NOT NULL COMMENT 'Id do usuário',
  CONSTRAINT PK_Perfil_Usuario PRIMARY KEY (IdPerfil, IdUsuario) COMMENT 'PK da tabela que associa perfis com Usuários'
);

CREATE TABLE Receita
(
  IdReceita bigint NOT NULL AUTO_INCREMENT COMMENT 'Identificador da receita',
  IdUsuario bigint NOT NULL COMMENT 'Identificador do usuário que efetuou o cadastro da receita',
  NomeReceita varchar(128) NOT NULL COMMENT 'Nome da receita',
  DescricaoReceita varchar(256) NOT NULL COMMENT 'Descricao da receita',
  TempoPreparo integer COMMENT 'Tempo total de preparo da receita',
  CONSTRAINT PK_Receita PRIMARY KEY (IdReceita)
)
COMMENT 'Tarbela que armazena Receitas';

CREATE TABLE Receita_Ingrediente
(
  IdIngrediente bigint NOT NULL COMMENT 'Identificador do ingrediente',
  IdReceita bigint NOT NULL COMMENT 'Identificador da Receita',
  QuantidadeIngrediente double NOT NULL COMMENT 'Quantidade do ingrediente que deve ser utilizado na receita',
  Obs varchar(512) NOT NULL COMMENT 'Observções relacionadas com a o ingrediente utilizado na receita',
  CONSTRAINT PK_Receita_Ingrediente PRIMARY KEY (IdIngrediente, IdReceita)
)
COMMENT 'Tabela que associa ingredientes que fazem parte de uma receita';

CREATE TABLE Usuario
(
  IdUsuario bigint NOT NULL AUTO_INCREMENT COMMENT '( PK )Identificador único associado do usuário',
  NomeUsuario varchar(128) COMMENT 'Nome do usuário',
  LoginUsuario varchar(32) NOT NULL COMMENT 'Login associado ao usuário',
  PasswordUsuario varchar(32) NOT NULL COMMENT 'Password associada ao usuário',
  CONSTRAINT PK_Usuario PRIMARY KEY (IdUsuario)
)
COMMENT 'Tabela que armazena os usuários associados ao sistema';

ALTER TABLE Ingrediente ADD CONSTRAINT FK_Usuario_XX2
  FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Perfil_Usuario ADD CONSTRAINT FK_Perfil_XX1
  FOREIGN KEY (IdPerfil) REFERENCES Perfil (IdPerfil) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Perfil_Usuario ADD CONSTRAINT FK_Usuario_XX1
  FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Receita ADD CONSTRAINT FK_USUARIO_XX1
  FOREIGN KEY (IdUsuario) REFERENCES Usuario (IdUsuario) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Receita_Ingrediente ADD CONSTRAINT FK_Receita_Ingrediente_XX1
  FOREIGN KEY (IdReceita) REFERENCES Receita (IdReceita) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Receita_Ingrediente ADD CONSTRAINT FK_Receita_Ingrediente_XX2
  FOREIGN KEY (IdIngrediente) REFERENCES Ingrediente (IdIngrediente) ON DELETE NO ACTION ON UPDATE NO ACTION;

