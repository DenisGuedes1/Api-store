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
exports.InitialMigration1689966153533 = void 0;
class InitialMigration1689966153533 {
    constructor() {
        this.name = 'InitialMigration1689966153533';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(6), "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "adressId" uuid`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_d668d60e6cbf1966636e32f4ef8" UNIQUE ("adressId")`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_d668d60e6cbf1966636e32f4ef8"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "adressId"`);
            yield queryRunner.query(`DROP TABLE "addresses"`);
        });
    }
}
exports.InitialMigration1689966153533 = InitialMigration1689966153533;
