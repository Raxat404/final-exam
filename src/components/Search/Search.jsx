import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ContentItem from "../ContentItem/ContentItem"
import { searchingError, searchingMeals, searchMeals } from "../../redux/actions"
import Loading from "../Loading/Loading"
import swal from "sweetalert"


function Search() {
    const [searchStr, setSearchStr] = useState()
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters)
    const [products, setProducts] = useState([])
    const filterLoadingStatus = useSelector(state => state.filterLoadingStatus)

    const handleSubmit = async (e) => {
        dispatch(searchingMeals())
        e.preventDefault()
        if (searchStr.length > 0) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`)
            if (!response.ok) {
                dispatch(searchingError())
            }

            const data = await response.json()
            dispatch(searchMeals(data.meals))

            if (!data.meals) {
                swal('Nothing Found', 'Meal is not found', 'info')
            }

        }
        setSearchStr('')
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    if (filterLoadingStatus === 'loading') {
        return <Loading />
    }
    if (filterLoadingStatus === 'error') {
        return <h1>Error</h1>
    }
    if (filterLoadingStatus === 'isLOADING') {
        return (
            <>
                <div className={'products__banner'} onSubmit={handleSubmit}>
                    <form>
                        <input
                            value={searchStr}
                            onChange={(e) => setSearchStr(e.target.value)}
                            className="search-meal w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                            type="search"
                            placeholder="Type for search by category..."
                        />

                    </form>
                </div>

                <div className='products-wrapper'>
                    {filters && filters.length ?
                        filters.map(meal => {
                            return <ContentItem key={meal.idMeal} {...meal} isBasket={false} />
                        }) : (
                            products.map(meal => {
                                return <ContentItem key={meal.idMeal} {...meal} isBasket={false} />
                            })
                        )
                    }
                </div>
            </>
        )
    }
}

export default Search