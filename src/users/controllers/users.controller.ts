import { Controller, Post, Patch, Body } from '@nestjs/common';
import { UserService } from '../services/admin.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('Users')
export class UsersController {
    constructor(private readonly UserService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.UserService.create(createUserDto);
    }
}
