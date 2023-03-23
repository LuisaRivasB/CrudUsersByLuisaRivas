import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UserCard from './components/UserCard'

function App() {
 
  const [users, setusers] = useState()

  const [updateInfo, setupdateInfo] = useState()

const [isOpen, setisOpen] = useState(false)

  const getAllUsers = () => {
      const url = `https://users-crud.academlo.tech/users/`
      axios.get(url)
        .then(res => setusers(res.data))
        .catch(err => console.log(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

 const createNewUser = data => {
  const url = `https://users-crud.academlo.tech/users/`
  axios.post(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers(users )
    })
    .catch(err => console.log(err))
 }

  const deleteUserById = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setupdateInfo()
      })
      .catch(err => console.log(err))
  }
  const handleOpen = () => setisOpen(true)

  const handleClose =() => setisOpen(false)

  return (
    <div className="App">
      <h1 className='tittle'>Users</h1>
      <button className='App-btn-form' onClick={handleOpen}>Open Form</button>
      <div className={`App-form ${isOpen && 'App-form-visible'}`}>
        <UsersForm 
            createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            handleClose={handleClose}
            setupdateInfo={setupdateInfo}
        />    
      </div>
      <div className='App-card'>
        {
          users?.map(user =>(
            <UserCard 
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setupdateInfo={setupdateInfo}
                handleOpen={handleOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
