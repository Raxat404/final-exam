import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
function Meal() {
    const mealId = useParams()
    const [meal, setMeal] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    console.log(meal);
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube } = meal;
    console.log(meal)

    if (meal.length) {
        return <h1>Loading</h1>
    }
    return (
        <div className='single-meal'>
            <div className='meal-info'>
                <h1 className='meal-name'>{strMeal}</h1>
                <div className='meal-details'>
                    <Link to={`/category/${strCategory}`} className="details-link">{strCategory}</Link>
                    <Link to={`/filterArea/${strArea}`} className="details-link">{strArea}</Link>
                    {strTags && <b className="details-link">{strTags}</b>}
                    <b className="details-link" onClick={() => navigate(-1)}>Back</b>
                </div>
            </div>

            <div className='meal-extra'>
                <img src={strMealThumb} alt={strMeal} />
                <p>{strInstructions}</p>
            </div>
            <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${strYoutube && strYoutube.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    )
}

export default Meal