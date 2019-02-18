# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: nbook
# Generation Time: 2019-02-18 10:48:51 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table articles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `aid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `created` varchar(15) NOT NULL DEFAULT '0',
  `modified` varchar(30) NOT NULL DEFAULT '0',
  `text` text,
  `order` int(10) NOT NULL DEFAULT '0',
  `authorId` int(10) unsigned NOT NULL DEFAULT '0',
  `status` varchar(16) NOT NULL DEFAULT 'public',
  `commentsNum` int(10) unsigned NOT NULL DEFAULT '0',
  `allowComment` tinyint(1) NOT NULL DEFAULT '1',
  `categoryId` int(10) NOT NULL DEFAULT '0',
  `slug` varchar(100) DEFAULT NULL,
  `readnum` int(11) NOT NULL DEFAULT '0',
  `type` varchar(20) NOT NULL DEFAULT 'article',
  PRIMARY KEY (`aid`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_category`;

CREATE TABLE `un_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `name` varchar(20) NOT NULL DEFAULT '',
  `count` int(11) NOT NULL DEFAULT '0',
  `ename` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_category_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_category_config`;

CREATE TABLE `un_category_config` (
  `cid` int(11) unsigned NOT NULL,
  `aid` int(11) NOT NULL,
  PRIMARY KEY (`cid`,`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_chat
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_chat`;

CREATE TABLE `un_chat` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `content` text,
  `time` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_comment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_comment`;

CREATE TABLE `un_comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL DEFAULT '',
  `content` text,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) NOT NULL DEFAULT '',
  `pid` int(11) DEFAULT NULL,
  `identity` varchar(20) DEFAULT NULL,
  `site` varchar(100) NOT NULL DEFAULT '',
  `time` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_history`;

CREATE TABLE `un_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `date` varchar(20) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_links
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_links`;

CREATE TABLE `un_links` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(200) NOT NULL DEFAULT '',
  `categoryId` int(11) NOT NULL DEFAULT '0',
  `readnum` int(11) NOT NULL DEFAULT '0',
  `uuid` varchar(16) NOT NULL DEFAULT '',
  `show` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_nav
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_nav`;

CREATE TABLE `un_nav` (
  `name` varchar(20) NOT NULL DEFAULT '',
  `path` varchar(100) NOT NULL DEFAULT '',
  `show` tinyint(1) NOT NULL DEFAULT '1',
  `sort` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`name`),
  UNIQUE KEY `path` (`path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_tag`;

CREATE TABLE `un_tag` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_tag_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_tag_config`;

CREATE TABLE `un_tag_config` (
  `tagid` int(11) unsigned NOT NULL,
  `aid` int(11) NOT NULL,
  PRIMARY KEY (`tagid`,`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_tweet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_tweet`;

CREATE TABLE `un_tweet` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` text,
  `time` varchar(25) DEFAULT NULL,
  `author` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table un_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_user`;

CREATE TABLE `un_user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `mail` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `screenName` varchar(32) DEFAULT NULL,
  `created` int(10) unsigned DEFAULT '0',
  `activated` int(10) unsigned DEFAULT '0',
  `logged` int(10) unsigned DEFAULT '0',
  `group` varchar(16) DEFAULT 'visitor',
  `authCode` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
