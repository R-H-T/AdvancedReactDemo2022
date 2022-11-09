import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      // console.log('constructor')
      const { name="User" } = props
      this.props = {
        name
      }
      this.state = { date: new Date() }
    }
  
    componentDidUpdate(prevProps, prevState) {
      // console.log('componentDidUpdate')
    }
  
    componentDidMount() {
      console.log('componentDidMount')
      this.tid = setInterval(() => { this.setState({ date: new Date() }) }, 1000)
    }
  
    componentWillUnmount() {
      // console.log('componentWillUnmount')
      clearInterval(this.tid)
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      // console.log('shouldComponentUpdate')
      if (this.props.name === nextProps.name && this.state.date === nextState.date) {
        return false
      } else {
        return true
      }
    }
  
    render() {
      // console.log('render')
      const { date } = this.state
      const { name } = this.props
  
      // Clock
      const hours = `${date.getHours()}`.padStart(2, '0')
      const minutes = `${date.getMinutes()}`.padStart(2, '0')
      const seconds = `${date.getSeconds()}`.padStart(2, '0')
      const clock = `${hours}:${minutes}:${seconds}`
  
      return (<div>
        <h1>Hi there...{ name }</h1>
        <p>I'm using React. 👨‍💻 <strong>Clock: { clock }</strong></p>
        <button 
          style={{ height: 50, border: '1px solid white', padding: 8, }}
          onClick={() => { alert('You clicked me!') } }>Click me!</button>
        </div>)
    }
  }
  
  export default MyComponent
  