import reactDom from 'react-dom';
import * as BsIcon from 'react-icons/bs';
import { Overlay, Container } from './styles';

export default function Sucess() {
  return reactDom.createPortal(
    <Overlay>
      <Container>
        <span className="emoji">🎉</span>
        <h1>Obrigado!</h1>
        <span>Sua compra foi realizada com sucesso e em breve estará em sua residência.</span>
        <div className="social">
          <a href="https://www.linkedin.com/in/pedro-leal-2335a0214/" target="_blank" rel="noreferrer"><BsIcon.BsLinkedin className="linkedin" /></a>
          <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer"><BsIcon.BsGithub className="github" /></a>
          <a href="https://instagram.com/pedrocleall" target="_blank" rel="noreferrer"><BsIcon.BsInstagram className="instagram" /></a>
        </div>
        <a href="/" className="button">Voltar para a home</a>
      </Container>
    </Overlay>,
    document.getElementById('success-root'),
  );
}
