class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }
 
  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}
 
// Herança das vagas 
class VagaFrontEnd extends Vaga {
  constructor(
    id,
    empresa,
    cargo,
    requisitos,
    salario,
    modalidade,
    nivel
  ) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
 
    this.nivel = nivel;
  }
 
  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}
 // Dados do candidato
 
const candidato = {
  nome: "Julia",
  area: "Front-End",
  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Lógica de Programação",
  ],
  experienciaMeses: 3
};
 
// vagas  
const vagas = [
  new VagaFrontEnd(
    1,
    "StarTech",
    "Estágio de Desenvolvedor Front-End Junior",
    ["JavaScript", "GitHub", "Lógica de Programação", "Arrays"],
    1500,
    "Remoto",
    "Júnior"
  ),
  new VagaFrontEnd(
    2,
    "SkyCode",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "Kanban", "GitHub", "Git", "Objetos"],
    3100,
    "Presencial",
    "Júnior"
  ),
  new VagaFrontEnd(
    3,
    "Quantumn Solutions",
    "Programador JavaScript Junior",
    ["JavaScript", "HTML", "Git"],
    2900,
    "Híbrido",
    "Júnior"
  ),
  new VagaFrontEnd(
    4,
    "Solutions Web",
    "Estágio Programador JavaScript",
    ["JavaScript", "HTML", "GitHub", "Java"],
    1900,
    "Híbrido",
    "Estágio"
  )
];