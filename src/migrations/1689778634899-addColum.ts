import { MigrationInterface, QueryRunner } from "typeorm";

export class addColum1689778634899 implements MigrationInterface {
    name = 'addColum1689778634899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantity" integer NOT NULL DEFAULT 10`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "isActive"`);
    }

}
