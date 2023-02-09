CREATE DATABASE db_student;

USE db_student;

CREATE TABLE tbl_student(
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT null,
    birthday date,
   	gender tinyint DEFAULT 1,
    avatar varchar(255)
);