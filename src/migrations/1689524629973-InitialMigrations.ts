import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1689524629973 implements MigrationInterface {
    name = 'InitialMigrations1689524629973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."products_tamanho_enum" AS ENUM('P', 'M', 'G', 'GG')`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "descricao" character varying NOT NULL, "foto1" character varying, "foto2" character varying, "foto3" character varying, "price" numeric(10,2) NOT NULL, "tamanho" "public"."products_tamanho_enum" NOT NULL DEFAULT 'P', CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "isAdmin" boolean NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TYPE "public"."products_tamanho_enum"`);
    }

}
