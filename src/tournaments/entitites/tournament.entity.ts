import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    numberOfPlayers: number

    @OneToMany(() => User, user => user.role)
    Users: User[]
}