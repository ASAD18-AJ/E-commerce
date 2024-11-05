import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati dolore quo rem sit sed beatae quod iste fugiat quos libero similique facilis numquam tempore repellendus, dolorem velit eos ipsum repudiandae voluptatum? Doloremque accusamus optio adipisci nam iste, quia autem.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit natus inventore aliquid fugit accusamus earum ad nesciunt minus sequi?</p>
        </div>
    </div>
  )
}

export default DescriptionBox