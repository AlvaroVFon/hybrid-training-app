SELECT * FROM entrenamientos e INNER JOIN usuarios u ON e.user_ID = u.id
INNER JOIN ejercicios_entrenamientos ee ON ee.entrenamiento_id = e.id
INNER JOIN ejercicios ej ON ej.id = ee.ejercicio_id
WHERE e.user_ID = 1 ORDER BY e.fecha_creacion DESC;