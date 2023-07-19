import React from 'react'
import {useSelector} from "react-redux"
import ContentItem from "../ContentItem/ContentItem"
import Empty from "../Empty/Empty"

function Favourites() {
    const basket = useSelector(state => state.basket)
    
    return (
      <div className='favourite-wrapper bg-gray-800 h-screen'>
          <div className='products__banner'>
              <h1><span>Your</span> Favourite Meals</h1>
          </div>
          <div className={basket.length > 0 && 'favourites'}>
              {basket.length > 0 ? (
                basket.map(item => {
                    return <ContentItem key={item.idMeal}  {...item} isBasket={true} />
                })
              ) : (
                <Empty />
              )}
          </div>
      </div>
    )
}

export default Favourites