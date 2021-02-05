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