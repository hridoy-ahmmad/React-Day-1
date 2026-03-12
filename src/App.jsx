
import './App.css'
import Nayok from './Nayok'
import Person from './Person'
import ToDO from './ToDO'

function App() {
  const actors = ['Rajjal', 'Rubel', 'shakib khan', 'bappa raj']
  const persons = [
    { name: 'abul', age: 42, },
    { name: 'kabul', age: 18, },
    { name: 'shabul', age: 19, },
    { name: 'babul', age: 24, },
    { name: 'shupuk', age: 30, },
  ]

  return (
    <>
      <h1>My first React</h1>
      <Developer name='Rafiq' tech='JS'></Developer>
      <Developer name='Jama' tech='python'></Developer>
      <ToDO task='Home work' time='30min' isDone={true} ></ToDO>
      <ToDO task='Shower' time='30min' isDone={false} ></ToDO>
      <ToDO task='hand writing' time='30min' isDone={true} ></ToDO>

      {
        persons.map(person => <Person person={person}></Person>)
      }


      {
        actors.map(actor => <Nayok props={actor}></Nayok>)
      }



    </>
  )
}


function Developer(props) {
  return (
    <div style={{
      color: 'red',
      border: '2px solid red',
      marginTop: '10px'
    }}>
      <h1>Name: {props.name} </h1>
      <h3>Tech: {props.tech} </h3>
    </div>
  )
}

export default App
