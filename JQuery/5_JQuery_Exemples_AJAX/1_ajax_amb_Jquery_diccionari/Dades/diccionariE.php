<?php
$lletra = $_POST['lletra'];
if ($lletra == 'E')
{
  $html = '<dl> <dt>EIXAM</dt>';
  $html .= '<dd>Habitació natural de les abelles</dd>';
  $html .= '<dd>Recipient construit com habitacle de les abelles</dd>';
  $html .= '<dd>Lloc o edifici en el que viu molta gent apinyada</dd>';
  echo($html);
} else {
  echo ('Lletra no trobada '.$lletra);
}
?>