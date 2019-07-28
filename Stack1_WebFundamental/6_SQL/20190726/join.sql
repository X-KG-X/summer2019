-- JOIN
SELECT users.first_name, users.last_name, tweets.tweet
FROM users
JOIN tweets
ON users.id = tweets.user_id;
-- JOIN returns only if in both tables
-- LEFT JOIN returns everything in the left table

-- GROUP BY
SELECT users.id, users.first_name, COUNT(tweets.id) AS cnt_tweet
FROM users
JOIN tweets ON users.id = tweets.user_id
GROUP BY users.id;

-- GROUP_CONCAT
SELECT users.id, users.first_name, GROUP_CONCAT(tweets.id) AS tweet_ids
FROM users
JOIN tweets ON users.id = tweets.user_id
GROUP BY users.id




