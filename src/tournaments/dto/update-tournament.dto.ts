import { CreateTournamentDto } from "./create-tournament.dto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateTournamentDto extends PartialType(CreateTournamentDto){}