import { Navigate } from 'react-router-dom'

const isAdmin = false

const AdminPage = () => {
  if (!isAdmin) {
    return <Navigate to='/' />
  }

  return <h1>Super secret stuff</h1>
}

export default AdminPage
