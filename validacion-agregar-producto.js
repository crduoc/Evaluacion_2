
$(document).ready(function () {
  $('#id-producto').mask('000');
})

$(document).ready(function () {
  $('#precio').mask('000000');
})

$(document).ready(function () {
  $('#cantidad').mask('00000');
})

/*$(".btn-outline-primary").click(function(){
  alert("El producto ha sido agregado con éxito.");
});*/


$(".btn-outline-primary").click(function () {
  if (document.getElementById("id-producto").value.length == 0 || document.getElementById("cantidad").value.length == 0
  || document.getElementById("nombre-producto").value.length == 0 || document.getElementById("precio").value.length == 0
  || document.getElementById("categoria-producto").value.length == 0) {
    alert("Error. Debe rellenar todos los campos obligatorios.")
  } else { alert("El producto ha sido agregado con éxito."); }

});