import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entitites/tournament.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentsService {
    constructor(
        @InjectRepository(User)
            private readonly userRepository:Repository<User>,
        @InjectRepository(Tournament)
            private readonly tournamentRepository: Repository<Tournament>
    ){}

    async create (createTournamentDto: CreateTournamentDto){
        return await this.tournamentRepository.save(createTournamentDto)
    }

    async findPlayerByEmail(email: string){
        try{
            return await this.userRepository.findOneBy({email})
        } catch (error) {
            throw new BadRequestException("User not Found")
        }
    }

    async updateTournament(id: string, updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
        const tournament = await this.tournamentRepository.findOne({where: {id}})
        if (!tournament){
            throw new NotFoundException(`Tournament with ${id} not found`)
        }

        Object.assign(tournament, updateTournamentDto);
        return this.tournamentRepository.save(tournament)
    }

    async deleteTournament(id: string): Promise<void> {
        const tournament = await this.tournamentRepository.delete(id);

        if (tournament.affected === 0){
            throw new NotFoundException(`Tournament with id ${id} not found`)
        }
    }
}
