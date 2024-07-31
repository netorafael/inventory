function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar se as credenciais são "root"
    if (username === 'root' && password === 'root') {
        // Armazenar informações de login no localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Login realizado com sucesso!');
        // Redirecionar para a página inicial
        window.location.href = 'home.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

// Função para verificar se o usuário está logado
function checkLogin() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');

    // Verificar se as credenciais armazenadas são "root"
    if (username === 'root' && password === 'root') {
        // Redirecionar para a página inicial
        window.location.href = 'home.html';
    }
}

// Verificar se o usuário está logado ao carregar a página
window.onload = function() {
    checkLogin();
};