import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instruction, setInstruction] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addRecipe({ name, ingredients, instruction, image, completed:false });
        setName("");
        setIngredients("");
        setInstruction("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Recipe Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Ingredients</label>
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>

            <label>Instructions</label>
            <textarea value={instruction} onChange={(e) => setInstruction(e.target.value)} required></textarea>

            <label>Image URL</label>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />

            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default RecipeForm;
