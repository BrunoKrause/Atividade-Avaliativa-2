//Criação do Array com 4 personagens de base
let personagens = [
    {   nome: 'Aragorn', 
        classe: 'Herói', 
        nivel: 12, 
        hp: 118, 
        habilidades: ['[1]Espada do Oeste', '[2]Rastreamento Mestre', '[3]Aula de Liderança', '[4]Cura dos Reis'], 
        historicoDeAcoes: []},
    {   
        nome: 'Legolas', 
        classe: 'Patrulheiro', 
        nivel: 11, 
        hp: 94, 
        habilidades: ['[1]Tiro Duplo', '[2]Visão Élfica', '[3]Passos Leves', '[4]Flecha Veloz'], 
        historicoDeAcoes: []},
    {   
        nome: 'Gimli', 
        classe: 'Bárbaro', 
        nivel: 10, 
        hp: 132, 
        habilidades: ['[1]Fúria Anã', '[2]Machado Duplo','[3]Determinação de Ferro', '[4]Martelo do Casco de Pedra'], 
        historicoDeAcoes: []},
    {   
        nome: 'Gandalf', 
        classe: 'Mago', 
        nivel: 17, 
        hp: 110, 
        habilidades: ['[1]Luz do Amanhecer', '[2]Sabedoria Antiga', '[3]Comando Inspirador', '[4]Chama Invisível'], 
        historicoDeAcoes: []}
]

//Função que contém as ações que podem ser executadas pelo personagem, utilizando um switch para escolher entre atacar, defender e usar habilidades, além de outro switch pegando as habilidades que o personage possui, pedindo que o usuário escolha qual será utilzada.
function acaoPersonagem (personagem, acao){
    const personagemEncontrado = personagens.find(perso => perso.nome.toLowerCase() === personagem.toLowerCase())
    switch(acao.toLowerCase()){
        case 'atacar':
            console.log(`O personagem ${personagemEncontrado.nome} executou a ação ${acao}`)
            personagemEncontrado.historicoDeAcoes.push(acao)
            break
        case 'defender':
            console.log(`O personagem ${personagemEncontrado.nome} executou a ção ${acao}`)
            personagemEncontrado.historicoDeAcoes.push(acao)
            break
        case 'habilidade':
            const acaoExecutada = Number(prompt(`Escolha qual das habilidades o personagem irá utilizar: ${personagemEncontrado.habilidades}`))
            switch(acaoExecutada){
                case 1:
                    console.log(`O personagem ${personagemEncontrado.nome} executou a habilidade ${personagemEncontrado.habilidades[0]}`)
                    personagemEncontrado.historicoDeAcoes.push(acao)
                    break
                case 2:
                    console.log(`O personagem ${personagemEncontrado.nome} executou a habilidade ${personagemEncontrado.habilidades[1]}`)
                    personagemEncontrado.historicoDeAcoes.push(acao)
                    break
                case 3:
                    console.log(`O personagem ${personagemEncontrado.nome} executou a habilidade ${personagemEncontrado.habilidades[2]}`)
                    personagemEncontrado.historicoDeAcoes.push(acao)
                    break
                case 4:
                    console.log(`O personagem ${personagemEncontrado.nome} executou a habilidade ${personagemEncontrado.habilidades[3]}`)
                    personagemEncontrado.historicoDeAcoes.push(acao)
                    break
                default:
                    break
            }
        default:
            break
    }
}
acaoPersonagem('Aragorn', 'Habilidade') //Personagem para teste
console.log(personagens[0].historicoDeAcoes)//Teste para verificar se está adicionando a ação no array.

//Função para criar personagem, questionando as informações ao usuário através de prompts
function novoPersonagem (){
    personagemNovo ={
        nome: prompt('Qual o nome do novo personagem?'),
        classe: prompt('Qual a classe?'),
        nivel: Number(prompt('Qual o nível?')),
        hp: Number(prompt('Quantos pontos de vida ele terá?')),
        habilidades: [prompt('Qual a primeira habilidade?'), prompt('Qual a segunda?'), prompt('Qual a terceira'), prompt('E qual a quarta habilidade?')],
        historicoDeAcoes: []
    }
    personagens.push(personagemNovo)
}
novoPersonagem()//Acionando a função para o usuário selecionar as informações

//Função para busca do personagem no array, checando se o personagem é encontrado e então retornando as informações
function buscarPersonagem (personagemBuscado){
    const personagemEncontrado = personagens.find(perso => perso.nome.toLowerCase() === personagemBuscado.toLowerCase())
    if(personagemEncontrado){
        console.log(personagemEncontrado)
    } else{
        console.log(`Infelizmente o personagem ${personagemBuscado} não foi encontrado.`)
    }
}
buscarPersonagem('Gimli')

//Função que busca o personagem para verificar se é possível excluir
function excluirPersonagem (personagem){
    const personagemEncontrado = personagens.find(perso => perso.nome.toLowerCase() === personagem.toLowerCase())
    if(personagemEncontrado){
        console.log(`O personagem ${personagemEncontrado.nome} foi excluído e não poderá mais ser utilizado.`)
        personagens.splice(personagens.indexOf(personagemEncontrado), 1)
    } else{
        console.log(`Não foi possível excluir pois o ${personagem} não foi encontrado.`)
    }
}
excluirPersonagem('Gandalf')

//Função apenas para listar os personagens do array
function listarPersonagens () {
    for(let i = 0; i<personagens.length; i++){
        console.log(personagens[i])
    }
}
listarPersonagens()