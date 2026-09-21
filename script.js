AOS.init();

document.addEventListener('DOMContentLoaded', () => {

    const controleMusicaBtn = document.getElementById('controle-musica');
    const audio = document.getElementById('trilha-sonora');
    const icone = controleMusicaBtn.querySelector('i');
    const controleVolumeSlider = document.getElementById('controle-volume');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    // Define o volume inicial do áudio com base no valor do slider
    audio.volume = controleVolumeSlider.value;

    // Adiciona um "escutador" para o evento 'input' (quando o usuário arrasta)
    controleVolumeSlider.addEventListener('input', (e) => {
        // Atualiza o volume do áudio para o valor atual do slider
        audio.volume = e.target.value;
    });

    controleMusicaBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            icone.classList.remove('fa-volume-xmark');
            icone.classList.add('fa-volume-high');
        } else {
            audio.pause();
            icone.classList.remove('fa-volume-high');
            icone.classList.add('fa-volume-xmark');
        }
    });

    if (dropdown) {
        dropdownToggle.addEventListener('click', (event) => {
            // Previne o link de navegar para "#"
            event.preventDefault(); 
            // Adiciona ou remove a classe "active" no elemento <li> pai
            dropdown.classList.toggle('active');
        });

        // Opcional, mas recomendado: Fecha o dropdown se clicar fora dele
        window.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

});