﻿function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("QUERY", query); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("QUERY", query);

    return;
}
