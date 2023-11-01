const valorTicket = 200

const nombre = document.getElementById("nombre2")
console.log(document.getElementById("nombre2").value)

const apellido = document.getElementById("apellido2")
console.log(document.getElementById("apellido2").value)

const correo = document.getElementById("correo2")
console.log(document.getElementById("correo2").value)

const Cantidad = document.getElementById("Cantidad").value
console.log(document.getElementById("Cantidad").value)

const Categoria = document.getElementById("Categoria").value
console.log(document.getElementById("Categoria").value)

function ResumenFormulario(){

if (Categoria == "Estudiante"){
Descuento = Cantidad * (valorTicket - valorTicket*0.8) 
console.log(Descuento);    
} else if (Categoria == "Trainee"){
Descuento = Cantidad * (valorTicket - valorTicket*0.5) 
console.log(Descuento);
} else if (Categoria == "Junior"){
Descuento = Cantidad * (valorTicket - valorTicket*0.015)
console.log(Descuento);
}

const capturaLabel = document.getElementById("valorInput1")

capturaLabel.textContent  = /*('Nombre: ' + nombre.value) + " " + ('Apellido: ' + apellido.value) + " " + ('Correo: ' + correo.value) + " " +*/ ('Total a pagar: ' + '$' + Descuento)
console.log(capturaLabel)

}

ResumenFormulario()

var capturaFormulario= document.getElementById("Caja")

capturaFormulario.addEventListener('submit',function(e){
    e.preventDefault();

})

