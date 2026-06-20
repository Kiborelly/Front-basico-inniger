import "./App.css";
import Nav from './componentes/Nav.tsx'
import Hero from './componentes/Hero.tsx'
import Categories from "./componentes/Categories.tsx";
const App = () => {
    return(<div className="div-App">
        <div className="div-Nav"><Nav /></div>
        <div className="div-Hero"><Hero /></div>
        <div className="div-Categories"><Categories /></div>
    </div>)

}
export default App;
