import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableCollumReset1689892763527 implements MigrationInterface {
    name = 'AlterTableCollumReset1689892763527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "reset_password" TO "reset_token"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "reset_token" TO "reset_password"`);
    }

}
