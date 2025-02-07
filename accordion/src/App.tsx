import './App.css'
import Accordion from './components/Accordion'

const accordionData = [
  {
    title: "Item 1",
    content: "Content 1"
  },
  {
    title: "Item 2",
    content: "Content 2"
  },
  {
    title: "Item 3",
    content: "Content 3"
  },
]


function App() {

  return (
    <>
      <Accordion items={accordionData}/> 
    </>
  )
}

export default App
