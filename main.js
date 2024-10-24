function openArtwork(artworkId) {
    // Simulação de carregamento de uma obra específica
    let artwork = {
        obra1: {
            src: 'obra1.jpg',
            title: 'Título da Obra 1',
            text: 'Descrição da obra 1.'
        },
        obra2: {
            src: 'obra2.jpg',
            title: 'Título da Obra 2',
            text: 'Descrição da obra 2.'
        },
        obra3: {
            src: 'obra3.jpg',
            title: 'Título da Obra 3',
            text: 'Descrição da obra 3.'
        }
    };

    let selectedArtwork = artwork[artworkId];
    if (selectedArtwork) {
        localStorage.setItem('artwork', JSON.stringify(selectedArtwork));
        window.location.href = 'artwork.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let artworkData = JSON.parse(localStorage.getItem('artwork'));
    if (artworkData) {
        document.getElementById('artwork-image').src = artworkData.src;
        document.getElementById('artwork-title').innerText = artworkData.title;
        document.getElementById('artwork-text').innerText = artworkData.text;
    }
});
