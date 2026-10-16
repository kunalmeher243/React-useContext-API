import './App.css'
import ChildA from './components/ChildA';
import { createContext } from 'react'



//step-1: create conntext
const UserContext = createContext();
//step-2: wrap all the child inside a provider
//step-3: pass values
//step-4: go into the consumer and consume it

function App() {
  const [ user, setUser ] = useState({name:"Kunal"});
  return (
      <>

      <UserContext.Provider>
        <ChildA />
      </UserContext.Provider>
        
      </>
    
  )
}

export default App
export {UserContext}
