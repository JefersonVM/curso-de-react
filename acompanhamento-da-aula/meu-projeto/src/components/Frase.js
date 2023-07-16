import frase from'./Frase.module.css';

function Frase (){
    return(
        <div className={frase.fraseContainer}>
            <p className={frase.fraseContent}>Vamos testar a minha frase no meu arquivo principal</p>
        </div>
    )
}
export default Frase;
