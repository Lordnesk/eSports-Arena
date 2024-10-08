import { Controller, Post, Body, Patch, Delete, Param, UseGuards, BadRequestException } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.userService.create(createUserDto); // Espera el resultado
        } catch (error) {
            console.error('Error in UsersController:', error); // Para depuración
            throw new BadRequestException('Error creating user');
        }
    }
    

    @Patch(":id")
    async updateUser(
        @Param("id") id:string,
        @Body() updateUserDto: UpdateUserDto
    ){
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(":id")
    @Roles("admin")
    async deleteUser(
        @Param("id") id: string){
            await this.userService.deleteUser("id");
            return{
                message: `User with ${id} has been sucessfully deleted`
            }
        }
}
