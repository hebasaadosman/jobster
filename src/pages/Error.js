import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>404 Not Found</h3>
        <p>we cannot find your page</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
