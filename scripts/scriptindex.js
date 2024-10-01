document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        alert('Bem-vindo ao nosso website!');
    }, 5000);

    // Carregar o arquivo XML local com as notícias
    fetch('noticias.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, 'application/xml');
            let items = xml.querySelectorAll('item');
            let rssFeed = document.getElementById('rssFeed');

            // Limpar o feed antes de adicionar as novas notícias
            rssFeed.innerHTML = '';

            items.forEach(item => {
                let title = item.querySelector('title').textContent;
                let link = item.querySelector('link').textContent;
                let description = item.querySelector('description').textContent;

                let div = document.createElement('div');
                div.className = 'news-item';
                div.innerHTML = `
                    <h3><a href="${link}" target="_blank">${title}</a></h3>
                    <p>${description}</p>
                `;
                rssFeed.appendChild(div);
            });
        })
        .catch(error => console.error('Erro ao carregar as notícias:', error));
});
