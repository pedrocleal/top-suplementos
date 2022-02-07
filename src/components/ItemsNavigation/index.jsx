import { Link } from "react-router-dom";
import { Container, LinkContainer } from "./styles";

export default function ItemsNavigation() {
  return (
    <Container>
      <LinkContainer>
        <Link 
          to='/top5'>
          TOP 5
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link 
          to='/whey'>
          WHEY PROTEIN
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link 
          to='/creatina'>
          CREATINAS
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link 
          to='/termo'>
          TERMOGÊNICOS
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link 
          to='/pre-treino'>
          PRÉ-TREINO
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link 
          to='outros'>
          OUTROS
        </Link>
      </LinkContainer>

      
    </Container>
  )
}