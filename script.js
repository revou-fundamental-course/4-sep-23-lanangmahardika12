document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("square-form");
    const sideInput = document.getElementById("side");
    const calculateButton = document.getElementById("calculate");
    const resetButton = document.getElementById("reset");
    const areaResult = document.getElementById("area");
    const perimeterResult = document.getElementById("perimeter");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const sideValue = sideInput.value.trim();

        if (sideValue === "") {
            alert("Panjang sisi tidak boleh kosong.");
            return;
        }

        if (!isNumeric(sideValue)) {
            alert("Masukkan hanya angka yang valid.");
            return;
        }

        const side = parseFloat(sideValue);

        if (isNaN(side) || side <= 0) {
            alert("Masukkan panjang sisi yang valid (angka positif).");
            return;
        }

        const area = side * side;
        const perimeter = 4 * side;
        

        areaResult.textContent = area;
        perimeterResult.textContent = perimeter;
        resultDiv.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
        resultDiv.style.display = "none";
    });

    function isNumeric(str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
});