import { Container } from './styles';

export default function FilterItems() {
  return (
    <Container>
      <h2>Filtrar por:</h2>
      <div className="box">
        <h3>Preço</h3>
        <button type="button">Menor preço</button>
        <button type="button">Maior preço</button>
      </div>
      <hr />
      <div className="box">
        <h3>Marcas</h3>
        <button type="button">Integral Médica</button>
        <button type="button">Max titanium</button>
        <button type="button">Black Skull</button>
        <button type="button">Insane Labz</button>
        <button type="button">Profit</button>
        <button type="button">Gold</button>
      </div>
    </Container>
  );
}
