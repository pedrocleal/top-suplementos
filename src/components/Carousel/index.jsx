import { Container, Item } from './styles'
import { Button } from '../Button'

import whey from '../../assets/images/whey-protein.svg'

const items = [
  {
    src: whey,
    alt: 'Whey protein',
    title: 'WHEY PROTEIN',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    src: whey,
    alt: 'Whey protein',
    title: 'WHEY PROTEIN',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    src: whey,
    alt: 'Whey protein',
    title: 'WHEY PROTEIN',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    src: whey,
    alt: 'Whey protein',
    title: 'WHEY PROTEIN',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    src: whey,
    alt: 'Whey protein',
    title: 'WHEY PROTEIN',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
]

export default function Carousel() {
  return (
    <Container>
        {items.map(({ src, alt, title, desc }) => (
          <Item>
          <img src={src} alt={alt}></img>
          <div className='info'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button>Comprar</Button>
          </div>
        </Item>
        ))}
    </Container>
  )
}