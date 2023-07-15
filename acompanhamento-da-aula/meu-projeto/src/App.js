import "./App.css";
import Pessoa from './components/Pessoa';

import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";

function App() {
  const nome = 'Rodolfo';
  // const nome = "Jeferson";
  // const novoNome = nome.toUpperCase();
  // const meuCarro =
  //   "https://autoshow.com.br/wp-content/uploads/2022/01/chevrolet-cruze-midnight-2023-brasil-1024x576.jpg?x84485";
  // function soma(a, b) {
  //   return a + b;
  // }
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome='Jeferson'/>
      <SayMyName nome='Vieira'/>
      <SayMyName nome='Moreira'/>
      <SayMyName nome={nome}/>
      <Pessoa  foto="https://autoshow.com.br/wp-content/uploads/2022/01/chevrolet-cruze-midnight-2023-brasil-1024x576.jpg?x84485" nome= 'Jeferson' idade='41' profissao='desenvolvedor'/>
    </div>
  );
}

export default App;


{/* <h1>Bora pra cima!</h1>
<p>vamos se aprofundar mais nessa tecnologia...</p>

<h2>Alterando o JSX</h2>
<p>Olá, {nome}</p>
<p>Nome em letras maiúsculas {`"${novoNome}"`}</p>
<p>Multiplicação: {9 * 9}</p>
<p>Resultado da função: {soma(2, 3)}</p>
<img src={meuCarro} alt="Imagem carro" /> */}
