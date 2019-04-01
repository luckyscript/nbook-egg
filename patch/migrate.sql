-- rename tables name
RENAME TABLE `un_article` TO `articles`,
             `un_category` TO `categories`,
             `un_comment` TO `comments`,
             `un_links` TO `links`,
             `un_tag` TO `tags`,
             `un_tag_config` TO `tag_configs`,
             `un_user` TO `users`;

-- add tables

DROP TABLE IF EXISTS `config`;

CREATE TABLE `config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `config` (`id`, `type`, `content`)
VALUES
	(1,'friendlink','[{name: \'huspy\', url: \'https:www.mierhuo.com\'}]');

-- alter table articles

ALTER TABLE `articles` MODIFY COLUMN created DATETIME;
ALTER TABLE `articles` MODIFY COLUMN modified DATETIME;


-- alter table categories

ALTER TABLE `categories` ADD COLUMN created DATETIME;


-- alter table comments

ALTER TABLE `comments` CHANGE COLUMN time created DATETIME;

-- alter table links

ALTER TABLE `links` CHANGE COLUMN date created DATETIME;

-- alter tag configs 

ALTER TABLE `tag_configs` CHANGE COLUMN `tagid` tag_id INT(11) NOT NULL;


-- alter table users

ALTER TABLE `users` ADD COLUMN salt VARCHAR(8) DEFAULT NULL;