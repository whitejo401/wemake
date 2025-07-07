-- Seed data for WeMake application
-- Profile ID to use: 8354a3c8-d310-4dcf-8b2a-b2124904b441

-- First, ensure the profile exists (profiles table is excluded from seeding, but we need the user)
INSERT INTO "users" ("id") VALUES ('8354a3c8-d310-4dcf-8b2a-b2124904b441')
ON CONFLICT ("id") DO NOTHING;

-- 1. Topics (independent table)
INSERT INTO "topics" ("name", "slug") VALUES
('Product Development', 'product-development'),
('Startup Life', 'startup-life'),
('Tech News', 'tech-news'),
('Career Advice', 'career-advice'),
('Design Tips', 'design-tips');

-- 2. Categories (independent table)
INSERT INTO "categories" ("name", "description") VALUES
('SaaS', 'Software as a Service applications'),
('Mobile Apps', 'Mobile applications for iOS and Android'),
('Developer Tools', 'Tools and utilities for developers'),
('Design Tools', 'Design and prototyping tools'),
('Analytics', 'Data analytics and insights tools');

-- 3. Posts (depends on topics)
INSERT INTO "posts" ("title", "content", "topic_id", "profile_id") VALUES
('How to Build a Successful SaaS Product', 'Building a SaaS product requires careful planning and execution. Here are some key steps...', 1, '8354a3c8-d310-4dcf-8b2a-b2124904b441'),
('The Future of Remote Work', 'Remote work is here to stay. Companies need to adapt their processes...', 2, '8354a3c8-d310-4dcf-8b2a-b2124904b441'),
('Latest Trends in AI Development', 'Artificial Intelligence is rapidly evolving. Here are the latest trends...', 3, '8354a3c8-d310-4dcf-8b2a-b2124904b441'),
('Career Growth in Tech', 'Advancing your career in technology requires continuous learning...', 4, '8354a3c8-d310-4dcf-8b2a-b2124904b441'),
('Design Principles for Better UX', 'Good design is crucial for user experience. Here are some principles...', 5, '8354a3c8-d310-4dcf-8b2a-b2124904b441');

-- 4. GPT Ideas (independent table)
INSERT INTO "gpt_ideas" ("idea", "views", "claimed_by") VALUES
('AI-powered personal finance manager', 150, '8354a3c8-d310-4dcf-8b2a-b2124904b441'),
('Virtual reality fitness platform', 89, NULL),
('Blockchain-based supply chain tracker', 234, NULL),
('Smart home energy optimization app', 67, NULL),
('Language learning with AR technology', 123, NULL);

-- 5. Jobs (independent table)
INSERT INTO "jobs" ("position", "overview", "responsibilities", "qualifications", "benefits", "skills", "company_name", "company_logo", "company_location", "apply_url", "job_type", "location", "salary_range") VALUES
('Senior Frontend Developer', 'Join our team to build amazing user experiences', 'Develop responsive web applications, collaborate with design team', '5+ years React experience, TypeScript proficiency', 'Health insurance, remote work, flexible hours', 'React, TypeScript, CSS, Git', 'TechCorp', 'https://example.com/logo1.png', 'San Francisco, CA', 'https://example.com/apply1', 'full-time', 'hybrid', '$120,000 - $150,000'),
('Product Designer', 'Create beautiful and functional designs', 'Design user interfaces, conduct user research', '3+ years design experience, Figma expertise', 'Competitive salary, creative environment', 'Figma, Sketch, User Research, Prototyping', 'DesignStudio', 'https://example.com/logo2.png', 'New York, NY', 'https://example.com/apply2', 'full-time', 'in-person', '$100,000 - $120,000'),
('DevOps Engineer', 'Build and maintain our infrastructure', 'Manage cloud infrastructure, automate deployments', 'AWS experience, Docker knowledge', 'Remote work, learning budget', 'AWS, Docker, Kubernetes, CI/CD', 'CloudTech', 'https://example.com/logo3.png', 'Austin, TX', 'https://example.com/apply3', 'full-time', 'remote', '$150,000 - $250,000'),
('Marketing Manager', 'Drive growth through strategic marketing', 'Develop marketing campaigns, analyze performance', '5+ years marketing experience, data-driven', 'Performance bonuses, career growth', 'Digital Marketing, Analytics, Strategy', 'GrowthCo', 'https://example.com/logo4.png', 'Seattle, WA', 'https://example.com/apply4', 'full-time', 'hybrid', '$70,000 - $100,000'),
('Junior Developer', 'Start your career in software development', 'Write clean code, learn from senior developers', 'Computer science degree, programming basics', 'Mentorship, learning resources', 'JavaScript, Python, Git, Problem Solving', 'StartupXYZ', 'https://example.com/logo5.png', 'Boston, MA', 'https://example.com/apply5', 'part-time', 'in-person', '$50,000 - $70,000');

-- 6. Products (depends on categories)
INSERT INTO "products" ("name", "tagline", "description", "how_it_works", "icon", "url", "stats", "profile_id", "category_id") VALUES
('TaskFlow', 'Streamline your workflow', 'A project management tool that helps teams collaborate effectively', 'Create projects, assign tasks, track progress in real-time', 'https://example.com/icon1.png', 'https://taskflow.com', '{"views": 1250, "reviews": 45}', '8354a3c8-d310-4dcf-8b2a-b2124904b441', 1),
('DesignHub', 'Design better, faster', 'All-in-one design platform for modern teams', 'Import designs, collaborate with team, export assets', 'https://example.com/icon2.png', 'https://designhub.com', '{"views": 890, "reviews": 32}', '8354a3c8-d310-4dcf-8b2a-b2124904b441', 4),
('CodeSync', 'Version control made simple', 'Git client with advanced features for developers', 'Connect repositories, manage branches, review code', 'https://example.com/icon3.png', 'https://codesync.com', '{"views": 2100, "reviews": 78}', '8354a3c8-d310-4dcf-8b2a-b2124904b441', 3),
('DataViz', 'Visualize your data', 'Create beautiful charts and dashboards', 'Connect data sources, choose templates, customize charts', 'https://example.com/icon4.png', 'https://dataviz.com', '{"views": 567, "reviews": 23}', '8354a3c8-d310-4dcf-8b2a-b2124904b441', 5),
('MobileFirst', 'Build mobile apps easily', 'No-code platform for mobile app development', 'Drag and drop interface, preview on device, publish to stores', 'https://example.com/icon5.png', 'https://mobilefirst.com', '{"views": 1450, "reviews": 56}', '8354a3c8-d310-4dcf-8b2a-b2124904b441', 2);

-- 7. Reviews (depends on products)
INSERT INTO "reviews" ("product_id", "profile_id", "rating", "review") VALUES
(1, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 5, 'Excellent project management tool! Very intuitive interface.'),
(2, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 4, 'Great design platform, but could use more collaboration features.'),
(3, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 5, 'Best Git client I have ever used. Highly recommended!'),
(4, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 3, 'Good for basic charts, but advanced features are limited.'),
(5, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 4, 'Perfect for rapid prototyping. Saves a lot of development time.');

-- 8. Team (independent table)
INSERT INTO "team" ("product_name", "team_size", "equity_split", "product_stage", "roles", "product_description") VALUES
('EcoTracker', 3, 33, 'mvp', 'Developer, Designer, Marketer', 'Environmental impact tracking app for businesses'),
('HealthAI', 5, 20, 'product', 'Developer, Designer, Data Scientist, Product Manager, Marketer', 'AI-powered health monitoring platform'),
('EduTech', 2, 50, 'prototype', 'Developer, Designer', 'Interactive learning platform for students'),
('FinTech', 4, 25, 'idea', 'Developer, Designer, Finance Expert, Marketer', 'Personal finance management tool'),
('SocialApp', 3, 33, 'mvp', 'Developer, Designer, Community Manager', 'Social networking platform for professionals');

-- 9. Message Rooms (independent table)
INSERT INTO "message_rooms" ("created_at") VALUES
(NOW()),
(NOW()),
(NOW()),
(NOW()),
(NOW());

-- 10. Bridge tables (composite primary keys) - 1 row each
INSERT INTO "post_upvotes" ("post_id", "profile_id") VALUES (1, '8354a3c8-d310-4dcf-8b2a-b2124904b441');

INSERT INTO "gpt_ideas_likes" ("gpt_idea_id", "profile_id") VALUES (1, '8354a3c8-d310-4dcf-8b2a-b2124904b441');

INSERT INTO "product_upvotes" ("product_id", "profile_id") VALUES (1, '8354a3c8-d310-4dcf-8b2a-b2124904b441');

INSERT INTO "follows" ("follower_id", "following_id") VALUES ('8354a3c8-d310-4dcf-8b2a-b2124904b441', '8354a3c8-d310-4dcf-8b2a-b2124904b441');

INSERT INTO "message_room_members" ("message_room_id", "profile_id") VALUES (1, '8354a3c8-d310-4dcf-8b2a-b2124904b441');

-- 11. Messages (depends on message_rooms)
INSERT INTO "messages" ("message_room_id", "sender_id", "content") VALUES
(1, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Hello! How are you doing?'),
(2, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Great to meet you!'),
(3, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Looking forward to collaborating'),
(4, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Thanks for the opportunity'),
(5, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Let us work together on this project');

-- 12. Notifications (depends on products, posts)
INSERT INTO "notifications" ("source_id", "product_id", "post_id", "target_id", "type") VALUES
('8354a3c8-d310-4dcf-8b2a-b2124904b441', 1, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'review'),
('8354a3c8-d310-4dcf-8b2a-b2124904b441', NULL, 1, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'reply'),
('8354a3c8-d310-4dcf-8b2a-b2124904b441', NULL, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'follow'),
('8354a3c8-d310-4dcf-8b2a-b2124904b441', 2, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'mention'),
('8354a3c8-d310-4dcf-8b2a-b2124904b441', NULL, 2, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'reply');

-- 13. Post Replies (depends on posts)
INSERT INTO "post_replies" ("post_id", "parent_id", "profile_id", "reply") VALUES
(1, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Great insights on SaaS development!'),
(2, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Remote work is definitely the future.'),
(3, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'AI is transforming everything around us.'),
(4, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Continuous learning is key in tech.'),
(5, NULL, '8354a3c8-d310-4dcf-8b2a-b2124904b441', 'Design principles are fundamental for good UX.'); 