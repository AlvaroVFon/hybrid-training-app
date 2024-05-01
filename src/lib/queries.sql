--Registros de entrenamiento

SELECT ej.nombre FROM "registros_entrenamientos" re
INNER JOIN ejercicios_entrenamientos ee ON re."entrenamientoID" = ee."entrenamientoID"
INNER JOIN ejercicios ej ON ee."ejercicioID" = ej."ejercicioID"
group by ej.nombre;


;
SELECT re."entrenamientoID",re."ejercicioID",ej.nombre, re.series, re.repeticiones, re.peso, ent."nombreEntrenamiento" FROM "registros_entrenamientos" re
INNER JOIN ejercicios ej on re."ejercicioID" = ej."ejercicioID"
INNER JOIN entrenamientos ent on re."entrenamientoID" = ent."entrenamientoID"
INNER JOIN usuarios u on ent."userID" = u."userID" where re."fechaCreacion" = '2024-04-21' and u."userID" = 1;


SELECT ent."nombreEntrenamiento", ej.nombre from entrenamientos ent
INNER JOIN ejercicios_entrenamientos ee ON ee."entrenamientoID" = ent."entrenamientoID"
INNER JOIN ejercicios ej ON ee."ejercicioID" = ej."ejercicioID"
INNER JOIN usuarios u ON ent."userID" = u."userID"
WHERE u."userID" = 1;

SELECT max(entrenamientoID) FROM "entrenamientos";