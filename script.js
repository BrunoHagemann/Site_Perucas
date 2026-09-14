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
