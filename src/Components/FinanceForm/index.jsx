import "./index.scss"

export const FinanceForm = ({descricao,setDescricao,valor,setValor,tipo,setTipo,saveData}) => {
    const resetForm = (e) =>{
        e.preventDefault()
        setDescricao("")
        setValor("")
        setTipo("Escolha Aqui")
    }    
    return(
        <form onSubmit={resetForm}>
            <label htmlFor="nome">Descrição</label>
            <input id="nome" type="text" value={descricao}  onChange={(e) => setDescricao(e.target.value)} placeholder="Digite aqui sua descrição"/>
            <span>Ex: Compra de Roupas</span>

            <label htmlFor="valor">Valor R$:</label>
            <input id="valor" type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Ex: 150,89"/>

            <label htmlFor="tipo">Tipo de Valor</label>
            <select  id="tipo" value={tipo} onChange={(e) => {setTipo(e.target.value)}}>
                <option value="Escolha Aqui">Escolha Aqui</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>

            <button type="submit" onClick={() =>{
                saveData()
            }}>Inserir Valor</button>
        </form>
    )
}
export default FinanceForm