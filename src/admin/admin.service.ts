import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
            private readonly adminRepository: Repository<Admin>
    ){}

    async findOneByEmail(email: string){
        try {
            return await this.adminRepository.
        }
    }
}
