import React, { useState } from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function Login() {
  const [nextPage, setNextPage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setNextPage(true)
  }

  if (nextPage) {
    return (
      <Redirect to="/home" />
    )
  }

  return (
    <Container >
      <div className="login-wrap d-flex justify-content-center align-items-center">
        <div className="login-box">
          <form>
            <h4 className="pb-4 text-center text-capitalize">Login here</h4>
            <MDBInput className="mb-4 w-100" label='Email' id='form1' type='email' />
            <MDBInput className="mb-4 w-100" label='Password' id='form1' type='password' />
            <MDBBtn type="submit" onClick={handleSubmit} className="w-100">Log in</MDBBtn>
          </form>
        </div>
      </div>
    </Container>

  )
}

export default Login
