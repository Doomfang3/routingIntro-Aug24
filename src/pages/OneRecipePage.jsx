import { useParams, useSearchParams } from 'react-router-dom'

const OneRecipePage = ({ recipes }) => {
  const { recipeId } = useParams()

  const currentRecipe = recipes.find(currentRecipe => currentRecipe.id === recipeId)

  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('pizza'))

  return (
    <>
      <h1>Recipe of {currentRecipe.name}</h1>
      <p>{currentRecipe.instructions}</p>
    </>
  )
}

export default OneRecipePage
