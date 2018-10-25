# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.38)
# Database: powerrecruiterdb
# Generation Time: 2018-10-24 03:09:03 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Candidates
# ------------------------------------------------------------

LOCK TABLES `Candidates` WRITE;
/*!40000 ALTER TABLE `Candidates` DISABLE KEYS */;

INSERT INTO `Candidates` (`id`, `firstname`, `lastname`, `email`, `phone`, `education`, `experience`, `linkedinprofile`, `jobpostingid`, `stage`, `rating`, `createdAt`, `updatedAt`)
VALUES
	(1,'Altaf',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,'Aditi',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,'Sonam',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `Candidates` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table JobPostings
# ------------------------------------------------------------

LOCK TABLES `JobPostings` WRITE;
/*!40000 ALTER TABLE `JobPostings` DISABLE KEYS */;

INSERT INTO `JobPostings` (`id`, `title`, `location`, `type`, `duration`, `description`, `status`, `createdAt`, `updatedAt`)
VALUES
	(1,'Senior Javascript Developer','Toronto','Permanent','Permanent','This position is for a senior javascript developer','Active','2018-10-24 03:03:12','2018-10-24 03:03:12');

/*!40000 ALTER TABLE `JobPostings` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
