-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2024 at 07:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mahasiswa`
--

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `kd_dosen` varchar(7) NOT NULL,
  `nama_dosen` varchar(20) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `jns_kelamin` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`kd_dosen`, `nama_dosen`, `alamat`, `jns_kelamin`) VALUES
('[AB]', '[Abdul Rahmad]', '[Tanjungpinang]', '[laki-laki'),
('[AW]', '[Ade Winarni]', '[Tanjungpinang]', '[wanita]'),
('[LS]', '[Liza Safitri]', '[Tanjungpinang]', '[wanita]'),
('[TP]', '[Titania Pricillia]', '[Tanjungpinang]', '[wanita]'),
('[ZF]', '[Zulfachmi]', '[Tanjungpinang]', '[laki-laki');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` int(7) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `noHp` varchar(15) DEFAULT NULL,
  `JsnKelamin` varchar(10) DEFAULT NULL,
  `Prodi` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim`, `nama`, `alamat`, `noHp`, `JsnKelamin`, `Prodi`) VALUES
(4222001, '[Sri Wahyuni]', '[Jl. Batu Kucing]', '[081271755852]', '[wanita]', '[Komputer Akuntansi]'),
(4222002, '[Nuraika]', '[Tanjungpinang]', '081905188684', '[wanita]', '[Komputer akuntansi]'),
(4222003, '[Reynaldi Setya]', '[Jl. WR. Supratman]', '[089520120976]', '[laki-laki', '[Komputer Akuntansi]'),
(4222004, '[Farra Linus]', '[KM. 11 Tanjungpinang]', '[081276710621]', 'wanita', '[Komputer Akuntansi]'),
(4222006, '[Angelina]', '[KM. 09 Tanjungpinang]', '[083167608562]', '[wanita]', '[Komputer Akuntansi]'),
(4222007, 'Icca Simbolon', '[Jl. Pompa Air]', '081320578674', '[wanita]', '[komputer akuntansi]');

-- --------------------------------------------------------

--
-- Table structure for table `matakuliah`
--

CREATE TABLE `matakuliah` (
  `kd_matkul` varchar(10) NOT NULL,
  `nama_matkul` varchar(25) NOT NULL,
  `sks` int(5) NOT NULL,
  `semester` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matakuliah`
--

INSERT INTO `matakuliah` (`kd_matkul`, `nama_matkul`, `sks`, `semester`) VALUES
('[KA1401]', '[Matematika Diskrit]', 3, 4),
('[KA1402]', '[Rekayasa Perangkat Lunak', 3, 4),
('[KA1403]', '[Sistem Basis Data]', 3, 4),
('[KA1405]', '[Sistem Informasi Akuntan', 2, 4),
('[KA1406]', '[Pemrograman IV]', 3, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`kd_dosen`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD PRIMARY KEY (`kd_matkul`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
