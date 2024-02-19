import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./HomePage.css"
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const HomePage = () => {


    const datas=[
        {
            id:1,
            image:image2,
            title:" Recevez vos clients dans les meilleures conditions  "
        },
        {
            id:2,
            image:image1,
            title:" Recevez vos clients dans les meilleures conditions  "
        }
        
    ]
    return ( 

        <div>
      
      <Helmet>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

    </Helmet>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>kgfffffffhgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgv,chgcjhgc , vc,cgkjhgckgckhgckhgcgc</p>

<Carousel>
    {datas.map(slide=>(
      <div key={slide.id} >
        <img src={slide.image} alt="" ></img>
        <div className="overlay"><h2>{slide.title}</h2>
        <h4>Louez un espace sans engagement et sans contraintes</h4></div> </div>
        ))}   
    
    </Carousel>   
         <div class="description">
            <h2>Location de cabinets à l'heure à Jerusalem.</h2>
            <h4>Au choix, un cabinet avec fauteuils (idéal pour sophrologie, coaching, psychologie, etc) ou un cabinet avec table de massage (idéal pour ostéopathie, massages, soins énergétiques, etc).<br></br>
            Les cabinets sont au calme, équipés de wifi, et d’un espace bureau.</h4> 
            </div>
        <div class="specialites">
        <div class="sp1"><p><Link to="/chambres"><span class="linkw">Massage</span></Link></p></div>
        <div class="sp2"><p><Link to="/chambres"><span class="linkw">Therapie individuelle</span></Link></p></div>
        <div class="sp3"><p><Link to="/chambres"><span class="linkw">Yoga</span></Link></p></div>

        </div>
        
        <footer></footer>
        </div>
     );
}
 
export default HomePage;