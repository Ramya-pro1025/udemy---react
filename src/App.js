import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SaleImage from './components/SaleImage';
import Topics from './components/Topics';
import Recommended from './components/Recommended';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App()
{
    return(
        <div>
             <Navbar></Navbar>
             <Categories></Categories>
             <SaleImage></SaleImage>
             <Recommended></Recommended>
             <Topics></Topics>
             <Popular></Popular>
             <Footer></Footer>

        </div>
    )
}
export default App;