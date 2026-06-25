import Nav from '../componentes/Nav.componentes/Nav'
import Hero from '../componentes/Hero.componentes/Hero'
import Categories from '../componentes/Categories.componentes/Categories'
const Home = () => {
    return(<div className="div-App">
        <div className="div-Nav"><Nav /></div>
        <div className="div-Hero"><Hero /></div>
        <div className="div-Categories"><Categories /></div>
    </div>)

}
export default Home;
