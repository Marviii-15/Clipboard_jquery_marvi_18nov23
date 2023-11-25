$(document).ready(function () {
    // Hacer dos funciones que agreduen y remuevan la clase en la eqtiqueta span
    function add() {
        $(".copied").addClass("bounce-effect");
      }
      function remove() {
        $(".copied").removeClass("bounce-effect");
      }

    //llamamos a la funciones y copiamos el texto con el click en el boton 
    $(".copy-btn").click(function () {
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
      });
    });
    