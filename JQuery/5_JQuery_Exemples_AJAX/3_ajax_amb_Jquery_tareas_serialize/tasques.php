<?php  
	header('Content-type: text/javascript');  
        //Indicar els valors per el següents paràmetres segons la configuració de cada usuari
    $host="127.0.0.1"; 
    $username="root";  
    $password="informatica";
    $db_name="tareas"; 
    $con=new mysqli($host,$username,$password,$db_name); 

    $sql = 'SELECT * FROM tareas order by hora,nombre';  
    $tareas = array();  
    //if($resultado = $bbdd->query($query))  
      $resultado = 
        $result = $con->query($sql);
        $rows = array();
  
     while($tarea = $result->fetch_object())  
        $tareas[] = $tarea;  
      
    echo json_encode($tareas);  
    $con->close();
?> 
    