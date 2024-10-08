import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard'; // Import the AdminGuard
import { CreateTournamentDto } from './../dto/create-tournament/create-tournament.dto';
import { CreateTournamentResponseDto } from './../dto/create-tournament/create-tournament-response.dto';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateTournamentService } from './create-tournament.service';

@ApiTags('Tournaments')
@ApiBearerAuth() // Indicate that this endpoint requires a bearer token
@Controller('tournaments')
export class CreateTournamentController {
    constructor(
        private readonly createTournamentService: CreateTournamentService,
    ) {}

    @Post('create')
    @UseGuards(JwtAuthGuard, AdminGuard) // Apply both guards here
    @ApiResponse({
        status: 201,
        description: 'Tournament created successfully',
        type: CreateTournamentResponseDto,
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized', // Description for unauthorized access
    })
    @ApiResponse({
        status: 403,
        description:
            'Access denied. You do not have permission to access this resource.',
    })
    async createTournament(
        @Body() createTournamentDto: CreateTournamentDto,
    ): Promise<CreateTournamentResponseDto> {
        return this.createTournamentService.createTournament(
            createTournamentDto,
        );
    }
}
