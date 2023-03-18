// https://www.primefaces.org/primereact/
import Busca from './Busca'


const App = () => {
    return(
        // div>h1{bla bla bla}
        <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
            <div className="col-12">
                <h1>Exibir uma lista de oi...</h1>    
            </div>
            <div className="col-8">
                <Busca />
            </div>
            
        </div>
    )
}


export default App