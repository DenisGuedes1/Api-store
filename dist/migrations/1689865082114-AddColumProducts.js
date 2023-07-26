"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumProducts1689865082114 = void 0;
class AddColumProducts1689865082114 {
    constructor() {
        this.name = "AddColumProducts1689865082114";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" ADD "promotion" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`CREATE TYPE "public"."products_caterogy_enum" AS ENUM('Camisetas', 'Camisas', 'Calças', 'Shorts', 'Saias', 'Vestidos', 'Blazers', 'Casacos', 'Jaquetas', 'Roupas íntimas', 'Não definido')`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "caterogy" "public"."products_caterogy_enum" NOT NULL DEFAULT 'Não definido'`);
            yield queryRunner.query(`CREATE TYPE "public"."products_gender_enum" AS ENUM('Masculino', 'Feminino', 'Unissex', 'Não definido')`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "gender" "public"."products_gender_enum" NOT NULL DEFAULT 'Não definido'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "gender"`);
            yield queryRunner.query(`DROP TYPE "public"."products_gender_enum"`);
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "caterogy"`);
            yield queryRunner.query(`DROP TYPE "public"."products_caterogy_enum"`);
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "promotion"`);
        });
    }
}
exports.AddColumProducts1689865082114 = AddColumProducts1689865082114;
