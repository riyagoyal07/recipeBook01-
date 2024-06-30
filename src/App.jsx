import './App.css'
import React,{ useEffect, useState } from 'react'
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
      //const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
      const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
       //if(recipes && recipes.length >0){
        setRecipes(storedRecipes);
      // }
    },[]);

    const addRecipe = (recipe)=>{
      const newRecipes = [...recipes, recipe];
      setRecipes(newRecipes);
      localStorage.setItem('recipes', JSON.stringify(newRecipes));
    }

    const deleteRecipe = (index)=>{
      const newRecipes= recipes.filter((_,i) => i !== index);
      setRecipes(newRecipes);
      localStorage.setItem('recipes', JSON.stringify(newRecipes));
      //setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

   
  return (
    <><div className='App'>
        <header>
          <h1>Recipe - Book</h1>
        </header>
        <main>
        < RecipeForm addRecipe ={addRecipe}/>
        <hr />
        <h3>Recipe-list</h3>
        < RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
        </main>
        </div>
    </>
  )
}

export default App
