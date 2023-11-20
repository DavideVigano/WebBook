const markdownIt = require('markdown-it')({
    html: true, // Abilita l'output HTML
    breaks: true, // Abilita il supporto per i salti di riga
});


function convertMarkdownToJSON(inputFile) {
    // Leggi il contenuto del file Markdown
    const markdownContent = inputFile

    // Converti il contenuto Markdown in HTML
    const htmlContent = markdownIt.render(markdownContent);

    // Estrai i titoli e i sottotitoli dal contenuto HTML
    const titles = [];
    const sections = htmlContent.split('<h1>');
    sections.shift(); // Rimuovi l'elemento vuoto all'inizio

    for (const section of sections) {
        const titleAndContent = section.split('<h2>');
        const mainTitle = titleAndContent[0].replace('</h1>', '').trim(); // Rimuovi il tag HTML </h1>
        const sectionsContent = titleAndContent.slice(1).map(subsection => {
            const subtitle = subsection.substring(0, subsection.indexOf('</h2>')).trim();
            const content = subsection.substring(subsection.indexOf('</h2>') + 5).trim();
            return {
                subtitle,
                content,
            };
        });

        titles.push({
            title: mainTitle,
            sections: sectionsContent,
        });
    }

    // Crea un oggetto JSON con i titoli e le sezioni
    const jsonData = titles;
    console.log('File JSON creato con successo.');

    return jsonData
}

module.exports = { convertMarkdownToJSON };