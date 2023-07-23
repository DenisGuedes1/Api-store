import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entities";

@Entity("addresses")
export class Adresses {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 45 })
    street: string;

    @Column({ type: "varchar", length: 8 })
    zipCode: string;

    @Column({ type: "varchar", length: 6, nullable: true })
    number: string;

    @Column({ type: "varchar", length: 20 })
    city: string;

    @Column({ type: "varchar", length: 2 })
    state: string;

    @OneToOne(() => Users, (user) => user.adress, { nullable: true })
    user: Users;

    @OneToOne(() => Users, (user) => user.email, { nullable: true })
    emailUser: Users;
}
