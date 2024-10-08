import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
            private readonly userRepository: Repository<User>,
    ){}

    async create(createUserDto: CreateUserDto){
        return await this.userRepository.save(createUserDto)
    }
    async findOneByEmail(email: string){
        try {
            return await this.userRepository.findOneBy({email})
        } catch (error) {
            throw new BadRequestException("User not found")
        }
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({where: {id}})
        if (!user){
            throw new NotFoundException(`Tournament with ${id} not found`)
        }

        Object.assign(user, updateUserDto);
        return this.userRepository.save(user)
    }

    async getRoleByUserId(id:string){
        const user = await this.userRepository.findOne({where: {id}})
        return user.roleId
    }

    async deleteUser(id: string,): Promise<void> {
        const user = await this.userRepository.delete(id);
        if (user.affected === 0){
            throw new NotFoundException(`User with id ${id} not found`)
        }
    }
}
