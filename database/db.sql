-- creating the database
CREATE DATABASE CUSTOMER_MANAGEMENT_SYSTEM;

use CUSTOMER_MANAGEMENT_SYSTEM;

-- creating a table
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Show all tables
SHOW TABLES;

-- To describe the table
describe customer;