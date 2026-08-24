// Dados das 10 salas comerciais do Vila Office.
// Edite este arquivo para atualizar status, descrições e informações de cada sala.
// status: "ocupada" | "disponivel"
// Quando "ocupada": preencher ocupante { nome, servico, instagram, site }
// Quando "disponivel": deixar ocupante como null

export const salas = [
  {
    numero: 1,
    status: 'ocupada',
    descricao: 'Sala comercial com estrutura própria, atendimento reservado.',
    info: [],
    foto: null,
    ocupante: {
      nome: 'Graziela Foregato', // TODO: preencher nome do profissional/empresa
      servico: 'Design de Sombrancelha', // TODO: preencher serviço/área de atuação
      instagram: '@grazielaforegato', // TODO: @instagram
      site: '', // TODO: site (opcional)
    },
  },
  {
    numero: 2,
    status: 'ocupada',
    descricao: 'Sala comercial individual, sem banheiro privativo, com acesso pela recepção.',
    info: [],
    foto: null,
    ocupante: null,
  },
  {
    numero: 3,
    status: 'disponivel', // TODO: confirmar status
    descricao: '', // TODO: adicionar descrição
    info: [],
    foto: "Salas/Sala3.jpg",
    ocupante: null,
  },
  {
    numero: 4,
    status: 'ocupada',
    descricao: '',
    info: [],
    foto: null,
    ocupante: {
      nome: 'Emilyn Karoline', // TODO
      servico: 'Design de Sombrancelha', // TODO
      instagram: '@emilynkarolinebeautyclinic', // TODO
      site: '',
    },
  },
  {
    numero: 5,
    status: 'ocupada',
    descricao: 'Lash Designer com 8 anos de experiência, atuando com excelência na aplicação de extensão de cílios e na ministração de cursos profissionalizantes.',
    info: [],
    foto: "Profissionais/Nathiara.PNG",
    ocupante: {
      nome: 'Nathiara Oliveira', // TODO
      servico: 'Lash Designer', // TODO
      instagram: '@cilios_nathiara_campinas', // TODO
      site: '',
    },
  },
  {
    numero: 6,
    status: 'ocupada',
    descricao: 'Atuo com alongamento seguro e durável, banho de gel que fortalece e garante brilho intenso, blindagem para proteger unhas fragilizadas e esmaltação em gel com acabamento impecável e longa duração.',
    info: [],
    foto: null,
    ocupante: {
      nome: 'Marcelle Pacheco', // TODO
      servico: 'Nail Designer', // TODO
      instagram: '@marcellepacheconails', // TODO
      site: '',
    },
  },
  {
    numero: 7,
    status: 'disponivel', // TODO: confirmar status
    descricao: 'Sala comercial individual, com banheiro privativo.', // TODO: adicionar descrição
    info: [],
    foto: "Salas/Sala7.jpg",
    ocupante: null,
  },
  {
    numero: 8,
    status: 'disponivel', // TODO: confirmar status
    descricao: 'Sala comercial individual, com banheiro privativo.', // TODO: adicionar descrição
    info: [],
    foto: "Salas/Sala8.jpg",
    ocupante: null,
  },
  {
    numero: 9,
    status: 'disponivel', // TODO: confirmar status
    descricao: 'Sala comercial individual, com banheiro privativo. ', // TODO: adicionar descrição
    info: [],
    foto: "Salas/Sala9.jpg",
    ocupante: null,
  },
  {
    numero: 10,
    status: 'ocupada', // TODO: confirmar status
    descricao: '', // TODO: adicionar descrição
    info: [],
    foto: null,
    ocupante: null,
  },
]
