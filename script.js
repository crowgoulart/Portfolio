document.getElementById('year').textContent = new Date().getFullYear();

// Abas de código das demonstrações técnicas
document.querySelectorAll('.code-tabs').forEach((tabs) => {
  const group = tabs.dataset.tabs;
  tabs.querySelectorAll('.code-tab').forEach((button) => {
    button.addEventListener('click', () => {
      tabs.querySelectorAll('.code-tab').forEach((tab) => tab.classList.remove('active'));
      document.querySelectorAll(`[data-group="${group}"]`).forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(button.dataset.target).classList.add('active');
    });
  });
});

// Dashboard demonstrativo
const dashboardData = {
  set: { projetos: '12', receita: 'R$ 8,4 mil', pendencias: '3' },
  ago: { projetos: '9', receita: 'R$ 6,9 mil', pendencias: '2' },
  jul: { projetos: '7', receita: 'R$ 5,7 mil', pendencias: '4' }
};

const periodoDashboard = document.getElementById('periodoDashboard');
if (periodoDashboard) {
  const atualizarDashboard = () => {
    const dados = dashboardData[periodoDashboard.value];
    document.getElementById('dashProjetos').textContent = dados.projetos;
    document.getElementById('dashReceita').textContent = dados.receita;
    document.getElementById('dashPendencias').textContent = dados.pendencias;
  };
  periodoDashboard.addEventListener('change', atualizarDashboard);
}

// Mini CRUD visual para demonstração da interface
const addDemoProject = document.getElementById('addDemoProject');
const demoProjectList = document.getElementById('demoProjectList');
let demoProjectCount = 1;
if (addDemoProject && demoProjectList) {
  addDemoProject.addEventListener('click', () => {
    const project = document.createElement('div');
    project.className = 'demo-project';
    project.innerHTML = `<span><strong>Novo projeto ${demoProjectCount}</strong><small>Cliente demonstrativo</small></span><em>Novo</em>`;
    demoProjectList.prepend(project);
    demoProjectCount += 1;
  });
}


// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
