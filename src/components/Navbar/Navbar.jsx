import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faShoppingBasket, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isShow, setIsShow] = useState(false)
    const basket = useSelector(state => state.basket)

    const handleMenuToggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div className="navbar flex items-center justify-between px-4 py-3 bg-gray-800  top-0 w-full">
            <Link to="/" className="flex items-center text-white font-bold text-xl">
                <FontAwesomeIcon icon={faShoppingBasket} className="mr-2 text-yellow-400" />
                Food
            </Link>

            <nav className="header_nav flex items-center space-x-4 md:space-x-8">
                <ul className={`nav_list md:flex space-x-4 ${isShow ? 'hidden' : 'block md:block'}`}>
                    <li className="nav_item">
                        <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/filterArea/Italian" className="text-white hover:text-yellow-400">Italian</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/filterArea/French" className="text-white hover:text-yellow-400">French</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/filterArea/American" className="text-white hover:text-yellow-400">American</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/filterArea/Kenyan" className="text-white hover:text-yellow-400">Kenyan</Link>
                    </li>
                    <li className="nav_item">
                        <Link to="/filterArea/Turkish" className="text-white hover:text-yellow-400">Turkish</Link>
                    </li>
                </ul>

                <div className={`header_icons space-x-4 md:space-x-8 ${isShow ? 'flex' : 'hidden md:flex'}`}>
                    <span id="toggle-menu" className="text-white cursor-pointer md:hidden" onClick={handleMenuToggle}>
                        <FontAwesomeIcon icon={isShow ? faTimes : faBars} />
                    </span>

                    <Link to={'/search'}>
                        <span className="text-white">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </Link>
                    <Link to={'/favourites'}>
                        <div className="basket-btn flex items-center text-white">
                            <span>
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <p className="ml-1">{basket.length}</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
