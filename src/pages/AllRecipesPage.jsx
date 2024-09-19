import { Link } from 'react-router-dom'

const AllRecipesPage = ({ recipes }) => {
  return (
    <>
      <h1>All recipes</h1>
      <ul>
        {recipes.map(currentRecipe => (
          <li key={currentRecipe.id}>
            <Link to={`/recipes/${currentRecipe.id}`}>{currentRecipe.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllRecipesPage
