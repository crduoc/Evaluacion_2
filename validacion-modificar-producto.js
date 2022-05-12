
$(document).ready(function () {
  $('#id-producto').mask('000');
})

$(document).ready(function () {
  $('#precio').mask('000000');
})

$(document).ready(function () {
  $('#descuento').mask('000');
})


$(".btn-outline-primary").click(function () {

  if (document.getElementById("id-producto").value.length == 0) {
    alert("Error. Debe ingresar ID del producto.")
  }

  else {
    if (document.getElementById("descuento").value.length == 0
      && document.getElementById("nombre-producto").value.length == 0 && document.getElementById("precio").value.length == 0
      && document.getElementById("categoria-producto").value.length == 0 && document.getElementById("desc-producto").value.length == 0
      && document.getElementById("img-producto").value.length == 0) {
      alert("Error. Debe rellenar al menos un campo a modificar.")
    } else { alert("El producto ha sido modificado con éxito."); }
  }
});

