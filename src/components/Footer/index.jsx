import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span>
        Desenvolvido por
        {' '}
        <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer">@pedrocleal</a>
        {' '}
        💻
      </span>
      <div className="images">
        <span>Créditos das imagens</span>
        <ul>
          <li><a href="https:/gsuplementos.com.br/" target="_blank" rel="noreferrer">Growth</a></li>
          <li><a href="https:/integralmedica.com.br/" target="_blank" rel="noreferrer">Integral Médica</a></li>
          <li><a href="https:/maxtitanium.com.br/" target="_blank" rel="noreferrer">Max Titanium</a></li>
          <li><a href="https:/insanelabz.com/" target="_blank" rel="noreferrer">Insane Labz</a></li>
          <li><a href="https:/blackskullusa.com.br/" target="_blank" rel="noreferrer">Black Skull</a></li>
          <li><a href="https:/profitlabs.ind.br/" target="_blank" rel="noreferrer">Profit</a></li>
          <li><a href="https:/optimumnutrition.com/pt-br" target="_blank" rel="noreferrer">Optimum Nutrition</a></li>
        </ul>
      </div>
    </Container>
  );
}
