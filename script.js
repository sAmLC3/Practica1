function calcularTotal() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const categoria = document.getElementById('categoria').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const clubCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let total = 0;

    // Calcular el costo de inscripción por temporada
    if (categoria === 'sub17') {
        total = 300 * 0.75; // Sub 17 tiene un descuento del 25%
    } else {
        total = 300;
    }

    // Calcular el impuesto
    total *= 1.19;

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Jugador: ${nombre}<br>`;
    resultadoDiv.innerHTML += `Edad: ${edad}<br>`;
    resultadoDiv.innerHTML += `Categoría: ${categoria}<br>`;
    resultadoDiv.innerHTML += `Género: ${genero}<br>`;
    resultadoDiv.innerHTML += `Club(s): `;

    clubCheckboxes.forEach((checkbox) => {
        resultadoDiv.innerHTML += `${checkbox.value}, `;
    });

    resultadoDiv.innerHTML += `<br>Monto total a pagar: S/. ${total.toFixed(2)}`;
}