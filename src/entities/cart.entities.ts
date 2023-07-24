import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { Users } from "./user.entities";
import { Products } from "./products.entities";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Users)
    user: Users;

    @ManyToOne(() => Products)
    product: Products;

    @Column()
    quantity: number;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;
}
