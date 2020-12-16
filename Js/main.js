//menu
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', e => {
	menu.classList.toggle("menu-expanded");
	menu.classList.toggle("menu-collapsed");

	document.querySelector('body').classList.toggle('body-expanded');
});

//agregar alumnos
(function(){
	//Variables
	var lista = document.getElementById("lista");
	    tareaInput = document.getElementById("tareaInput");
	    btnNewTarea = document.getElementById("btn-agregar");

    //Funciones
    var agregarTarea = function(){
    	var tarea = tareaInput.value;
    	nuevaTarea = document.createElement("li");
    	enlace = document.createElement("a");
    	contenido = document.createTextNode(tarea);

    	if(tarea === ""){
    		alert("Debes agregar los datos");
    		tareaInput.className = "error";//si esta nulo "" marca error
    		return false;
    	} 

    	enlace.appendChild(contenido);//agregamos contenido al enlace
    	enlace.setAttribute("href", "#");//establecemos un atributo href
    	nuevaTarea.appendChild(enlace);//agregamos enlace "a" a la nueva tarea <li>
    	lista.appendChild(nuevaTarea);//agregamos tarea a la lista

    	tareaInput.value = "";//para borrar lo que ingreso el usuario
    };

    var comprobarInput = function(){
    	tareaInput.className = "";
    	tareaInput.setAttribute("placeholder", "Debes agregar minimo un estudiante");//para quitar el error de nulo ""
    };

	//Eventos
	btnNewTarea.addEventListener("click", agregarTarea);//agrega tarea
	tareaInput.addEventListener("click", comprobarInput);//comprobar input
}());	

//agregar materias
(function(){
	//Variables
	var lista2 = document.getElementById("lista2");
	    tareaInput2 = document.getElementById("tareaInput2");
	    btnNewTarea2 = document.getElementById("btn-agregar2");

    //Funciones
    var agregarTarea2 = function(){
    	var tarea2 = tareaInput2.value;
    	nuevaTarea2 = document.createElement("li");
    	enlace2 = document.createElement("a");
    	contenido2 = document.createTextNode(tarea2);

    	if(tarea2 === ""){
    		alert("Debes agregar los datos");
    		tareaInput2.className = "error";//si esta nulo "" marca error
    		return false;
    	} 

    	enlace2.appendChild(contenido2);//agregamos contenido al enlace
    	enlace2.setAttribute("href", "#");//establecemos un atributo href
    	nuevaTarea2.appendChild(enlace2);//agregamos enlace "a" a la nueva tarea <li>
    	lista2.appendChild(nuevaTarea2);//agregamos tarea a la lista

    	tareaInput2.value = "";
    };
    
    var comprobarInput2 = function(){
    	tareaInput2.className = "";
    	tareaInput2.setAttribute("placeholder", "Agrega tu materia favorita");//para quitar el error de nulo ""
    };

	//Eventos
	btnNewTarea2.addEventListener("click", agregarTarea2);//agrega tarea
	tareaInput2.addEventListener("click", comprobarInput2);//comprobar input
}());	