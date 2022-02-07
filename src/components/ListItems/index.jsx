import { Container, Grid, Item } from './styles';

import whey from '../../assets/images/whey-protein.svg'

import { Button } from '../Button'

export default function ListItems() {
  return (
    <Container>
      <h1>Nossos suplementos</h1>
      <Grid>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
        <Item>
          <div className='header'>
            <img src={whey} alt="Item foto" />
          </div>
          <div className='product-info'>
            <h3>Whey protein</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='price'>
              <span>De: <strong>79,90</strong></span>
              <span>Por: <strong>49,90</strong></span>
            </div>
            <div className='actions'>
              <Button>Ver mais</Button>
              <Button>+Carrinho</Button>
            </div>
          </div>
        </Item>
      </Grid>
    </Container>
  )
}