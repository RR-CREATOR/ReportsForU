function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("OpenedRep");
    window.location = "index.html";
}

function home(){
    localStorage.removeItem("OpenedRep");
    window.location = "rep_page.html";
}