const containerCards = document.querySelector('.cards-container')

const curso = localStorage.getItem('cursoID')

const fetchAlunos = async (siglaCurso) => {
    const rawData = await fetch(`http://localhost:3000/cursoAlunos/${siglaCurso}`);
    const response = await rawData.json();
    return response;
}

const alunos = await fetchAlunos(curso)

console.log(alunos)
// funcao -> pegar o container dos cards / criar uma div para conter as informacoes / dentro da div -> criar uma tag de img para a foto do estudante / criar uma tag de span para o nome do estudante / adicionar os dois elementos na div e adiciona a div no container

const createCards = (alunos = [])=>{
    alunos.forEach((alunos)=>{
        const div = document.createElement('div')


    })
}