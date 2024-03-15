fetch('menu.json')
//Que hace? Eta linea inicia la carga del archivo menu.json fetch es una funcion de javascript que facilita la realizacion de solicitudes de red,como obtener datos de un archivoo un endoint de API. 
//Comofnciona? fetch devuelve una promesa que;cuando  resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directaamnete o datos en formao JON,sino un objeto de respuesta que incluye varios detalles sobre la respuesta
.then (reponse => reponse.json())
//Que hace? Esta linea toma objeto de respuesta obtenido del fetch y utiliza lmetodo.json() para convertir el cuerpo de la respuesta en un objeto JavaScript (eto asume que el cuerpo de la respuesta eta en formato JSON).
