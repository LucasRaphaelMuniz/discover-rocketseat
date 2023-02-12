 /* 
 JOIN
 */
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento

 /* 
 JOIN 
 WHERE
 */
SELECT * FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
WHERE funcionarios.id_departamento = 2

 /* 
 JOIN 
 especificando campos
 */
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept

 /* 
 ALIAS
 */
SELECT func.nome as "Nome" , func.cpf as "CPF" , dept.descricao "Departamento"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept

 /* 
 LEFT OUTER JOIN
 */
