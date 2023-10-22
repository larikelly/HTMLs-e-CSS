document.addEventListener('DOMContentLoaded', function() {
    const nomes = document.querySelectorAll('.nome');
    const infos = document.querySelectorAll('.quadrado-info');

    nomes.forEach((nome, index) => {
        nome.addEventListener('click', () => {
            infos[index].style.display = infos[index].style.display === 'block' ? 'none' : 'block';
        });
    });
});
