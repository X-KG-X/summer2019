USE twitter;
-- 1. What query would you run to get all tweets from the user id of 1?
SELECT t.tweet AS kobe_tweets
FROM users AS u
LEFT JOIN tweets AS t ON u.id = t.user_id
WHERE u.id = '1';

-- 2. What query would return all the tweets that the user with id 2 has tagged as favorites?
SELECT *
FROM users AS u
LEFT JOIN faves AS f ON u.id = f.user_id
LEFT JOIN tweets AS t ON t.id = f.tweet_id
WHERE u.id = '2';


-- SELECT *
-- FROM faves
-- WHERE faves.user_id = 2;

-- 3. What query would you run to get all the tweets that user with id 2, or user with id 1, has tagged as favorites?
SELECT u.id AS uid, f.tweet_id, t.tweet
FROM users AS u
LEFT JOIN faves AS f ON u.id = f.user_id
LEFT JOIN tweets AS t ON f.tweet_id = t.id
WHERE u.id = '1' OR u.id = '2';

-- 4. What query would you run to get all the users that are following the user with id 1?
select u.id, u.first_name, u2.id, u2.first_name
FROM users AS u
LEFT JOIN follows AS f ON u.id = f.followed_id
LEFT JOIN users AS u2 ON f.follower_id = u2.id
WHERE u.id = '1';

-- 5. What query would you run to get all users that are not following the user with id of 2?
SELECT u.id, u.first_name
FROM users AS u
WHERE u.id NOT IN 
	(
    SELECT f.follower_id
    FROM follows AS f
    WHERE f.followed_id = '2'
    )
    AND u.id != '2';

-- follower count
SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id






