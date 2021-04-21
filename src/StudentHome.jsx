import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link, withRouter } from 'react-router-dom'
import Heading from './components/page-elements/Heading'
import LogOutButton from './components/page-elements/LogOutButton'

function StudentHome(props) {
  return (
    <div>
      <LogOutButton key={uuidv4()} history={props.history} />
      <div className='home-portal-div'>
        <Heading headingType={'h1'} headingText={'Welcome to Student Portal'} />
        <Link to='/AddStudent'>
          <button
            style={{ margin: '10px' }}
            type='submit'
            className='btn btn-primary'
          >
            Add Student
          </button>
        </Link>
        <Link to='/UpdateStudent'>
          <button
            style={{ margin: '10px' }}
            type='submit'
            className='btn btn-primary'
          >
            Update Student
          </button>
        </Link>
        <Link to='/DeleteStudent'>
          <button
            style={{ margin: '10px' }}
            type='submit'
            className='btn btn-primary'
          >
            Delete Student
          </button>
        </Link>
        <Link to='/FetchStudent'>
          <button
            style={{ margin: '10px' }}
            type='submit'
            className='btn btn-primary'
          >
            Fetch a Student
          </button>
        </Link>
        <Link to='/students'>
          <button
            style={{ margin: '10px' }}
            type='submit'
            className='btn btn-primary'
          >
            Fetch All Students
          </button>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(StudentHome)
