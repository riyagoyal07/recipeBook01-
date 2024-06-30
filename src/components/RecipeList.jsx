import React from 'react'
import Recipe from './Recipe'

function RecipeList({recipes, deleteRecipe}) {
  return (
    <div id='recipes'>
      {recipes.map((recipe,index)=>(
        <Recipe
        key={index}
        recipe={recipe}
        index={index}
        deleteRecipe={deleteRecipe}
        />
      ))}
    </div>
  )
}

export default RecipeList
