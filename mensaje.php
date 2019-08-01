<?php
$destino="ianricardo2011@hotmail.com";
$nombre= $_POST["nom"];
$correo= $_POST["corr"];
$mensaje= $_POST["msj"]; 
$contenido="Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
mail($destino, "Correo desde la pagina con php", $contenido);
header("Location: index.html");
?>