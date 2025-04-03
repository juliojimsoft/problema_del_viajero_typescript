import { Injectable, NotImplementedException } from '@nestjs/common';
import { TspSolveResponseDto } from './dtos/response/solve.response.dto';
import { TspSolveRequestDto } from './dtos/request/solve.request.dto';
import { TspGenerateCitiesResponseDto } from './dtos/response/generate-cities.response.dto';
import { WorldGenerator } from './domain/world-generator/world-generator';
import { TspGenerateCitiesRequestDto } from './dtos/request/generate-cities.request.dto';
import { TspSolver } from './domain/tsp-solver/tsp-solver';

/**
 * The TspService class is a NestJS service responsible for implementing the
 * core logic of solving the Traveling Salesman Problem (TSP) and generating
 * random city coordinates.
 */
@Injectable()
export class TspService {
    constructor(private readonly solver: TspSolver){}

    solve(payload: TspSolveRequestDto): TspSolveResponseDto {
        const {cities,distances} = payload;
        
        // To do
        // - Implement TSP solver
        const result = this.solver.solve(cities, distances);
        return{
            route: result.route,
            totalDistance:result.totalDistance
        }
    }

    generateCities(
        payload: TspGenerateCitiesRequestDto,
    ): TspGenerateCitiesResponseDto {
        const worldGenerator = new WorldGenerator(payload.numOfCities, {
            x: payload.worldBoundX,
            y: payload.worldBoundY,
        });
        //crea ciudades aleatorias en memoria genera internamente las ciudades
        //modifica estado interno
        worldGenerator.generateCities();
        // To do
        //obtiene un objeto world, con las ciudades generadas
        const world = worldGenerator.getWorld();
        // - Calculate distance between cities
        return {
            cities:world.cities.map(city => city.name),
            distances: world.getDistances(),
        }
    }
}
