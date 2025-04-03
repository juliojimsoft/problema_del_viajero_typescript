import { length } from "class-validator";
import { TspDistanceRequestDto } from "src/tsp/dtos/request/solve.request.dto";

export class TspSolver {
    /**
     * @param cities 
     * @param distances 
     * @returns 
    */
    /**
     * 
     * Entrada recibe una lista de ciudades y distancias entre ellas
     */
    solve(
        cities: string[],
        distances: TspDistanceRequestDto[],
    ):{route: string[]; totalDistance: number}{
        const graph = this.buildGraph(cities,distances);
        
        const iterations = 30000;
        let bestRoute: string[]=[];
        let bestDistance= Infinity;

        for(let i = 0;i<iterations;i++){
            const {route, totalDistance} = this.generateRoute(graph, cities[0]);
            if(totalDistance<bestDistance){
                bestDistance = totalDistance;
                bestRoute = route;
            }
        }

        return {
            route:bestRoute,
            totalDistance:bestDistance
        };
    }

    /**
     * construye una representacion grafica de las ciudades y distancias.
    */
    private buildGraph(
        cities: string[],
        distances: TspDistanceRequestDto[],
    ): Record<string, Record<string,number>>{
        //inicializacion grafo
        const graph: Record<string, Record<string, number>>={};
        //colocar ciudades en el mapas inicializar nodos
        for(const city of cities){
            graph[city]={};
        }
        //agregar distancias
        for(const{from, to, distance} of distances){
            graph[from][to]=distance;
            graph[to][from]=distance
        }
        return graph;
    }
    /*
    * Visitar todas las ciudades sin repeticiones (salvo el retorno al origen)
    * minimice o calcule la distancia total, aunque no grantiza la optimilidad
    * 
    */
    private generateRoute(
        graph: Record<string, Record<string,number>>,
        origin: string,
    ):{route: string[]; totalDistance: number}{
        //obtiene todas las ciudades del nodo
        const cities = Object.keys(graph);
        //visited, para llevar registro de ciudades visitadas
        const visited = new Set<string>();
        //route array que almacena el orden de vistias
        const route: string[]=[];
        //ciudad Actual
        let current = origin;
        //total distancia acumulador
        let totalDistance = 0;

        visited.add(current);
        route.push(current);

        while(visited.size < cities.length){
            const neighbors = Object.entries(graph[current])
            .filter(([neighbor])=>!visited.has(neighbor))
            if(neighbors.length===0) break;
            //Elige un vecino al azar entre los disponibles.
            const [nextCity, dist] = neighbors[Math.floor(Math.random()*neighbors.length)]
            //Actualización de la ruta y estado:

            //sumar distancia total
            totalDistance+=dist;
            //agrega la ciudad a la ruta
            route.push(nextCity);
            //marca como visitada
            visited.add(nextCity);
            //mueve el foco a la nueva ciudad
            current=nextCity;
        }        
        //verficar si existe una conexion directa entre la ultima ciudad visitada
        //y la ciduad de origen en el grafo.
        if(graph[current][origin]){
            //si la conexion existe suma la distancia desde la ultima ciduad el origen total acumulado
            totalDistance += graph[current][origin];
            //Agrega el origen al final del array cerrando el ciclo
            route.push(origin);
        }
        return {route,totalDistance};
    }

}
