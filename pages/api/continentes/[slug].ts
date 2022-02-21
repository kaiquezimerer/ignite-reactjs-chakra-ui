import { NextApiRequest, NextApiResponse } from 'next';

const CONTINENTS = [
  { 
    name: 'América do Norte', 
    slug: 'america-do-norte', 
    bgUrl: '/img/londres.jpg',
    resume: 'A América do Norte é composta por 3 países: Canadá, Estados Unidos e México. Estados Unidos e o Canadá são grandes potências mundiais.',
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
    bgUrl: '/img/londres.jpg',
    coverUrl: '',
    resume: 'A América do Sul é um dos subcontinentes da América. Apresenta paisagens naturais muito diversas e uma enorme biodiversidade, abrigando a maior floresta tropical do mundo.',
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
    bgUrl: '/img/londres.jpg',
    resume: 'A Ásia é um dos continentes do mundo, considerado o mais extenso territorialmente e o mais populoso também. A Ásia é dividida em regiões geográficas, o que facilita o estudo.',
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
    bgUrl: '/img/londres.jpg',
    resume: 'África é o terceiro maior continente do mundo e um dos mais populosos. O continente africano, apesar de rico em biodiversidade e multicultural, sofre com a extrema pobreza.',
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
    bgUrl: '/img/londres.jpg',
    resume: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
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
    bgUrl: '/img/londres.jpg',
    resume: 'Oceania é um continente localizado entre os oceanos Índico e Pacífico, formado por 14 países insulares e diversos territórios ultramarinos. Possui 42 milhões de habitantes.',
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
