# SkillMatch JS

> Simulador de compatibilidade entre candidato e vagas de Front-End Júnior


## Sobre o projeto
O SkillMatch JS é um sistema desenvolvido em JavaScript puro com o objetivo de simular a análise de compatibilidade entre um candidato e vagas fictícias da área de Front-End.

O sistema compara as habilidades técnicas do candidato com os requisitos exigidos pelas vagas e apresenta informações como:

- percentual de compatibilidade com cada vaga
- habilidades que a candidata já possui
- habilidades que ainda estão faltando
- se a candidata atende todos os requisitos da vaga
- qual é a vaga mais compatível com seu perfil
- recomendação do que estudar com base nas lacunas encontradas

Além disso, o projeto também simula o carregamento das vagas utilizando conceitos assíncronos do JavaScript.

O SkillMatch JS feito por mim buscou analisar o perfil de um candidato(a)(o nome que escolhi para ser colocado foi Julia ), e comparou suas habilidades com os requisitos de 4 vagas fictícias de Front-End Júnior das empresas StarTech, SkyCode, Quantumn Solutions e Solutions Web.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- lógica de programação
- JavaScript
- tipos de dados
- condicionais
- operadores
- escopo
- laços de repetição
- funções e arrow functions
- arrays e métodos de array
- objetos
- classes e herança
- `this`
- callbacks
- closures
- Promises e async/await
- GitHub
- Kanban
##  Funcionalidades do sistema

O sistema é capaz de:

- analisar habilidades do candidato;

- comparar requisitos das vagas;

- calcular compatibilidade;

- identificar habilidades faltantes;

- classificar vagas em:
- alta compatibilidade;
- média compatibilidade;
- baixa compatibilidade;

- recomendar conteúdos para estudo;

- identificar a vaga mais compatível.



##  Estrutura do projeto

O projeto foi organizado em etapas:

- criação do candidato;
- criação das vagas;
- desenvolvimento das classes;
- lógica de compatibilidade;
- implementação de métodos de array;
- utilização de callback e closure;
- simulação assíncrona com Promise e async/await.

## Como executar

Este projeto não precisa de instalação.

Você pode executar da seguinte forma:

###  VS Code com Node.js

1. Abra o projeto no VS Code;
2. Abra o terminal;
3. Execute o comando

SKILLMATCH-PROJETO/
│
├── skillmatch.js     # arquivo principal com todo o código
└── readme.md         # documentação do projeto


## Melhorias futuras

 Ordenar as habilidades faltantes pela frequência em que aparecem nas vagas 
 Criar uma interface visual no navegador com HTML e CSS

## Ambiente de desenvolvimento
Extensão de arquivo : O projeto utiliza a extensão .js — JavaScript puro, sem necessidade de compilação ou instalação de dependências.
Extensões recomendadas no VS Code : Prettier - Code Formatter: formata o código automaticamente, deixando identação e espaçamento padronizados.  Live Server: abre o projeto no navegador e atualiza automaticamente ao salvar. Git Graph: visualiza as branches e o histórico de commits de forma gráfica

# Como a internet funciona: 
Arquitetura cliente-servidor: Quando você acessa um site, seu navegador (o cliente) faz uma requisição para um servidor, que processa e devolve os dados. É uma conversa de duas vias:
Cliente (navegador)  →  requisição  →  Servidor
Cliente (navegador)  ←  resposta    ←  Servidor

No SkillMatch JS isso é simulado pela função:
buscarVagasSimuladas(), que usa uma Promise com setTimeout para imitar o tempo de resposta de um servidor real:

# function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas); // "resposta do servidor" chegando após 2 segundos
    }, 2000);
  });
}

Variáveis: var, let e const

O projeto prioriza o uso de const e let, seguindo as boas práticas modernas do JavaScript.
O var tem um comportamento chamado hoisting — ele é "elevado" para o topo do código antes de executar, o que pode causar bugs difíceis de encontrar. Além disso, o var ignora o escopo de bloco, ou seja, uma variável declarada dentro de um if com var fica acessível fora dele.

# Como foi usado no projeto: 
const candidato = { ... };   // objeto fixo, nunca reatribuído
const vagas = [ ... ];       // array fixo, nunca reatribuído
let classificacao = "";      // reatribuída dentro do if/else
let total = 0;               // reatribuída dentro da closure

## Autora

Feito por Alaiane Maiara — estudante de Desenvolvimento Front-End [REACT] - T1.

## Vídeo de demonstração

Link do vídeo:
[Ainda não realizado]

## KANBAN:
Link do KANBAN:
[(https://trello.com/b/zFsZNtr9)]
