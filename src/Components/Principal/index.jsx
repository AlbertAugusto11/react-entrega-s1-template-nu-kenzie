import Header from "../Header"
import FinanceForm from "../FinanceForm"
import FinanceList from "../FinanceList"
import Total from "../Total"
import "./index.scss"
import { useState } from "react"
export const Principal = () => {
    const [data, setData] = useState([])
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("Escolha Aqui");
    const saveData = () =>{
        let x = descricao
        let y = valor
        let z = tipo
        let xx=[...data,{id: crypto.randomUUID(), descricao: x, valor: y, tipo: z}]
        setData(xx)
    }
    const totalValor = data.reduce((item,qtd) =>{
        let x = parseInt(qtd.valor)
        return item + x
    },0)
    const deletItem = (id) =>{
        let x = data.filter(element =>{
            return element.id !== id
        })
        setData(x)
    }

    return(
        <>
            <Header />
            <div className="div__main">
                <div className="div__form__total">
                <FinanceForm descricao={descricao} setDescricao={setDescricao} valor={valor} setValor={setValor} tipo={tipo} setTipo={setTipo} saveData={saveData}/>
                <Total total={totalValor}></Total>
                </div>
                <div className="div__list">
                <FinanceList list={data} deletItem={deletItem} delItem={deletItem}/>
                </div>
            </div>
        </>
    )
}
export default Principal