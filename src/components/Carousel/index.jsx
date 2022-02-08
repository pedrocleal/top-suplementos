import { Container, Item } from './styles'
import { Button } from '../Button'

import { supplements } from '../../data/supplements'

export default function Carousel() {
  return (
    <Container>
        {supplements.map((supplement) => (
          <Item key={supplement.id}>
          <img src={supplement.src} alt='Suplemento'></img>
          <div className='info'>
            <h2>{supplement.name}</h2>
            <p>{supplement.desc}</p>
            <Button>Comprar</Button>
          </div>
        </Item>
        ))}
    </Container>
  )
}