<?php
    //Indicar els valors per el següents paràmetres segons la configuració de cada usuari
    $host="127.0.0.1"; 
    $username="root";  
    $password="informatica";
    $db_name="book_db"; 
    $con=new mysqli($host,$username,$password,$db_name); 
    // 4t paràmetre nom de la BD
    $book_name = $_POST['book_name'];
    $sql = "select book_name 
              from book_mast 
              where book_name LIKE '$book_name%'
              order by book_name";
      $result = $con->query($sql);
      $rows = array();
        while ($r = $result->fetch_assoc())
        {
          $rows[] = $r;
        }
      echo json_encode($rows);
      $con->close();
     /*
      D'aquesta manera recollim les dades (S'executa una consulta MySQL per seleccionar tots els llibres que comencen amb la lletra subministrada per l'usuari i es preparen les dades subministrades). 
      */    
?>