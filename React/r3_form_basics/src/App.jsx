import DataForm from "../components/DataForm"
import SolvedTask from "../components/SolvedTask"
import StateForm from "../components/StateForm"
import Task from "../components/Task"

function App() {
  return (
    <div className="container">
      <div className='left'>
        <StateForm/>
        <DataForm/>
      </div>
      <div className='right'>
        <Task/>
      </div>
    </div>
  )
}

export default App
