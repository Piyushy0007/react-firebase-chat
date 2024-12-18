import Chat from "./Components/chat/chat"
import Details from "./Components/details/details"
import List from "./Components/list/list"

const App = () => {
  return (
    <div className='container'>

<List/>
      <Chat/>
      
      <Details/>
    </div>
  )
}

export default App