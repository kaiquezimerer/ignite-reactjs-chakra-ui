import { NextApiRequest, NextApiResponse } from 'next';

const CONTINENTS = [
  { 
    name: 'América do Norte', 
    slug: 'america-do-norte', 
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
  { 
    name: 'América do Sul', 
    slug: 'america-do-sul',
    bgUrl: '/img/europa.png',
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
  { 
    name: 'Ásia', 
    slug: 'asia', 
    bgUrl: '/img/europa.png',
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
  { 
    name: 'África', 
    slug: 'africa', 
    bgUrl: '/img/europa.png',
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
  { name: 'Europa', 
    slug: 'europa', 
    bgUrl: '/img/europa.png',
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
  { 
    name: 'Oceania', 
    slug: 'oceania', 
    bgUrl: '/img/europa.png',
    coverUrl: '',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      },
      {
        country: '',
        city: '',
        coverUrl: '',
        flagUrl: '',      
      }
    ]
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query

    const [continent] = CONTINENTS.filter((cont) => cont.slug === slug);

    if (continent) {
      res.status(200).json({ continent })
    } else {
      res.status(400).json({ error: 'Continente não encontrado.' });
    }
  } else {
    res.status(400);
  }
}
