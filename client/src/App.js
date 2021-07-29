import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </div>
  )
}

export default App
