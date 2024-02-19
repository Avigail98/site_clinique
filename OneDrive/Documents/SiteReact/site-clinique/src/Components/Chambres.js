import '../assets/image1.jpg'
import "./HomePage.css"
import cabinet1 from '../assets/cabinet1.jpg';

import { Helmet } from 'react-helmet';

const Chambres = () => {
    return ( 
        <div>

<Helmet>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

    </Helmet>
            <h1>Nos chambres</h1>
            <br></br>
            <div class="items">
                <div>
            <h3>Chambre de massage</h3>
            <p>Masseurs, ostéopathes, réflexologues, praticien en médecine chinoise.</p>
            <p>Vous êtes les bienvenus à Hahalutsa. Un lieu destiné au bien-être holistique de la personne.</p>
            <p>Un espace de 15m2 comprenant lit de massage, chaises, canapé, fauteuil, table basse ( voir photo ). Location horaire à 50nis/h, possibilité pack de 5h à 220 nis à utiliser à votre convenance avec réservation.</p>
            </div>
            <div><img alt="chambre1" src={cabinet1} /></div>
            </div>

            <div class="items"> 
                <div><img alt="chambre1" src={cabinet1} /></div>
            <div>
            <h3>Chambre de massage</h3>
            <p>Masseurs, ostéopathes, réflexologues, praticien en médecine chinoise.</p>
            <p>Vous êtes les bienvenus à Hahalutsa. Un lieu destiné au bien-être holistique de la personne.</p>
            <p>Un espace de 15m2 comprenant lit de massage, chaises, canapé, fauteuil, table basse ( voir photo ). Location horaire à 50nis/h, possibilité pack de 5h à 220 nis à utiliser à votre convenance avec réservation.</p>
            </div>
            </div>
            
        </div>
     );
}
 
export default Chambres;