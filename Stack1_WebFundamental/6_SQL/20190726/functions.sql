SELECT * FROM users;
-- CONCAT()
SELECT CONCAT('Mr.', first_name, ' ', last_name) AS full_name
FROM users;

-- CONCAT_WS()
SELECT CONCAT_WS(' ', 'Mr.', first_name, last_name) AS fill_name
FROM users;

-- LENGTH()
SELECT first_name, LENGTH(first_name)
FROM users;

-- LOWER()
SELECT first_name, LOWER(first_name)
FROM users;

-- for datetime column
-- Date, Hour, DayName, Month, Now, date_format(->w#school)
SELECT created_at, Date(created_at) AS date, Hour(created_at) AS hour, 
		DAYNAME(created_at) AS dayname, MONTH(created_at) AS month, 
        NOW() as curtime, DATE_FORMAT(created_at, '%W %M %e, %Y') AS date_format
FROM users;





