import './BookingHomepage.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faMartiniGlass } from '@fortawesome/free-solid-svg-icons'
import BookNowButton from './BookNowButton.svg';
import tripAdvisor from '../SliderImages/tripadvisor-choice-award.png'



function BookingHomepage() {
    const [activeMenuDiv, setActiveMenuDiv] = useState('about');

    
    function handleMenuItemClick(menuDiv) {
        setActiveMenuDiv(menuDiv);
      }
    

    return (
        <div className='home'>
            <div className='tripadvisor'>
                <img src={tripAdvisor} alt="Tripadvisor Choice Award 2023" className='tripadvisor-logo'/>
            </div>
            <div className='contact-card'>
                <h3>Contact card</h3>
                <a href='tel:2302632599' target='blank'>Call us: (230) 263 2599</a>
                <a href='https://wa.me/23054886740' target='blank'>Whatsapp: (230) 5488 6740</a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=-20.01557109059909,57.58057550851208" target='blank'>Directions</a>

            </div>
            <div className='menu-home'>
                <h3>
                    <a href="#" className='about-link' onClick={() => handleMenuItemClick('about')}>About</a>
                </h3>
                <h3>
                    <a href="#" className='events-link' onClick={() => handleMenuItemClick('events')}>Events</a>
                </h3>
                <h3>
                    <a href="#" className='menu-link' onClick={() => handleMenuItemClick('menu')}>Menu</a>
                </h3>
            </div>
            <div className="about" style={{ display: activeMenuDiv === 'about' ? 'flex' : 'none' }}>
                <div className='left-about'>
                    <h1>About</h1>
                    <p>If you are looking for a place to mix a good time with exciting food in a relaxing local ambience, then the Beach House Restaurant is the place for you. Located along Royal Road in Grand Baie, we have a sports bar type atmosphere that is packed with locals and serves up meals for lunch as well as dinner. We have a huge menu of goodies that range from traditional hamburgers to octopus curry with aubergine to a chicken espetada which has a delightful flavour. </p>
                    <p>There is also traditional sports bar fare from peri-peri Buffalo wings to pork riblets and tapas that include calamari a la romain, spicy meatballs as well as spicy chicken livers. The atmosphere really gets rolling here on game day and the beachside location is perfect for afternoon cocktails or listening to live music in the evenings. We are a very beautiful bar on the beach with awesome views over the lagoon of Grand Baie. Imagine sharing a chilled drink with your partner as the sun goes down! We are the perfect choice for a romantic night spot.</p>
                </div>
                <div className='right-about'>
                    <ImageSlider/>
                </div>
                <img src={BookNowButton} alt="" className='about-sticker'/>
            </div>
            <div className="events" style={{ display: activeMenuDiv === 'events' ? 'flex' : 'none' }}>
                <div className='events-left'>
                    <h1>Events</h1>
                    <p>The Beach House is available for private events and celebrations, with a number of different options available. Group Dining: You are now able to book for up to 10 guests at the Beach House using the booking button above. Our diary opens 4 months in advance for groups and 3 months in advance for smaller tables. Kindly note, groups are seated in our upstairs dining room, alongside other guests.</p>
                    <p>Private Events: the Beach House is available to hire for private events. Private hire of the room includes the use of the TV screen for streaming sports and movies. Our first floor can accommodate up to 14 seated guests for a Berenjak Feast, followed by the use of our pool table for post-food entertainment and up to 29 seated, excluding the use of the pool table. Contact us via the Events Enquiry button below to discuss in more detail.</p>
                </div>
                <div className='events-right'>
                    <div className='event-activities'>
                        <FontAwesomeIcon icon={faMicrophone} size="xl" className='event-items'/>
                        <h2 className='event-items'>Live Music & Sports</h2>
                        <p className='event-items'>Listen to amazing artists and watch live sports</p>
                        <hr className='event-items'/>
                    </div>
                    <div className='event-activities'>
                        <FontAwesomeIcon icon={faMartiniGlass} size="xl" className='event-items'/>
                        <h2 className='event-items'>Parties</h2>
                        <p className='event-items'>Join us to celebrate big occassions such as New Years Eve</p>
                        <hr className='event-items'/>
                    </div>
                </div>
            </div>
            <div className="menu" style={{ display: activeMenuDiv === 'menu' ? 'flex' : 'none' }}>
                <h1>Menu</h1>
                <p>We have a wide variety of food and drink options to choose from, so youre sure to find something to your taste. Be sure to try our signature dish, the chicken espetada!</p>
            </div>
        </div>
    )
}

export default BookingHomepage