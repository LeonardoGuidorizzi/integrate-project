var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://cdn-icons-png.flaticon.com/512/711/711284.png",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];
const getCursos = function(){
    curselistJSON = {}
    curselist = []
    cursos.forEach(item => {
        curselist.push({
            nome:item.nome,
            sigla:item.sigla,
            icone:item.icone,
            carga:item.carga
        })
    });
    curselistJSON.cursos = curselist
    return curselistJSON
}
module.exports = {
    getCursos
}