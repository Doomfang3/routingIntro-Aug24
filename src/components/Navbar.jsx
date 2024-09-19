import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'red' })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'red' })}
          >
            Messages
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/admin'
            style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'red' })}
          >
            Admin Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/recipes'
            style={({ isActive }) => ({ color: isActive ? 'limegreen' : 'red' })}
          >
            All the Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
