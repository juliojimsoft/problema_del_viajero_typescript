#Soluciones

## Ejecutar y consumir

Para consumir API y ejecutar correctamente, se cambia el orden, primero el prefijo despues
arrancar el servidor.

## Calculo de distancia entre ciudades

Para el calculo de distancia entre ciudades, creadas de forma aleatoria, se usa la formula de distancia entre dos puntos, despues de crear las coordenadas x, y, tener la matriz, recorrerla, para calcular la distancia entre puntos, considerando las reciprocas ej: A-B, B-A, A-A fuente:
https://youtu.be/HPS7B57keEE

Calcular la distancia entre cada par único de ciudades y devolver un arreglo con objetos siguiendo
el TspDistanceResponseDto

## Calculo de ruta

Fuente: https://www.youtube.com/watch?v=6M6m6kSnruw
fuente: https://es.slideshare.net/slideshow/el-problema-del-agente-viajero-resuelto-por-fuerza-programacin-dinmica-y-voraz/60995423
fuente: https://medium.com/opex-analytics/heuristic-algorithms-for-the-traveling-salesman-problem-6a53d8143584

Grafo, estructura de datos, asume que las conexiones son bidireccionales
Aleatoriedad: La seleccion de vecinos es aleatoria (no es optima)
Rapido en la ejecucion con 30 mil

No es tan optimo. La ruta tiene un desface de prueba de 5 unidades hasta 12 unidades
Aleatoriedad: Diferentes ejecuciones dan resultados distintos

Mejoras posibles
Heuristicas: Algoritmo de hormiga, Vecino mas cercano, en lugar de aleatoriedad
Validacion: Verificar si el grafo es conexo antes de empezar
