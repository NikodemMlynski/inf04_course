import StateForm from "./components/StateForm"
import DataForm from "./components/DataForm"
import Task from "./components/Task"
import SolvedTask from "./components/SolvedTask"
function App() {
  return (
    <div className="container">
      <div className='left'>
        <StateForm/>
        <DataForm/>
      </div>
      <div className='right'>
        {/* <Task/> */}
        <SolvedTask/>
      </div>
    </div>
  )
}

export default App
