<?php
$lletra = $_GET['lletra'];
if ($lletra == 'D')
{
	$objecte1 = [
		"terme" => "Dominó",
		"definicions" => ["Joc que es juga amb 28 fitxes rectangulars dividides en 2 quadrats, cadascun port marcats entre 0 i 6 punts. Cada jugador, per torns, posar una fitxa a la taula que tingui un número igual als punts de qualsevol dels dos extrems que estiguin ja jugats. Guanya el primer que col·loca totes les fitxes o qui es queda amb menys punts en cas de cada el joc tancat.", 
							"Conjunt de fitxes que s'usen per jugar a aquest joc"],
	];
	$objecte2 = [
		"terme" => "Diàspora",
		"definicions" => ["Dispersió d'un grup ètnic, religiós o cultural fora del seu lloc originari, especialment la dels jueus.", 
							"Dispersió dels jueus per diverses contrades del món fora de la terra d'Israel a causa de reassentaments voluntaris o forçosos.",
							"Unitat funcional de disseminació de les plantes, com poden ésser els fruits, les espores, les llavors o els fragments de la planta mare."],
	];
	$array = array($objecte1,$objecte2);
	echo json_encode($array);
} else {
	echo ('Lletra no trobada');
}
?>