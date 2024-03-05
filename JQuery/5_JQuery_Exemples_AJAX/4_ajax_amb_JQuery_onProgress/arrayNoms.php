<?php 
// Fill up array with names
$a[]="Anna"; $a[]="Veronica"; $a[]="Cinta"; $a[]="Diana"; $a[]="Eva"; $a[]="Francina"; 
$a[]="Mireia"; $a[]="Vanesa"; $a[]="Conrad"; $a[]="Darius"; $a[]="Estefania"; $a[]="Francesc"; 
$a[]="Gina"; $a[]="Helena"; $a[]="Imma"; $a[]="Joana"; $a[]="Cristina"; $a[]="Lidia"; 
$a[]="Núria"; $a[]="Ofelia"; $a[]="Petunia"; $a[]="Amanda"; $a[]="Raquel"; $a[]="Diana"; 
$a[]="Dunia";  $a[]="Erika";$a[]="Susanna";$a[]="Teresa";$a[]="Violeta";$a[]="Lilian";
$a[]="Ester";$a[]="Natalia";$a[]="Victoria";$a[]="Ursula";$a[]="Iolanda";$a[]="Santi";       
$a[]="Joan"; $a[]="Víctor"; $a[]="Marc"; $a[]="Adrià"; $a[]="Iris"; $a[]="Adriàn"; 
$a[]="David"; $a[]="Ihar"; $a[]="Joel"; $a[]="Sergio"; $a[]="Sergi"; $a[]="Pau"; 

// agafa el paràmetre q de la URL
$q = $_REQUEST["q"]; 
$hint = "";
// mirar si tots els elements són diferents
if ($q !== "")
  {
  $q = strToLower($q);
  $len = strlen($q);
  foreach ($a as $name)
  {
    if (strIstr($q, substr($name,0,$len)))
    {
      if ($hint ==="")
      {        $hint = $name;    
      }else{
        $hint .= ", $name";
  } } }
  }
// Sortida "no suggestion" si no s'ha trobat cap coincidència
// o la Sortida  amb el valors correctes
echo $hint === "" ? "<b>No hi ha noms sugerits</b>" : $hint;
?>
