import './style.css'
import {FaTrashAlt, FaCircle} from 'react-icons/fa'

function Home() {

  const users = [
    {
      id: 'fjskdlf',
      name: 'Pedro',
      age: 18,
      email: 'pedro@gmail.com'
    },
    {
      id: 'blabla',
      name: 'blabla',
      age: 18,
      email: 'blabla@gmail.com'
    }
  ]
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type='text' placeholder='Name' />
        <input name='age' type='number' placeholder='Age' />
        <input name='email' type='email' placeholder='Email' />
        <button type="button">Sign In</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
        <div>
          <p>Nome: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
        <button><FaCircle/></button>
        <button><FaTrashAlt/></button>
      </div>
      ))}
    </div>
  )
}

export default Home