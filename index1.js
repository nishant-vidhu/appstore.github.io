function handleSubmit () {
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const semester = document.getElementById('semester').value;
    const  college = document.getElementById('college').value;
    const university = document.getElementById('university').value;
    const dob = document.getElementById('dob').value;
    const branch = document.getElementById('branch').value;
    


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("ROLL", roll);
    sessionStorage.setItem("SEMESTER",semester);
    sessionStorage.setItem("COLLEGE",college );
    sessionStorage.setItem("UNIVERSITY",university );
    sessionStorage.setItem("DOB",dob);
    sessionStorage.setItem("BRANCH",branch);
    

    return;
}