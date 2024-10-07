import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique, JoinColumn} from "typeorm"
import { Role } from "src/roles/entitites/role.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    @Unique(["email"])
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Role)
    @JoinColumn({name: "roleId"})
    role: Role;

    @Column({ name: "roleId"})
    roleId: string;
}