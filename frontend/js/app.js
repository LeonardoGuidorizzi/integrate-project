// js to index.html
const containerCards = document.querySelector('.curse-container')

const fetchCursos = async () => {
    const rawData = await fetch('http://localhost:3000/cursos/');
    const response = await rawData.json();
    return response;
}

const cursos = await fetchCursos();

const createCards = (cursos = []) => {
    cursos.forEach((curso) => {
        // sigla
        const a = document.createElement('a');
        a.classList.add('curse');
        a.id = curso.sigla.toLowerCase();

        const img = document.createElement('img');
        img.src = curso.icone;

        const span = document.createElement('span');
        span.classList.add('curse-text');
        span.textContent = curso.sigla

        a.append(img) // a -> img
        a.append(span) // a --> span

        a.addEventListener('click', (event) => {
            const id = a.id;

            localStorage.setItem('cursoID', id); // valor salvo no browser

            location.href = 'html/secondpage.html'
        })

        containerCards.append(a)

    })
}

createCards(cursos)


// pegar o valor do localStorage
// const valor = localStorage.getItem('cursoID')