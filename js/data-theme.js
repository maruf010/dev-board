document.getElementById("data-theme").addEventListener("click", function () {
    let r = Math.random() * 256; 
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 

});
