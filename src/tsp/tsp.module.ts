import { Module } from '@nestjs/common';
import { TspController } from './controllers/tsp.controller';
import { TspService } from './tsp.service';
import { TspSolver } from './domain/tsp-solver/tsp-solver';

/**
 * The TspModule class is a NestJS module that encapsulates the components
 * related to solving the Traveling Salesman Problem (TSP). It organizes the
 * TspController and TspService.
 *
 * NestJS modules are also responsible for dependency injetion (DI)
 * resolution within their scope.
 */
@Module({
    imports: [],
    controllers: [TspController],
    providers: [TspService, TspSolver],
})
export class TspModule {}
