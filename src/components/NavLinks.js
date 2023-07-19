import { NavLink } from 'react-router-dom'
import links from '../utilts/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((linkItem) => {
        const { id, text, path, icon } = linkItem
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
