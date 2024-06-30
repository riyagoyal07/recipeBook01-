import React from 'react'

function Recipe({recipe, index, deleteRecipe}) {
  return (

    <div className='recipe'>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <h4>Ingredients : </h4>
      <p>{recipe.ingredients}</p>
      <h4>Instruction : </h4>
      <p>{recipe.instruction}</p>
      <button onClick={()=> deleteRecipe(index)}>Delete</button>
    </div>
  )
};

export default Recipe
