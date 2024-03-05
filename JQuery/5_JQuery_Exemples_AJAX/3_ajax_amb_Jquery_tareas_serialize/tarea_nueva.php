<?php 
	header('Access-Control-Allow-Origin: *'); 
	header("Content-type: application/json;charset=utf8");
	mb_internal_encoding('UTF-8');
    $host="127.0.0.1"; 
    $username="root";  
    $password="informatica";
    $db_name="tareas"; 
    $con=mysqli_connect("$host", "$username", "$password","$db_name");
    /* verificar la conexión */
    if (mysqli_connect_errno()) {
        //var_dump("Falló la conexión: ", mysqli_connect_error());
        exit();
    }

//ATENCIÓ! Aquesta definició és necessària per a poder treballar amb caràcters especials (en aquest cas, la ñ i els accents).

/* cambiar el conjunto de caracteres a utf8 */
     $con->set_charset("utf8");
	 mysqli_set_charset($con, "utf8");
    
// recepció dels valors del formulari del client
            $NOMBRE = $_POST['nombre'];
            $HORA = (int)$_POST['hora']; 
			//var_dump('com arribar al servidor: '.$NOMBRE);
            $sql2 = "insert into tareas values ('" . ($NOMBRE) . "',".($HORA).")";
			//var_dump($sql2); //util per veure com és la sentència i si s'ha escrit correctament
            $resultado = mysqli_query($con,$sql2);
            
//$resultado=true;
            if (!$resultado)
            {
                echo false;
            }
            else
            {
                echo true;
            }
            $con->close();
?>
