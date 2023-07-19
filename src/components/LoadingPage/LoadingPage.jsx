import React from 'react'
import loader from "../../image/loading.gif"
function Loading() {
    return (
      <div className='loading-page'>
          <img src={loader} alt="Loading..."/>
      </div>
    )
}

export default Loading