-- CreateEnum
CREATE TYPE "Animal_Sexo" AS ENUM ('MACHO', 'FEMEA');

-- CreateEnum
CREATE TYPE "Animal_Idade" AS ENUM ('Recem_Nascido', 'Filhote', 'Adulto');

-- CreateEnum
CREATE TYPE "Animal_Castracao" AS ENUM ('SIM', 'NAO');

-- CreateEnum
CREATE TYPE "Animal_Vacinacao" AS ENUM ('SIM', 'NAO');

-- CreateEnum
CREATE TYPE "Animal_Situacao" AS ENUM ('PERDIDO', 'ADOCAO');

-- CreateEnum
CREATE TYPE "Animal_Vermifugado" AS ENUM ('SIM', 'NAO');

-- CreateTable
CREATE TABLE "zona" (
    "zona_cod" INTEGER NOT NULL,
    "zona_nome" TEXT NOT NULL,

    CONSTRAINT "zona_pkey" PRIMARY KEY ("zona_cod")
);

-- CreateTable
CREATE TABLE "contato_pessoa" (
    "contato_id" INTEGER NOT NULL,
    "contato_principal" TEXT NOT NULL,
    "contato_opcional" TEXT NOT NULL,
    "contato_pessoa_email" TEXT NOT NULL,

    CONSTRAINT "contato_pessoa_pkey" PRIMARY KEY ("contato_id")
);

-- CreateTable
CREATE TABLE "tipo_pessoa" (
    "tipo_pescod" INTEGER NOT NULL,
    "tipo_nome" TEXT NOT NULL,

    CONSTRAINT "tipo_pessoa_pkey" PRIMARY KEY ("tipo_pescod")
);

-- CreateTable
CREATE TABLE "empresa" (
    "empresa_cod" INTEGER NOT NULL,
    "tipo_empresa" TEXT NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("empresa_cod")
);

-- CreateTable
CREATE TABLE "pessoa" (
    "pessoa_email" TEXT NOT NULL,
    "pessoa_nome" TEXT NOT NULL,
    "pessoa_senha" TEXT NOT NULL,
    "pessoa_cep" TEXT NOT NULL,
    "pessoa_numerocasa" TEXT NOT NULL,
    "pessoa_dtcadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pessoa_dtnascimento" DATE NOT NULL,
    "pessoa_cpf" TEXT,
    "pessoa_cnpj" TEXT,
    "pessoa_zona" INTEGER NOT NULL,
    "pessoa_documento" INTEGER NOT NULL,
    "pessoa_empresa" INTEGER,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("pessoa_email")
);

-- CreateTable
CREATE TABLE "especie" (
    "especie_cod" INTEGER NOT NULL,
    "especie_nome" TEXT NOT NULL,

    CONSTRAINT "especie_pkey" PRIMARY KEY ("especie_cod")
);

-- CreateTable
CREATE TABLE "situacao" (
    "situacao_cod" INTEGER NOT NULL,
    "tipo_situacao" TEXT NOT NULL,

    CONSTRAINT "situacao_pkey" PRIMARY KEY ("situacao_cod")
);

-- CreateTable
CREATE TABLE "adocao" (
    "adocao_cod" SERIAL NOT NULL,
    "adocao_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adocao_animalcod" INTEGER NOT NULL,
    "adocao_pessoa" TEXT NOT NULL,

    CONSTRAINT "adocao_pkey" PRIMARY KEY ("adocao_cod")
);

-- CreateTable
CREATE TABLE "animal" (
    "animal_cod" SERIAL NOT NULL,
    "animal_nome" TEXT NOT NULL,
    "animal_sexo" "Animal_Sexo" NOT NULL,
    "animal_idade" "Animal_Idade" NOT NULL,
    "animal_descricao" TEXT NOT NULL,
    "animal_dtcadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animal_vacinacao" "Animal_Vacinacao" NOT NULL,
    "animal_castracao" "Animal_Castracao" NOT NULL,
    "animal_bairroocorrencia" TEXT NOT NULL,
    "animal_ruaocorrencia" TEXT NOT NULL,
    "animal_especie" INTEGER NOT NULL,
    "animal_pessoacad" TEXT NOT NULL,
    "animal_situacao" "Animal_Situacao" NOT NULL,
    "animal_vermifugado" "Animal_Vermifugado" NOT NULL,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("animal_cod")
);

-- CreateTable
CREATE TABLE "image_animal" (
    "id" SERIAL NOT NULL,
    "path" TEXT[],
    "id_animal" INTEGER NOT NULL,

    CONSTRAINT "image_animal_pkey" PRIMARY KEY ("id")
);
