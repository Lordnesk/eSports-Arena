import { CountryEntity } from 'src/common/entities/country.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountrySeeder {
    constructor(
        @InjectRepository(CountryEntity)
        private readonly countryRepository: Repository<CountryEntity>,
    ) {}

    async seed() {
        const countries = [
            { id: 1, name: 'United States' },
            { id: 2, name: 'Canada' },
            { id: 3, name: 'Mexico' },
        ]

        await this.countryRepository.save(countries);
        console.log('Countries seeded successfully!');
    }
}
