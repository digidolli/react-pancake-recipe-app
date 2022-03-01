import React from "react"
import ".//RecipeList.css"

export default function RecipeList({title, active, setSelected, id}){
    return(
        <li className={active ? "RecipeList active" : "RecipeList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}