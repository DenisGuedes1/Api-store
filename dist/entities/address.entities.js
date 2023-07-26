"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresses = void 0;
const typeorm_1 = require("typeorm");
const user_entities_1 = require("./user.entities");
let Adresses = exports.Adresses = class Adresses {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Adresses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 45 }),
    __metadata("design:type", String)
], Adresses.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 8 }),
    __metadata("design:type", String)
], Adresses.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 6, nullable: true }),
    __metadata("design:type", String)
], Adresses.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Adresses.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 2 }),
    __metadata("design:type", String)
], Adresses.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entities_1.Users, (user) => user.adress, { nullable: true }),
    __metadata("design:type", user_entities_1.Users)
], Adresses.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entities_1.Users, (user) => user.email, { nullable: true }),
    __metadata("design:type", user_entities_1.Users)
], Adresses.prototype, "emailUser", void 0);
exports.Adresses = Adresses = __decorate([
    (0, typeorm_1.Entity)("addresses")
], Adresses);
