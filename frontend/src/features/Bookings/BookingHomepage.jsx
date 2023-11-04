import './BookingHomepage.css'
import ImageSlider from '../ImageSlider/ImageSlider'

function BookingHomepage() {

    return (
        <div className="homepage">
            <div className='left-homepage'>
                <h1>About</h1>
                <p>When you want to mix a good time with exciting food in a relaxing local ambience then a great Mauritius restaurant for you to visit is the Beach House Restaurant. Located along Royal Road in Grand Baie, the Beach House Restaurant has a sports bar type atmosphere that is packed with locals and serves up meals for lunch as well as dinner. The Beach House Restaurant has a huge menu of goodies that range from traditional hamburgers to octopus curry with aubergine to a chicken espetada which has a delightful flavour. There is also traditional sports bar fare from peri-peri Buffalo wings to pork riblets and tapas that include calamari a la romain, spicy meatballs as well as spicy chicken livers. The atmosphere really gets rolling here on game day and the beachside location is perfect for afternoon cocktails or listening to live music in the evenings. The Beach House is a very beautiful bar on the beach with awesome views over the lagoon of Grand Baie. Imagine sharing a chilled drink with your partner as the sun goes down! If you’re looking for a romantic night spot, this is a perfect choice!</p>
            </div>
            <div className='right-homepage'>
                <ImageSlider/>
            </div>
        </div>
    )
}

export default BookingHomepage