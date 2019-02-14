-- 时间统一用datetime 来存储
ALTER TABLE article modify created DATETIME;
ALTER TABLE article modify modified DATETIME; 