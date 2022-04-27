/*Primero guardamos en las variables los nodos que vamos a utilizar, en este caso es mejor declarar el nameInfo y el emailInfo dentro de la función
del disparador del submit ya que es ahí dentro donde se va a realizar el proceso de guardar la información y así nos evitamos problemas*/ 

const submit = document.getElementById('containerSubmit');
// const nameInfo = document.getElementById('Name');            
// const emailInfo = document.getElementById('Email');            
const container = document.getElementById('container');  
       


/*Ahora añadimos el evento al boton de submit, para que al clicarlo guarde el contenido de las cajas name y email en el localStorage. Este disparador siempre espera como parámetro un string y una fucnión; en la posición del string ponemos el 'click' con el que le indicamos el tipo de disparador.Es importante acordarse de añadir .value al final (Javascript detecta internamente que esa propiedad .value es la información que hemos introducido en la caja de texto donde ponemos el nombre; lo mismo ocurre con la caja del correo.) Al guardar la información en el local storage ponemos la key que queramos para luego reutilizarla y recuperar esa info; en este caso hemos usado:nombre,correo y texto. Al final de la función añadimos una última función que servirá para dos cosas: primero, recuperar los datos del local storage para segundo, imprimir esa información en pantalla.*/ 

//Se usa una función porque cada vez que se cumpla el evento se realizará un proceso de código y queremos que se repita siempre que eso ocurra. Cuando queremos que algo se repita muchas veces en lugar de repetir el código cada vez creamos las FUNCIONES para llamarlas cuando nos interese y ya está, en este caso cuando hacemos click en el botón. La función PintarDatos la metemos dentro de la función del evento porque es otro trozo de código que queremos que se repita siempre que se cumpla el evento; se pone en una función distinta porque es conveniente que una función se encargue para una tarea en específico.

const usuarios = [];

submit.addEventListener('click', function(){
    const nameInfo = document.getElementById('Name');
    const emailInfo = document.getElementById('Email');
    const textArea = document.getElementById('text'); 
    const user = {
        nombre:nameInfo.value,
        email:emailInfo.value,
        texto:textArea.value,
    }
    usuarios.push(user);
    console.log(usuarios)
    guardarDatos();
    pintarDatos();    
}
)

/*Como ocurría con las variables que vamos a usar dentro de la función es conveniente declarar todo en la función declarada que llamaremos como queramos, en este caso la hemos llamado PintarDatos*/
// let firstName = localStorage.getItem('nombre');
// let Email = localStorage.getItem('correo');
// container.innerHTML = `
//                         <h2>${firstName}</h2>
//                         <p>${Email}</p>   
//                       `

/*Cremos las variables para guardar los datos que recuperamos del localStorage para imprimirlo después. Al recuperar los datos ponemos entre paréntesis la key que queremos recuperar en este caso nombre y correo*/
function guardarDatos(){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function pintarDatos (){
    // let firstName = localStorage.getItem('nombre');
    // let Email = localStorage.getItem('correo');
    // let Texto = localStorage.getItem('texto');
    // container.innerHTML = `
    //                     <h2>${firstName}</h2>
    //                     <p>${Email}</p>
    //                     <p>${Texto}</p>   
    //                   `

    let array = localStorage.getItem('usuarios');
    container.innerHTML = `
                          <h2>${array}</h2>
                          `
}








