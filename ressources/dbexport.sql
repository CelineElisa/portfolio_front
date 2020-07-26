-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_pict` text,
  `description` text,
  `techno` text,
  `email` varchar(80) DEFAULT NULL,
  `linkedin` text,
  `github` text,
  `cv` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'photoProfilNB.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.','HTML, CSS, Javascript ES6, React, Node.JS, SQL, Git ','cottier.celine@gmail.com','https://www.linkedin.com/in/c%C3%A9line-cottier','https://github.com/CelineElisa/','CV.pdf');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `techno` text,
  `description` text,
  `url_pict` text,
  `url_app` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projet`
--

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;
INSERT INTO `projet` VALUES (1,'Pixie Wilder','HTML, CSS et JS vanilla','Projet de groupe fait à la WCS en une semaine.','PixieWilderHome.png','https://celineelisa.github.io/PixieWilder/'),(2,'Liste de jeux ','React et appel API','Projet réalisé seule lors d\'un exercice à la Wild Code School','ListeJeux.png','https://liste-jeux.netlify.app'),(11,'Pôle Position','React et utilisation de deux API','Projet de groupe, réalisé à la WCS. Utilisation de l\'API Pôle emploi et de l\'API Navitia.','PPHome.png','https://pole-position.netlify.app'),(14,'MVO Formation','React, Node JS, SQL','Projet de groupe, réalisé pour la société MVO formation, société de formation professionnelle et coaching en BtoB.','MVOHome.png','https://paris-js-202003-pjt3-mvoformation-front.jsrover.wilders.dev');
/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screenshot`
--

DROP TABLE IF EXISTS `screenshot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screenshot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_project` int DEFAULT NULL,
  `name` varchar(80) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screenshot`
--

LOCK TABLES `screenshot` WRITE;
/*!40000 ALTER TABLE `screenshot` DISABLE KEYS */;
INSERT INTO `screenshot` VALUES (1,45,'screenshot 1','screenshot url'),(2,48,'screenshot 4','screenshot url2'),(3,56,'screenshot 8','screenshot url3'),(4,56,'screenshot de la mort','test update'),(20,2,'Page d\'acceuil','ListeJeux.png'),(21,2,'Version téléphone','ListeJeuxPhone.png'),(22,11,'Page d\'acceuil','PPHome.png'),(23,11,'image','PPResults.png'),(24,1,'Page d\'accueil','PixieWilderHome.png'),(25,1,'Dark ','PixieWilderDark.png'),(26,1,'Phone','PixieWilderPhone.png'),(29,11,'Version téléphone','PPPhone.png'),(30,14,'Home page','MVOHome.png'),(31,14,'Page article','MVOArticle.png'),(32,14,'Back office','MVOAdmin.png'),(33,14,'Version mobile','MVOPhone.png'),(34,14,'Menu burger','MVOPhone2.png'),(56,20,'bl','n'),(59,23,'Nom screenshot 1','screenshot 1');
/*!40000 ALTER TABLE `screenshot` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-26 13:06:41
