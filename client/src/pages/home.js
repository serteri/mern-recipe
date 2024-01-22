import {useState , useEffect} from 'react'
import axios from "axios";


export const Home = () => {
const[recipes,setRecipes] = useState([])
useEffect(() =>{
    const fetchRecipe = async () => {

            try{
                const response =  await axios.get("http://localhost:3001/recipes");
                setRecipes(response.data)

            }catch (err){
                console.error(err);
            }

    };

    fetchRecipe();
    },[]
);
    return (
        <div>
                <h2>Recipes</h2>
            <ul>
                {recipes.map ((recipe) => (
                    <li key={recipe._id}>
                        <div>
                            <h2>{recipe.name}</h2>
                        </div>
                        <div className="instructions">
                            <p>{recipe.instructions}</p>
                        </div>

                        <img src={recipe.imageUrl} alt={recipe.name}/>
                        <p>Cooking Time : {recipe.cookingTime} (minutes)</p>

                    </li>
                ))}
            </ul>

        </div>


    )


}