import './App.css'
import ColorBlock from './components/ColorBlock'
import CounterBlock from './components/CounterBlock'
import HelloBlock from './components/HelloBlock'
import ListBlock from './components/ListBlock'
import TodoList from './components/TodoList'

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ]
  return (
    <div className="container">
      <div className="left">
      <HelloBlock text={"Hello World"}/>
      <ListBlock items={items}/>
      <ColorBlock/>
      <CounterBlock/>
      </div>
      <div className='right'>
        <h1 style={{textAlign: "center", color: "white"}}>Task</h1>
        <TodoList/>
      </div>
    </div>
  )
}

export default App
