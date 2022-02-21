import { NextApiRequest, NextApiResponse } from 'next';

const CONTINENTS = [
  { 
    name: 'América do Norte', 
    slug: 'america-do-norte', 
    bgUrl: '/img/londres.jpg',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    cities: [
      {
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
        name: 'Reino Unido',
        city: 'Londres',
        bgUrl: '/img/londres.jpg',
        flagUrl: '/img/reino-unido.png',    
      },
      {
        name: 'França',
        city: 'Paris',
        bgUrl: '/img/paris.png',
        flagUrl: '/img/franca.png',     
      },
      {
        name: 'Itália',
        city: 'Roma',
        bgUrl: '/img/roma.png',
        flagUrl: '/img/italia.png',    
      },
      {
        name: 'República Tcheca',
        city: 'Praga',
        bgUrl: '/img/praga.png',
        flagUrl: '/img/republica-tcheca.png',   
      },
      {
        name: 'Holanda',
        city: 'Amsterdã',
        bgUrl: '/img/amsterda.png',
        flagUrl: '/img/holanda.png',     
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
      res.status(404).json({ error: 'Continente não encontrado.' });
    }
  } else {
    res.status(400);
  }
}
