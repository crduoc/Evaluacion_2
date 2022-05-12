
$(document).ready(function () {
  $('#id-producto').mask('000');
})

$(".btn-outline-primary").click(function () {
  if (document.getElementById("id-producto").value.length == 0) {
    alert("Error. Debe ingresar ID del producto.")
  } else { alert("El producto ha sido eliminado con éxito."); }

});