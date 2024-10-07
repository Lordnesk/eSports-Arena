import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
            private readonly userRepository: Repository<User>
    ){}

    async create(CreateUserDto: CreateUserDto){
        return await this.userRepository.save(CreateUserDto)
    }

    async findOneByEmail(email: string){
        try {
            return await this.userRepository.findOneBy({email})
        } catch (error) {
            throw new BadRequestException("User not found")
        }
    }

    async getRoleByUserId(id:string){
        const user = await this.userRepository.findOne({where: {id}})
        return user.roleId
    }
}
