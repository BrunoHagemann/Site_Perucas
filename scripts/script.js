// =====================================================
// LOGIN
// =====================================================

const formLogin = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "0211";


// =====================================================
// MOSTRAR / OCULTAR SENHA
// =====================================================

if (togglePassword && password) {

    togglePassword.addEventListener("click", () => {

        const isPassword = password.type === "password";

        password.type = isPassword ? "text" : "password";

        togglePassword.textContent = isPassword ? "◉" : "◌";

        togglePassword.setAttribute(
            "aria-label",
            isPassword ? "Ocultar senha" : "Mostrar senha"
        );

    });

}


// =====================================================
// VALIDAÇÃO DO LOGIN
// =====================================================

if (formLogin) {

    formLogin.addEventListener("submit", (event) => {

        event.preventDefault();

        const user = username.value.trim();
        const pass = password.value;

        // Limpa mensagem anterior
        if (message) {
            message.className = "message";
            message.textContent = "";
        }


        // =================================================
        // LOGIN CORRETO
        // =================================================

        if (
            user === VALID_USERNAME &&
            pass === VALID_PASSWORD
        ) {

            if (message) {
                message.textContent =
                    "Login realizado! Entrando...";

                message.classList.add("success");
            }

            // Vai para a página principal
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);

            return;
        }


        // =================================================
        // LOGIN INCORRETO
        // =================================================

        if (message) {

            message.textContent =
                "Usuário ou senha incorretos.";

            message.classList.add("error");
        }

        // Limpa o campo de senha
        password.value = "";

        // Volta o foco para senha
        password.focus();

    });

}

// site pricipal:

var toggle = document.getElementById('navToggle');
var list = document.getElementById('navList');
if (toggle) {
  toggle.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  list.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

var form = document.getElementById('wigForm');
var feedback = document.getElementById('formFeedback');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('nome').value.trim() || 'cliente';
    feedback.textContent = 'Pedido protocolado com sucesso, ' + nome + '! Dr. Fire Esq. entrará em contato em breve (ou assim que sair de campo).';
    feedback.hidden = false;
    form.reset();
  });
}
