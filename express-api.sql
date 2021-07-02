-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2021 at 06:11 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `tweet`
--

CREATE TABLE `tweet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(100) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tweet`
--

INSERT INTO `tweet` (`id`, `user_id`, `content`, `date_time`) VALUES
(2, 0, 'undefined', '2021-06-30 23:49:27'),
(3, 0, 'undefined', '2021-06-30 23:49:36'),
(4, 0, 'undefined', '2021-06-30 23:54:36'),
(6, 1, 'undefined', '2021-07-02 03:45:08'),
(7, 1, 'undefined', '2021-07-02 02:56:42'),
(8, 1, 'new at 11:45', '2021-07-01 19:45:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tweet`
--
ALTER TABLE `tweet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tweet`
--
ALTER TABLE `tweet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
