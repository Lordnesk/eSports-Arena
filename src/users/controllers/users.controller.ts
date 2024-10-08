import { Controller, Post, Body, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('Users')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
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
