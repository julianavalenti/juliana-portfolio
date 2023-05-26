document.getElementById("pdfLink").addEventListener("click", function(event) {
    event.preventDefault(); 

    
    window.open(this.href, "_blank");

})