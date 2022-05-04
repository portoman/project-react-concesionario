/*
Abrir cmd y poner: 

cd C:\Users\afdm\Desktop\PortableGit\Develop\mysql-8.0.27-winx64\bin

mysqld --console

Abrir otro cmd e incicializar sql:

cd C:\Users\afdm\Desktop\PortableGit\Develop\mysql-8.0.27-winx64\bin

mysql.exe -u root
*/

DROP DATABASE IF EXISTS concesionario;

CREATE DATABASE concesionario;

USE concesionario;

CREATE TABLE formulario(
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellidos VARCHAR(20) NOT NULL,
    telefono DECIMAL(8) NOT NULL,
    consulta VARCHAR(200)
)ENGINE=InnoDB;

CREATE TABLE usuarioConcesionario(
    usuario DECIMAL(5) PRIMARY KEY,
    contraseña VARCHAR(20) NOT NULL
)ENGINE=InnoDB;


CREATE TABLE cliente(
    id_cliente INT(10) PRIMARY KEY AUTO_INCREMENT,
    DNI VARCHAR(8) NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    apellidos VARCHAR(20) NOT NULL,
    telefono DECIMAL(8) NOT NULL,
    cpostal DECIMAL(5) NOT NULL,
    ciudad VARCHAR(20) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE coche(
    id_coche DECIMAL(5) PRIMARY KEY,
    matricula VARCHAR(50) UNIQUE NOT NULL,
    modelo VARCHAR(30),
    marca VARCHAR(30),
    km DECIMAL(9),
    precio DECIMAL(9),
    foto VARCHAR(30),
    cilindrada VARCHAR(30),
    combustible VARCHAR(30),
    id_cliente INT(10),
    alquiler VARCHAR(10) CHECK (alquiler='true' OR alquiler='false'),
    oferta VARCHAR(10) CHECK (oferta='true' OR oferta='false'),
    CONSTRAINT fk_persona FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) 
)ENGINE=InnoDB;

CREATE TABLE alquiler(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    fecha_entrega VARCHAR(30),
    fecha_devolucion VARCHAR(30),
    id_coche DECIMAL(5),
    id_cliente INT(10),
    precio DECIMAL(10),
    CONSTRAINT fk_cliente_alquiler FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente), 
    CONSTRAINT fk_coche_alquiler FOREIGN KEY (id_coche) REFERENCES coche(id_coche)
)ENGINE=InnoDB;

CREATE TABLE venta(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    fecha VARCHAR(30),
    id_coche DECIMAL(5),
    id_cliente INT(10),
    precio DECIMAL(10),
    CONSTRAINT fk_cliente_venta FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente), 
    CONSTRAINT fk_coche_venta FOREIGN KEY (id_coche) REFERENCES coche(id_coche)
)ENGINE=InnoDB;