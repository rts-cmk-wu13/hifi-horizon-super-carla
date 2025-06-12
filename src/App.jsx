import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext.jsx';

function App() {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <>
      <h1>Velkommen {user && user.name}</h1>
      <button onClick={() => setUser({ name: 'John Doe' })}>Set User</button>

    </>
  )
}

export default App
