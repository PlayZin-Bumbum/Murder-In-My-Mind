document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    audio.volume = 1; // Volume inicial

    // Atualiza o botão ao carregar
    playPauseBtn.textContent = 'Play';

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });

    // Reproduz novamente ao fim da música
    audio.addEventListener('ended', function() {
        audio.currentTime = 0; // Reinicia a música
        audio.play(); // Reproduz novamente
        playPauseBtn.textContent = 'Pause'; // Atualiza o texto do botão
    });

    // Bloquear o menu de contexto e arrastar
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Bloqueia o menu de contexto
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault(); // Impede arrastar a imagem
    });
});

