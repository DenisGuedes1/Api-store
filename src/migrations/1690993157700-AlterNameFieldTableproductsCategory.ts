import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterNameFieldTableproductsCategory1690993157700 implements MigrationInterface {
    name = 'AlterNameFieldTableproductsCategory1690993157700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "caterogy" TO "category"`);
        await queryRunner.query(`ALTER TYPE "public"."products_caterogy_enum" RENAME TO "products_category_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."products_category_enum" RENAME TO "products_caterogy_enum"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "category" TO "caterogy"`);
    }

}
