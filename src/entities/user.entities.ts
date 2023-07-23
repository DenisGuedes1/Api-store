import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { Adresses } from "./address.entities";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    avatar: string;

    @Column()
    isAdmin: Boolean;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;
    @OneToOne(() => Adresses, (adress) => adress.user, {
        cascade: true,
        nullable: true,
    })
    @JoinColumn()
    adress: Adresses;
}
