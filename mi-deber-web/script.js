document.getElementById("colorBtn").addEventListener("click", function () {
    const colores = ["#f0f0f0", "#ffe4e1", "#e6ffe6", "#e6f7ff", "#fff0f5"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
});
