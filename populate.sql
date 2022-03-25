CREATE DATABASE IF NOT EXISTS AtividadesTs;

CREATE TABLE AtividadesTs.Users (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

INSERT INTO AtividadesTs.Users(id, name)VALUES('aaaaaaaaaa', 'Pablo');