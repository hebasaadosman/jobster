import { useState, useEffect } from 'react'

import logo from '../logo.svg'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow } from '../components'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userRegister } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }
  const dispatch = useDispatch()
  const { user,isLoading } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!name && !isMember))
      toast.error('please fill all fields')
    if (isMember) {
      dispatch(userLogin(values))
      return
    }
    dispatch(userRegister(values))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <img src={logo} alt="jobster logo" className="logo" />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              userLogin({ email: 'testUser@test.com', password: 'secret' })
            )
          }}
        >
          {isLoading ? 'loading...' : 'demo'}
        </button>
        <footer>
          <p>
            {values.isMember ? 'Not a Member ' : 'Already a Member'}
            <button
              className="member-btn"
              type="button"
              onClick={() =>
                setValues({ ...values, isMember: !values.isMember })
              }
            >
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </footer>
      </form>
    </Wrapper>
  )
}
export default Register
