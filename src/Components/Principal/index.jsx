import Header from "../Header"
import FinanceForm from "../FinanceForm"
import FinanceList from "../FinanceList"
import Total from "../Total"
import "./index.scss"
import { useEffect, useState } from "react"

export const Principal = () => {
    const [data,setData] = useState(() => {
        const recuperaLocal = localStorage.getItem('@ResumoFinanceiro');
        return recuperaLocal ? JSON.parse(recuperaLocal) : [];
      });
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("Escolha Aqui");

    useEffect(() =>{
        localStorage.setItem("@ResumoFinanceiro", JSON.stringify(data))
    },[data])

    const saveData = () =>{
        let x = descricao
        let y = parseFloat(valor.replace(",","."))
        let z = tipo
        let xx=[...data,{id: crypto.randomUUID(), descricao: x, valor: y, tipo: z}]
        onlyValid(xx)
    }
    const onlyValid = (list) => {
        let x = list.filter(element =>{
            return element.tipo !== "Escolha Aqui"
        })
        setData(x)
    }
    const deletItem = (id) =>{
        let x = data.filter(element =>{
            return element.id !== id
        })
        setData(x)
    }
    let apenasEntrada = data.filter(element =>{
        return element.tipo == "Entrada"
    })
    let totalEntrada = apenasEntrada.reduce((i,q) =>{
        return i + q.valor
    },0)
    let apenasDespesa = data.filter(element =>{
        return element.tipo == "Despesa"
    })
    let totalDespesa = apenasDespesa.reduce((i,q) =>{
        return i + q.valor
    },0)
    let totalValores = totalEntrada - totalDespesa;
    
    return(
        <>
            <Header />
            <div className="div__main">
                <div className="div__form__total">
                <FinanceForm descricao={descricao} setDescricao={setDescricao} valor={valor} setValor={setValor} tipo={tipo} setTipo={setTipo} saveData={saveData}/>
                <Total total={totalValores}></Total>
                </div>
                <div className="div__list">
                <FinanceList list={data} delItem={deletItem}/>
                </div>
            </div>
        </>
    )
}
export default Principal