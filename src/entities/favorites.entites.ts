import { ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Products } from "./products.entities";
import { Users } from "./user.entities";

export class Favorites {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Products)
    products: Products;

    @ManyToOne(() => Users)
    user: Users;
}
