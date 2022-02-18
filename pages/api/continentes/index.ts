import { NextApiRequest, NextApiResponse } from 'next';

const CONTINENTS = [
  { 
    name: 'América do Norte', 
    slug: 'america-do-norte', 
    description: 'A terra do progresso e da oportunidade.',
    bgUrl: '/img/europa.png',
  },
  { 
    name: 'América do Sul', 
    slug: 'america-do-sul', 
    description: 'Diversidade e paraíso natural.', 
    bgUrl: '/img/europa.png',
  },
  { 
    name: 'Ásia', 
    slug: 'asia', 
    description: 'A terra da sabedoria e da cultura.', 
    bgUrl: '/img/europa.png',
  },
  { 
    name: 'África', 
    slug: 'africa', 
    description: 'O berço da humanidade.', 
    bgUrl: '/img/europa.png',
  },
  { name: 'Europa', 
    slug: 'europa', 
    description: 'O continente mais antigo.', 
    bgUrl: '/img/europa.png',
  },
  { 
    name: 'Oceania', 
    slug: 'oceania', 
    description: 'O continente dos arquipélogos.', 
    bgUrl: '/img/europa.png',
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(CONTINENTS)
  } else {
    res.status(400);
  }
}
