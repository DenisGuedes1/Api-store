// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    descricao: string;

    @Column({ nullable: true })
    foto1: string;

    @Column({ nullable: true })
    foto2: string;

    @Column({ nullable: true })
    foto3: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: false })
    promotion: boolean;

    @Column({
        type: "enum",
        enum: [
            "Camisetas",
            "Camisas",
            "Calças",
            "Shorts",
            "Saias",
            "Vestidos",
            "Blazers",
            "Casacos",
            "Jaquetas",
            "Roupas íntimas",
            "Não definido",
        ],
        default: "Não definido",
    })
    caterogy: string;

    @Column({
        type: "enum",
        enum: ["Masculino", "Feminino", "Unissex", "Não definido"],
        default: "Não definido",
    })
    gender: string;

    @Column("integer", { default: 10 })
    quantity: number;

    @Column({
        type: "enum",
        enum: ["P", "M", "G", "GG"],
        default: "P",
    })
    tamanho: string;
}
