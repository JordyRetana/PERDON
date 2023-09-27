<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CodePen - Hearts!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
  <style>
    /* Agrega aquí tu estilo CSS personalizado si es necesario */
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    #pregunta {
      text-align: center;
    }

    #botones {
      text-align: center;
      margin-top: 20px;
    }

    .boton {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .boton:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
<!-- Agrega la pregunta y el botón aquí -->
<div id="pregunta">
  <h2>¿Me perdonas?</h2>
</div>
<div id="botones">
  <button class="boton" id="botonSi">Sí</button>
  <button class="boton" id="botonNo">No</button>
</div>
<!-- Fin de la pregunta y el botón -->

<!-- partial:index.partial.html -->
<!--markup format 

<div class="bubble">
   <svg class="heart" viewBox="0 0 600 500">
   <path d="M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150"/>
  </svg>
  <div class="bubble-dummy"></div>
</div>

-->
<!-- partial -->
<script src="./script.js"></script>

<script>
  // Obtén los botones por su ID
  var botonSi = document.getElementById('botonSi');
  var botonNo = document.getElementById('botonNo');

  // Agrega un evento de clic al botón "Sí"
  botonSi.addEventListener('click', function() {
    var confirmacion = confirm('¿Estás seguro de que quieres perdonar?');
    if (confirmacion) {
      alert('Gracias, niña');
      createSound(20, 5000, 1, "sawtooth", 1); // Llama a la función para crear sonidos aquí si es necesario
    }
    handleDown(); // Llama a la función para crear burbujas inmediatamente después de la selección del botón
  });

  // Agrega un evento de clic al botón "No"
  botonNo.addEventListener('click', function() {
    var confirmacion = confirm('¿Estás seguro de que no quieres perdonar?');
    if (confirmacion) {
      alert('Inténtalo de nuevo');
      // Llama a la función para crear sonidos aquí si es necesario
    }
    handleDown(); // Llama a la función para crear burbujas inmediatamente después de la selección del botón
  });
</script>

</body>
</html>
