import React from 'react';
import Style from './Customer.module.scss';
import CustomerCard from './card/CustomerCard';
import card1 from '../../assets/customerImages/card1.png'
import card2 from '../../assets/customerImages/card2.png'
import card3 from '../../assets/customerImages/card3.png'
import card4 from '../../assets/customerImages/card4.png'
import card5 from '/src/assets/customerImages/card5.png'
import card6 from '/src/assets/customerImages/card6.png'

const Customer = () => {
  const cardData = [
    {
      custCardImg: card1,
      custCardTitle: 'Recieve',
    },
    {
      custCardImg: card2,
      custCardTitle: 'Send',
    },
    {
      custCardImg: card3,
      custCardTitle: 'Buy',
    },
    {
      custCardImg: card4,
      custCardTitle: 'Recieve',
    },
    {
      custCardImg: card5,
      custCardTitle: 'Send',
    },
    {
      custCardImg: card6,
      custCardTitle: 'Buy',
    }
  ]
  return (
    <section id={Style.customer}>
      <div className={Style.customerContainer}>
        <h1 className={Style.customerTitle}>What we do to help
          our customers in
          digital era.</h1>
        <div className={Style.custCardsBox}>
          {cardData.map( ( card, index ) => (
            <CustomerCard key={index} {...card} />
          ) )}
        </div>
      </div>
    </section>
  )
}
export default Customer