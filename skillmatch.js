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
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
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
  experienciaMeses: 3,
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
    "Júnior",
  ),
  new VagaFrontEnd(
    2,
    "SkyCode",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "Kanban", "GitHub", "Git", "Objetos"],
    3100,
    "Presencial",
    "Júnior",
  ),
  new VagaFrontEnd(
    3,
    "Quantumn Solutions",
    "Programador JavaScript Junior",
    ["JavaScript", "HTML", "Git"],
    2900,
    "Híbrido",
    "Júnior",
  ),
  new VagaFrontEnd(
    4,
    "Solutions Web",
    "Estágio Programador JavaScript",
    ["JavaScript", "HTML", "GitHub", "Java"],
    1900,
    "Híbrido",
    "Estágio",
  ),
];
function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}

const contarAnalises = criarContadorDeAnalises();

// ANALISAR VAGAS

function analisarVagas() {
  const resultados = vagas.map((vaga) => {
    // HABILIDADES ENCONTRADAS
    const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
      candidato.habilidades.includes(requisito),
    );

    // HABILIDADES FALTANTES
    const habilidadesFaltantes = vaga.requisitos.filter(
      (requisito) => !candidato.habilidades.includes(requisito),
    );

    // PERCENTUAL
    const compatibilidade =
      (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

    const atendeTodasEssenciais = vaga.requisitos.every((requisito) =>
      candidato.habilidades.includes(requisito),
    );

    // ESTRUTURA DE DECISÃO (IF/ELSE)
    let classificacao = "";

    if (compatibilidade >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (compatibilidade >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    console.log("\ ");
    console.log(`Empresa: ${vaga.empresa}`);
    console.log(`Cargo: ${vaga.cargo}`);
    console.log(`Salário: R$ ${vaga.salario}`);
    // CORREÇÃO 3: chamando exibirResumo() e exibirNivel()
    console.log(vaga.exibirResumo());
    console.log(vaga.exibirNivel());
    console.log(`Compatibilidade: ${compatibilidade.toFixed(0)}%`);
    console.log(
      `Habilidades encontradas: ${habilidadesEncontradas.join(", ")}`,
    );
    console.log(`Habilidades faltantes: ${habilidadesFaltantes.join(", ")}`);
    console.log(`Classificação: ${classificacao}`);
    console.log(
      `Atende todos os requisitos: ${atendeTodasEssenciais ? "Sim" : "Não"}`,
    );
    console.log(`Análise nº ${contarAnalises()}`);

    return {
      vaga,
      compatibilidade,
      habilidadesFaltantes,
    };
  });

  // MELHOR VAGA: Utilizando o REDUCE

  const melhorVaga = resultados.reduce((melhor, atual) => {
    if (atual.compatibilidade > melhor.compatibilidade) {
      return atual;
    }
    return melhor;
  });

  console.log("\n A VAGA MAIS COMPATÍVEL É:");
  console.log(`${melhorVaga.vaga.empresa} - ${melhorVaga.vaga.cargo}`);
  console.log(`Compatibilidade: ${melhorVaga.compatibilidade.toFixed(0)}%`);

  // Recomendação de estudo

  const habilidadesParaEstudar = resultados.flatMap(
    (resultado) => resultado.habilidadesFaltantes,
  );

  const habilidadesUnicas = [...new Set(habilidadesParaEstudar)];

  console.log("\n AQUI ESTÁ A RECOMENDAÇÃO DE ESTUDO: ");
  console.log(`Priorize estudar: ${habilidadesUnicas.join(", ")}`);
}
// CALLBACK

function finalizarAnalise(nomeCandidato, callback) {
  console.log("\nAnálise finalizada! ATENÇÃO: ");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(
    `${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`,
  );
}

// PROMISE + ASYNC/AWAIT

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 2000);
  });
}

async function iniciarSistema() {
  console.log("Carregando vagas...\n");

  const vagasCarregadas = await buscarVagasSimuladas();

  console.log("Vagas carregadas com sucesso!");

  analisarVagas();

  finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

iniciarSistema();
