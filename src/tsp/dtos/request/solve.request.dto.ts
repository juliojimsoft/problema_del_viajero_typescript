import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    ValidateNested,
} from 'class-validator';

/**
 * Represents the distance between two cities in the TSP problem.
 */
export class TspDistanceRequestDto {
    @IsString()
    @IsNotEmpty()
    from: string;

    @IsString()
    @IsNotEmpty()
    to: string;

    @IsNumber()
    distance: number;
}

/**
 * Defines the request structure for solving the TSP.
 */
export class TspSolveRequestDto {
    @MinLength(1, { each: true })
    @MaxLength(2, { each: true })
    
    cities: string[];

    @ValidateNested()
    distances: TspDistanceRequestDto[];
}
