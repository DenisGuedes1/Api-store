import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    //'uuid_generate_v4()'
    @Column()
    isAdmin: Boolean;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;
}
