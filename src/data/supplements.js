import wheyProtein from '../assets/images/whey-protein.svg';
import wheyIntegral from '../assets/images/whey-integral.png';
import wheyMax from '../assets/images/whey-max.png';
import creatineIntegral from '../assets/images/creatina-integral.png';
import preTreinoDarkness from '../assets/images/pre-treino1.png';
import preTreinoPsychotic from '../assets/images/pre-treino2.png';
import hipercaloricoMax from '../assets/images/hiper-max.png';
import hipercaloricoBlackSkull from '../assets/images/hiper-blackskull.png';
import hipercaloricoProfit from '../assets/images/hiper-profit.png';

export const supplements = [
  {
    id: 1,
    type: 'whey',
    src: wheyIntegral,
    name: 'Whey Protein - Integral',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '119,90',
      discountPrice: '89,90',
    },
  },
  {
    id: 2,
    type: 'pre-workout',
    src: preTreinoDarkness,
    name: 'Pré Treino - Darkness',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '99,90',
      discountPrice: '79,90',
    },
  },
  {
    id: 3,
    type: 'creatine',
    src: creatineIntegral,
    name: 'Creatina - Integral',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90',
    },
  },
  {
    id: 4,
    type: 'hipercalorico',
    src: hipercaloricoMax,
    name: 'Hipercalórico - Max',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90',
    },
  },
  {
    id: 5,
    type: 'pre-treino',
    src: preTreinoPsychotic,
    name: 'Pré Treino - Psychotic',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90',
    },
  },
  {
    id: 6,
    type: 'whey',
    src: wheyMax,
    name: 'Whey Protein - Max Titanium',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '119,90',
      discountPrice: '89,90',
    },
  },
  {
    id: 7,
    type: 'hipercalorico',
    src: hipercaloricoBlackSkull,
    name: 'Hipercalórico - BlackSkull',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90',
    },
  },
  {
    id: 8,
    type: 'hipercalorico',
    src: hipercaloricoProfit,
    name: 'Hipercalórico - Profit',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90',
    },
  },
  {
    id: 9,
    type: 'whey',
    src: wheyProtein,
    name: 'Whey Protein - Gold',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '119,90',
      discountPrice: '89,90',
    },
  },
];

export default function getSupplement(id) {
  return supplements.find((supplement) => supplement.id === id);
}
