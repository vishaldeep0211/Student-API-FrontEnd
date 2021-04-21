import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentHome from './StudentHome'
import PortalHome from './PortalHome'
import AddStudent from './components/features/AddStudent'
import DeleteStudent from './components/features/DeleteStudent'
import FetchStudent from './components/services/Injectable Service/FetchStudent'
import UpdateStudent from './components/features/UpdateStudent'
import FetchAll from './components/features/FetchAll'
import { ProtectedRoute } from './ProtectedRoute'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PortalHome} />
        <ProtectedRoute exact path='/StudentHome' component={StudentHome} />
        <ProtectedRoute exact path='/AddStudent' component={AddStudent} />
        <ProtectedRoute exact path='/UpdateStudent' component={UpdateStudent} />
        <ProtectedRoute exact path='/DeleteStudent' component={DeleteStudent} />
        <ProtectedRoute exact path='/FetchStudent' component={FetchStudent} />
        <ProtectedRoute exact path='/students' component={FetchAll} />
      </Switch>
    </Router>
  )
}
