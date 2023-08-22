import React from 'react'
import Style from './CustomerCard.module.scss';

const CustomerCard = ( { custCardImg, custCardTitle } ) => {
  return (
    <div className={Style.customerCard}>
      <img src={custCardImg} alt="card image" className={Style.custCardImg} />
      <h1 className={Style.custCardTitle}>{custCardTitle}</h1>
      <p className={Style.custCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <a href="#" className={Style.custCardLink}>Learn More <img src="/src/assets/customerImages/arrow.svg" alt="" /></a>
    </div>
  )
}

export default CustomerCard