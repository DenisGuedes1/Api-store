import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1689966153533 implements MigrationInterface {
    name = 'InitialMigration1689966153533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(6), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "adressId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_d668d60e6cbf1966636e32f4ef8" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_d668d60e6cbf1966636e32f4ef8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "adressId"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
