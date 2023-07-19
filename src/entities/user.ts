import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
 
  @Column()
  password: string;

  @Column({nullable: true})
  avatar: string;

  @Column()
  isAdmin: Boolean;
  
}
