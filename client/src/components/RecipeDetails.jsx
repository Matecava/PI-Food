import Card from "./Card";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesById, unMount } from "../actions";

export default function RecipeDetails(){
    let {idRecipe} = useParams();
    const dispatch = useDispatch();
    let recipe = useSelector(store => store.recipe);
    useEffect(()=>{
        dispatch(getRecipesById(idRecipe))
        dispatch(unMount())
    },[dispatch,idRecipe])
    return(
        <div>
            {
                recipe.id? 
                <Card recipe={recipe}/>
                :
                <h1>Cargando</h1>
            }
        </div>
    )
}