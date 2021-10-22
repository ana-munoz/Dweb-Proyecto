import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vin2.jpg'
              text='Pearl | Janis Joplin'
              label='$25.900'
              path='/products'
            />
            <CardItem
              src='images/vin3.jpg'
              text='Duke Ellington & John Coltrane | Duke Ellington/John Coltrane'
              label='$30.900'
              path='/products'
            />

            <CardItem
              src='images/vin4.jpg'
              text='Thriller | Michael Jackson'
              label='$25.900'
              path='/products'
            />

            <CardItem
              src='images/vin1.jpg'
              text='Zappa (OST, 5LP Deluxe Edition) | Frank Zappa'
              label='$140.900'
              path='/products'
            />

          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/vin2.jpg'
              text='Pearl | Janis Joplin'
              label='$25.900'
              path='/products'
            />
            <CardItem
              src='images/vin3.jpg'
              text='Duke Ellington & John Coltrane | Duke Ellington/John Coltrane'
              label='$30.900'
              path='/products'
            />

            <CardItem
              src='images/vin4.jpg'
              text='Thriller | Michael Jackson'
              label='$25.900'
              path='/products'
            />

            <CardItem
              src='images/vin1.jpg'
              text='Zappa (OST, 5LP Deluxe Edition) | Frank Zappa'
              label='$140.900'
              path='/products'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vin2.jpg'
              text='Pearl | Janis Joplin'
              label='$25.900'
              path='/products'
            />
            <CardItem
              src='images/vin3.jpg'
              text='Duke Ellington & John Coltrane | Duke Ellington/John Coltrane'
              label='$30.900'
              path='/products'
            />

            <CardItem
              src='images/vin4.jpg'
              text='Thriller | Michael Jackson'
              label='$25.900'
              path='/products'
            />

            <CardItem
              src='images/vin1.jpg'
              text='Zappa (OST, 5LP Deluxe Edition) | Frank Zappa'
              label='$140.900'
              path='/products'
            />

          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;