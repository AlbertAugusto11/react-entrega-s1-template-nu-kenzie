export const IndexList = ({id,descricao,tipo,valor,delItem}) =>{
    return(
        <li className={tipo == "Entrada" ? "li__op1" : "li__op2"}> 
            <div className="div__1">
            <h3>{descricao}</h3>
            <p>{tipo}</p>
            </div>
            <div className="div__2">
            <p>R$: {valor.toLocaleString("de-DE")} reais</p>
            <button type="button" onClick={() =>{delItem(id)}}>Excluir</button>
            </div>
        </li>
    )
}
export default IndexList