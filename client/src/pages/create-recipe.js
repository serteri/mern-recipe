import {useState} from 'react'

export const CreateRecipe = () => {
cobst [recipesRouter, setRecipe]=
    const [state, setState] = useState({
        name: '',
        ingredients:[],
        instructions: "",
        imageUrl:'',
        cookingTime:0,
        userOwner:0
    });

const handleChange = (event) => {
event.preventDefault(event, true);

}
    return (
        <div className="create-recipe">
            <h2>Create Recipe</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>
                <label htmlFor="ingredients">Ingridients</label>


                <label htmlFor="instructions">Instructions</label>
                <textarea  id="instructions" name="instructions"></textarea>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" id="imageUrl" name="imageUrl"/>
                <label htmlFor="cookingTime">Cooking Time (minutes)</label>
                <input type="number" id="cookingTime" name="cookingTime"/>
            </form>

        </div>


    )


}