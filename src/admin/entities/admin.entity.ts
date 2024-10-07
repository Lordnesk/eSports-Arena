import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique} from "typeorm"

@Entity()
export class Admin {
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