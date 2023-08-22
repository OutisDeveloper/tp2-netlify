import React from 'react';
import Style from './Customer.module.scss';
import CustomerCard from './card/CustomerCard';
const Customer = () => {
  const cardData = [
    {
      custCardImg: '/src/assets/customerImages/card1.png',
      custCardTitle: 'Recieve',
    },
    {
      custCardImg: '/src/assets/customerImages/card2.png',
      custCardTitle: 'Send',
    },
    {
      custCardImg: '/src/assets/customerImages/card3.png',
      custCardTitle: 'Buy',
    },
    {
      custCardImg: '/src/assets/customerImages/card4.png',
      custCardTitle: 'Recieve',
    },
    {
      custCardImg: '/src/assets/customerImages/card5.png',
      custCardTitle: 'Send',
    },
    {
      custCardImg: '/src/assets/customerImages/card6.png',
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