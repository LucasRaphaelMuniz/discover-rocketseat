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
 prioriza a tabela da esquerda
*/
SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept

/* 
 ORDER BY
 DESC ==> tras para frente
*/
 SELECT * FROM aluno
ORDER BY responsavel 

/* 
 LIMIT
 LIMITA LINHAS
*/
SELECT * FROM aluno LIMIT 1

/* 
 OFFSET
 IGNORA OS PRIMEIROS RESULTADOS
*/
SELECT * FROM funcionarios
LIMIT 4 OFFSET 2


/* 
 COUNT
*/
SELECT count(nome) FROM funcionarios


 /* 
 GROUP BY
 */
SELECT id_departamento, count(id_departamento) 
FROM funcionarios
GROUP BY id_departamento


/* 
 JOIN, GROUP BY e COUNT juntos
*/
SELECT departamentos.descricao, count(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept

/* 
 HAVING
*/
SELECT departamentos.descricao, count(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
HAVING count(funcionarios.id_departamento)  IN (2, 3)

/* 
 CREATE TABLE
*/
CREATE TABLE alunos (
	matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
)

CREATE TABLE professores (
	id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
)

CREATE TABLE aulas (
	id_processor INTEGER,
  matricula INTEGER,
  FOREIGN KEY(id_processor) REFERENCES professores(id_professor),
  FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)

/* 
 ALTER TABLE
*/
ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno

/* 
 DROP TABLE
*/
DROP TABLE aulas