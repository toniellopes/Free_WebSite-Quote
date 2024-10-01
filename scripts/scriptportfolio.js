document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            let src = img.getAttribute('src');
            let alt = img.getAttribute('alt');
            let popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = `<img src="${src}" alt="${alt}"><p>${alt}</p><button>Fechar</button>`;
            document.body.appendChild(popup);
            popup.querySelector('button').addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        });
    });
});
