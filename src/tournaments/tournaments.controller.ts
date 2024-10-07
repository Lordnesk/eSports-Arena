import { Patch, Controller, Param, Post, Body, Delete } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { CreateTournamentDto } from './dto/create-tournament.dto';

@Controller('tournaments')
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
}
