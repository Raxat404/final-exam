import React from 'react'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categoires'
function Home() {
    return (
        <>
            <Hero />
            <div className="wrapper">
                <Categories heading={'Categories'} />
            </div>
        </>
    )
}

export default Home