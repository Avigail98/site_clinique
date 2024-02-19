import "./HomePage.css"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Navbar = () => {
    return (
        <div class="mynav">
                 <Helmet>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

    </Helmet>
            <div><h1 class="siteName">Room Location</h1></div>
            <div >
                <ul class="nav">
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/presentation">Présentation</Link></li>
                    <li><Link to="/chambres">Nos chambres</Link></li>
                    <li>Tarifs</li>
                    <li ><Link to="/contact">Contact</Link></li>

                </ul>
            
            </div>

     
<br></br>
        </div>
      );
}
 
export default Navbar;