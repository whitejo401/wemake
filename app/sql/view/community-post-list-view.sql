CREATE OR REPLACEVIEW community_post_list_view AS
SELECT
  posts.post_id,
  posts.title,
  posts.created_at,
  posts.profile_id,
  topics.name AS topic,
  profiles.name AS author,
  profiles.avatar AS author_avatar,
  profiles.username AS author_username,
  posts.upvotes
FROM posts
INNER JOIN topics USING (topic_id)
INNER JOIN profiles USING (profile_id)
LEFT JOIN post_upvotes USING (post_id)
GROUP BY posts.post_id, posts.profile_id, topics.name, profiles.name, profiles.avatar, profiles.username;



