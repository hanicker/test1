--
-- Struttura della tabella `ristoranti`
--

CREATE TABLE IF NOT EXISTS `ristoranti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dump dei dati per la tabella `ristoranti`
--

INSERT INTO `ristoranti` (`id`, `nome`, `lat`, `lng`, `tipo`) VALUES
(1, 'Ristorante 1', 45.450001, 9.300000, 'italiano'),
(2, 'Ristorante 2', 45.459999, 9.200000, 'giapponese'),
(3, 'Ristorante 3', 45.419998, 9.400000, 'indiano'),
(4, 'Ristorante 4', 45.430000, 9.500000, 'messicano'),
(5, 'Ristorante 5', 45.439999, 9.100000, 'russo');
