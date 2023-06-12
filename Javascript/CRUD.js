  // Array para almacenar los registros
  var registros = [];

  // Función para guardar un registro
  function guardarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || correo === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Crear objeto con los datos del registro
    var registro = {
      nombre: nombre,
      apellido: apellido,
      correo: correo
    };

    // Agregar el registro al array
    registros.push(registro);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";

    // Mostrar los registros en la tabla
    mostrarRegistros();
  }

  // Función para mostrar los registros en la tabla
  function mostrarRegistros() {
    var tablaBody = document.getElementById("tablaBody");
    tablaBody.innerHTML = "";
  
    // Recorrer el array de registros y crear las filas de la tabla
    registros.forEach(function(registro, index) {
      var fila = document.createElement("tr");
  
      var nombreCell = document.createElement("td");
      nombreCell.textContent = registro.nombre;
      fila.appendChild(nombreCell);
  
      var apellidoCell = document.createElement("td");
      apellidoCell.textContent = registro.apellido;
      fila.appendChild(apellidoCell);
  
      var correoCell = document.createElement("td");
      correoCell.textContent = registro.correo;
      fila.appendChild(correoCell);
  
      var opcionesCell = document.createElement("td");
      
      var eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("eliminar-btn");
        var eliminarIcono = document.createElement("i");
        eliminarIcono.classList.add("fas", "fa-trash-alt");
        eliminarBtn.appendChild(eliminarIcono);

      eliminarBtn.onclick = function() {
        eliminarRegistro(index);
      };
      opcionesCell.appendChild(eliminarBtn);
      fila.appendChild(opcionesCell);
  
      tablaBody.appendChild(fila);
    });
  }

  // Función para eliminar un registro
  function eliminarRegistro(index) {
    registros.splice(index, 1);
    mostrarRegistros();
  }