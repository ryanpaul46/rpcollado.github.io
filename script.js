
let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
    
       
    });
});
