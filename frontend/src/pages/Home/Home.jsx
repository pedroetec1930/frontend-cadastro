import { useEffect, useState, useRef } from 'react'
import './style.css'
import { FaTrashAlt, FaCircle } from 'react-icons/fa'
import api from '../../services/api'


function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }

  async function createUser() {
    await api.post('/users', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function editUser(id) {
    await api.put(`/users/${id}`, {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function delUser(id) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Sign In</h1>
        <input name='name' type='text' placeholder='Name' ref={inputName} />
        <input name='age' type='number' placeholder='Age' ref={inputAge} />
        <input name='email' type='email' placeholder='Email' ref={inputEmail} />
        <button type="button" onClick={createUser}>Sign In</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={()=> editUser(user.id)}><FaCircle /></button>
          <button onClick={()=> delUser(user.id)}><FaTrashAlt /></button>
        </div>
      ))}
    </div>
  )
}

export default Home