import wheyIntegral from '../assets/images/whey-integral.png';
import creatineIntegral from '../assets/images/creatina-integral.png';
import preTreinoDarkness from '../assets/images/pre-treino-integral.png';

export const supplements = [
  {
    id: 1,
    type: 'whey',
    src: wheyIntegral,
    name: 'Whey Protein - Integral',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '119,90',
      discountPrice: '89,90'
    }
  },
  {
    id: 2,
    type: 'pre-workout',
    src: preTreinoDarkness,
    name: 'Pré Treino - Darkness',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '99,90',
      discountPrice: '79,90'
    }
  },
  {
    id: 3,
    type: 'creatine',
    src: creatineIntegral,
    name: 'Creatina - Integral',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: {
      initialPrice: '69,90',
      discountPrice: '39,90'
    }
  },
]

export default function getSupplement(name) {
  return supplements.find(supplement => supplement.name === name)
}