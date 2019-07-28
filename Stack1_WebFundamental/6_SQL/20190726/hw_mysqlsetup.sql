-- SQL commands : INSERT, SELECT, UPDATE, DELETE
-- 1. CREATE database/tables
DROP DATABASE sqlsetup;
CREATE DATABASE IF NOT EXISTS sqlsetup;
USE sqlsetup;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    created_at DATETIME,
    updated_at DATETIME,
    
    PRIMARY KEY (id)
);
SELECT * FROM users;

-- 2.INSERT
INSERT INTO users VALUES (1, 'Hayoung', 'Seo', NOW(), NOW());
INSERT INTO users VALUES (2, 'Heeyoon', 'Lee', NOW(), NOW());

-- 3.SELECT
SELECT * FROM users;

-- 4. UPDATE
UPDATE users SET first_name = 'HY' WHERE id = '1';
SELECT * FROM users;

-- 5. DELETE
DELETE FROM users WHERE id = '2';
SELECT * FROM users;














