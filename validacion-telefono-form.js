
$(document).ready(function () {
  $('#telefono').mask('0 00000000');
})

$(".btn-success").click(function () {
  // alert(document.getElementById("correo").value.match(/^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$/));
  if (document.getElementById("nombre").value.length == 0 || document.getElementById("apellido").value.length == 0
    || document.getElementById("telefono").value.length == 0 || document.getElementById("ciudad").value.length == 0
    || document.getElementById("direccion").value.length == 0 || document.getElementById("nombre-mascota").value.length == 0
    || document.getElementById("correo").value.length == 0 ||
    document.getElementById("correo").value.match(/^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$/) == null) {
    alert("Error. Debe rellenar todos los campos obligatorios.")
  } else { alert("Suscripción fue realizada con éxito."); }

});

$(".btn-warning").click(function () {
  alert("Tu suscripción ha sido cancelada con éxito.");
});

