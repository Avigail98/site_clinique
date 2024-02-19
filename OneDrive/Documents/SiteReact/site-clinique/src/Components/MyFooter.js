import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyFooter = () => {
    return ( 
        <div>
 <div class="items">

    <div class="box">
    <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" />
        <h4>Contactez-nous</h4>
         <p>Tel. <a href="tel:+972587945996">058-7945-996</a></p>
     </div>

    <div class="box">
    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        <h4>Adresse</h4>
        <p>Hehalut's 83 street</p>
    </div>
    <div class="box">
    <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
        <h4>Horaires</h4>
        <p>Dimanche au Jeudi : 08:00 - 18:00</p></div>

    </div>
        </div>
     );
}
 
export default MyFooter;