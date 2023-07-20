import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumProducts1689865082114 implements MigrationInterface {
    name = "AddColumProducts1689865082114";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "products" ADD "promotion" boolean NOT NULL DEFAULT false`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."products_caterogy_enum" AS ENUM('Camisetas', 'Camisas', 'Calças', 'Shorts', 'Saias', 'Vestidos', 'Blazers', 'Casacos', 'Jaquetas', 'Roupas íntimas', 'Não definido')`
        );
        await queryRunner.query(
            `ALTER TABLE "products" ADD "caterogy" "public"."products_caterogy_enum" NOT NULL DEFAULT 'Não definido'`
        );
        await queryRunner.query(
            `CREATE TYPE "public"."products_gender_enum" AS ENUM('Masculino', 'Feminino', 'Unissex', 'Não definido')`
        );
        await queryRunner.query(
            `ALTER TABLE "products" ADD "gender" "public"."products_gender_enum" NOT NULL DEFAULT 'Não definido'`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."products_gender_enum"`);
        await queryRunner.query(
            `ALTER TABLE "products" DROP COLUMN "caterogy"`
        );
        await queryRunner.query(`DROP TYPE "public"."products_caterogy_enum"`);
        await queryRunner.query(
            `ALTER TABLE "products" DROP COLUMN "promotion"`
        );
    }
}
