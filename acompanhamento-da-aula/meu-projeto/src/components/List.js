import Item from './Item';
function List(){
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='Chevrolet' ano_lancamento={2018}/>
            <Item marca='Volkswagem' ano_lancamento={2020}/>
        </ul>
        </>
    )

}
export default List;
