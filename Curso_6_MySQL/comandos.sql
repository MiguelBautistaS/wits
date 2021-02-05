CREATE DATABASE IF NOT EXISTS platzi_operation;
SHOW DATABASES;
USE platzi_operations;
SHOW TABLES;

CREATE TABLE IF NOT EXISTS books (
    book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_id INTEGER UNSIGNED,
    title VARCHAR(100) NOT NULL,
    `year` INTEGER UNSIGNED NOT NULL DEFAULT 1900,
    `language` VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'USO 639-1 Language',
    cover_url VARCHAR(500),
    price DOUBLE(6,2) NOT NULL DEFAULT 10.0,
    sellable TINYINT(1) DEFAULT 1,
    copies INTEGER NOT NULL DEFAULT 1,
    description TEXT 
);

CREATE TABLE IF NOT EXISTS authors (
    author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    nationality VARCHAR(3)
);

DROP TABLE authors;

DESCRIBE authors;

DESC books;
SHOW FULL COLUMNS FROM books;

CREATE TABLE clients (
    client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE, 
    birthdate DATETIME,
    gender ENUM('M', 'F', 'ND') NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS operations(
    operation_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    book_id INTEGER UNSIGNED,
    client_id INTEGER UNSIGNED,
    type ENUM('P', 'D', 'V') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP,
    finished TINYINT(1) NOT NULL
);

INSERT INTO authors(author_id, name, nationality) VALUES(NULL, 'Juan rulfo', 'MEX');
INSERT INTO authors(name, nationality) VALUES('gabriel García Márquez', 'COL');
INSERT INTO authors VALUES(NULL, 'Juan Gabriel Vasquez', 'COL');

INSERT INTO authors(name, nationality) VALUES('Julio Cortázar', 'ARG'), 
    ('Isabel Allende', 'CHI'), 
    ('Octavio Paz', 'MEX'),
    ('Juan Carlos Onetti', 'URY');
    
    
    
INSERT INTO`clients`(client_id, name, email, birthdate, gender, active) VALUES
	(1,'Maria Dolores Gomez','Maria Dolores.95983222J@random.names','1971-06-06','F',1),
	(2,'Adrian Fernandez','Adrian.55818851J@random.names','1970-04-09','M',1),
	(3,'Maria Luisa Marin','Maria Luisa.83726282A@random.names','1957-07-30','F',1),
	(4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1);```
    
INSERT INTO`clients`( name, email, birthdate, gender, active) VALUES
	('Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',0)
    ON DUPLICATE KEY UPDATE active = VALUES(active);
    
El Laberinto de la Soledad, Octavio Paz, 1955
INSERT INTO books(title, author_id) VALUES('El Laberinto de la Soledad', 6);

INSERT INTO books(title, author_id, `year`) 
VALUES('Vuelta al Laberinto de la Soledad', 
      (SELECT author_id FROM authors WHERE name = 'Octavio Paz' LIMIT 1), 1960);
      
ALTER TABLE  transactions 
MODIFY COLUMN  `type` enum(
'sell', 'lend', 'return') 
NOT NULL AFTER client_id; 
      
INSERT INTO transactions(transaction_id,book_id,client_id,`type`,`finished`) 
VALUES(1,12,34,'sell',1),
(2,54,87,'lend',0),
(3,3,14,'sell',1),
(4,1,54,'sell',1),
(5,12,81,'lend',1),
(6,12,81,'return',1),
(7,87,29,'sell',1);    
      
      
      
-- Listar todas la tuplas de la tabla clients
SELECT * FROM clients;

-- Listar todos los nombres de la tabla clients
SELECT name FROM clients;

-- Listar todos los nombres, email y género de la tabla clients
SELECT name, email, gender FROM clients;

-- Listar los 10 primeros resultados de la tabla clients
SELECT name, email, gender FROM clients LIMIT 10;

-- Listar todos los clientes de género Masculino
SELECT name, email, gender FROM clients WHERE gender = 'M';

-- Listar el año de nacimientos de los clientes, con la función YEAR()
SELECT YEAR(birthdate) FROM clients;

-- Mostrar el año actual
SELECT YEAR(NOW());

-- Listar los 10 primeros resultados de las edades de los clientes
SELECT YEAR(NOW()) - YEAR(birthdate) FROM clients LIMIT 10;

-- Listar nombre y edad de los 10 primeros clientes
SELECT name, YEAR(NOW()) - YEAR(birthdate) FROM clients LIMIT 10;

-- Listar clientes que coincidan con el nombre de "Saave"
SELECT * FROM clients WHERE name LIKE '%Saave%';

-- Listar clientes (nombre, email, edad y género). con filtro de genero = F y nombre que coincida con 'Lop'
--Usando alias para nombrar la función como 'edad'
SELECT name, email, YEAR(NOW()) - YEAR(birthdate) AS edad, gender FROM clients WHERE gender = 'F' AND name LIKE '%Lop%';



SELECT count(*) from books;
SELECT count(*) from authors;
SELECT * FROM authors WHERE author_id > 0 AND author_id <= 5;
SELECT * FROM books WHERE author_id BETWEEN 1 AND 5;
SELECT book_id, author_id, title FROM books WHERE author_id BETWEEN 1 AND 5;

SELECT b.book_id, a.name, a.author_id, b.title
FROM books as b 
JOIN authors as a
ON a.author_id = b.author_id
where a.author_id BETWEEN 1 AND 5;

SELECT * FROM transactions;

SELECT c.name, b.title, a.name, t.type
FROM transactions as t
JOIN books as b
ON t.book_id = b.book_id
JOIN clients as c
ON t.client_id = c.client_id
JOIN authors as a
ON b.author_id = a.author_id
WHERE c.gender = 'M' 
AND t.type IN ('sell', 'lend');
