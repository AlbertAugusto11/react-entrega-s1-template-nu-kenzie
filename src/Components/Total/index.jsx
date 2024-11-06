import "./index.scss"
export const Total = ({total}) => {
    return(
        <div className="total__Div">
            <div>
                <h3>Valor total:</h3>
                <h3 className="h3__total">R$ {total.toLocaleString("de-DE")} reais</h3>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}
export default Total