function Calculadora() {
    const sexo = document.getElementById("sexo").value;
    const edad = parseInt(document.getElementById("edad1").value);
    const peso = parseFloat(document.getElementById("peso1").value);
    const altura = parseFloat(document.getElementById("altura1").value);
    let alturaMetros = altura / 100;
    let calcular = peso / (alturaMetros * alturaMetros);
    let peso_ideal;

    if (sexo === "Masculino") {
        peso_ideal = 50 + 0.75 * (altura - 150) + (edad - 20) / 4;
    } else if (sexo === "Femenino") {
        peso_ideal = 45.5 + 0.9 * (altura - 150) + (edad - 20) / 4;
    }

    let peso_a_perder = peso - peso_ideal;

    let resultado = "Edad: " + edad + " años <br>" +
                    "Peso actual: " + peso.toFixed(1) + " kg <br>" +
                    "Altura: " + altura.toFixed(0) + " cm <br>" +
                    "IMC: " + calcular.toFixed(1) + " = ";

    if (calcular < 18.5) {
        resultado += "<span class='bg-primary text-light'>Bajo peso</span>";
    } else if (calcular >= 18.5 && calcular <= 24.9) {
        resultado += "<span class='bg-success text-light'>Normal</span>";
    } else if (calcular >= 25 && calcular < 29.9) {
        resultado += "<span class='bg-warning text-light'>Sobrepeso</span>"
    } else if (calcular >= 30 && calcular <= 34.9) {
        resultado += "<span class='bg-danger text-light'>Obesidad I</span>"
    } else if (calcular >= 35 && calcular <= 39.9) {
        resultado += "<span class='bg-danger text-light'>Obesidad II</span>"
    } else if (calcular >= 40 && calcular <= 49.9) {
        resultado += "<span class='bg-danger text-light'>Obesidad III</span>"
    } else if (calcular >= 50) {
        resultado += "<span class='bg-danger text-light'>Obesidad IV</span>"
    }

    resultado += "<br>Peso ideal: <span class='bg-primary text-light'>" + peso_ideal.toFixed(1) + " kg </span><br>" +
                 "Deberías perder: <span class='bg-dark text-light'>" + peso_a_perder.toFixed(1) + " kg </span>";

    document.getElementById("resultado8").innerHTML = resultado;
}
