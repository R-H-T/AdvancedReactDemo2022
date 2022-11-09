import React, { useEffect, useState, useContext } from 'react'; // JSX
import useClock from '../../Hooks/useClock';
import MyContext from '../../Context/my-context'

export default function MyComponent2(props) {
  const { name, onChangeName } = useContext(MyContext)
    
  const { clock } = useClock()

  const [usersName, setUsersName] = useState(localStorage.getItem('usersName') || '') // ['', (newUsersName) => {/*...*/}]
  useEffect(() => {
    console.log('User\'s name changed: ' + usersName)
    localStorage.setItem('usersName', usersName)
  }, [usersName])

  const [count, setCount] = useState(0) // [0, (newCount) => {/*...*/}]
  useEffect(() => {
    console.log('Count changed: ' + count)
  }, [count])

  return (<div>
      <h1>Clock: { clock }</h1>
      <h2>Hello { props.name || name || 'World' }</h2>
      <p>You've clicked { count } times!</p>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
      <button onClick={() => { setCount(0) }}>Reset</button>
      <p>Nice to meet you. My name's { name }</p>
      <input type="text" value={name} onChange={(e) => { // let tid = setTimeout(() => setUsersName(e.target.value), 3000)
        // clearTimeout(tid)
        // tid = setTimeout....
        // setUsersName(e.target.value)
        onChangeName(e.target.value)
      } } />
    </div>)
}
