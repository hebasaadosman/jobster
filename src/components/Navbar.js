import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { toggleSidebar, userLogOut } from '../features/user/userSlice'
import logo from '../logo.svg'
import { useState } from 'react'
const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const [showLogOut, setShowLogOut] = useState(false)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <img src={logo} alt="jobster logo" className="logo" />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>

          {showLogOut && (
            <div className="dropdown show-dropdown">
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {
                  dispatch(userLogOut('Logging out...'))
                }}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
