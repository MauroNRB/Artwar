function logout() {
    window.sessionStorage.removeItem('usuario');
    window.sessionStorage.removeItem('perfil');
    window.location = "index.html";
}