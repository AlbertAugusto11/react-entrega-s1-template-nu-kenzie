import EmptyList from "./emptyList"
import "./index.scss"
import IndexList from "./indexList"

export const FinanceList = ({list,delItem}) =>{    
    return(
        <ul>
            <h3> Resumo Financeiro</h3>
            {list.length == 0 ? <EmptyList /> : list.map(element =>{
                return(
                    <IndexList key={element.id} id={element.id} descricao={element.descricao} valor={element.valor} tipo={element.tipo} delItem={delItem}/>
                )
            })}
        </ul>
    )
}
export default FinanceList