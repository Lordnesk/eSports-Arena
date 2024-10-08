import { Patch, Controller, Param, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('tournaments')
@UseGuards(RolesGuard)
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService){}

    @Post()
    create(@Body() createTournamentDto: CreateTournamentDto) {
        return this.tournamentsService.create(createTournamentDto);
    }

    @Patch(":id")
    async updateTournament(
        @Param("id") id: string,
        @Body() updateTournamentDto: UpdateTournamentDto
    ){
        return this.tournamentsService.updateTournament(id, updateTournamentDto)
    }

    @Delete(":id")
    @Roles("admin")
    async deleteTournament(
        @Param("id") id: string){
            await this.tournamentsService.deleteTournament("id");
            return{
                message: `Tournament with ${id} has been sucessfully deleted`
            }
        }
}
