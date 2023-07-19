import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import logo from '../logo.svg'
import { useSelector } from 'react-redux'
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <img src={logo} alt="jobster logo" className="logo" />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
