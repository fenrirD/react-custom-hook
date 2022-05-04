import './App.css';
import React, {useEffect, useState} from 'react';
import {useInput} from "./custom_hook/useInput";
import {useTabs} from "./custom_hook/useTabs";
import {useTitle} from "./custom_hook/useTitle";

const contents = [
  {
    tab: 'tab - 1',
    content: 'tab - 1 임',
  },
  {
    tab: 'tab - 2',
    content: 'tab - 2 임',
  }
]


function App() {
  const sayHello = () => console.log('say Hello~')

  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    sayHello()
  },[counter])
  const incrementCounter = () => setCounter(counter + 1)

  const decrementCounter = () => setCounter(counter - 1)

  const maxLen = (value) => value.length  <= 10;

  const name = useInput("Mr.", maxLen)
  const {currentItem, changeItem} = useTabs(0, contents)
  const titleUpdater = useTitle("Loading...")
  setTimeout(()=>titleUpdater("안녕 디지몬"),3000)
  return (
      <div className="App">
        <p>counter: {counter}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button> <br/>
        <input placeholder="Nmae" {...name} />
        <div>
          {contents.map((content, idx)=> (
            <button onClick={()=>changeItem(idx)} key={idx}>{content.tab}</button>
          ))}
        </div>
        <div>{currentItem.content}</div>
      </div>
  );
}

class AppUgly extends React.Component {
  state = {
    counter: 0
  }

  render() {
    console.log(this.state)
    const {counter} = this.state
    return (
        <div className="App">
          <p>counter: {counter}</p>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
        </div>
    )
  }

  incrementCounter = () => {
    this.setState(state => ({counter: state.counter + 1}))
  }

  decrementCounter = () => {
    this.setState(state => ({counter: state.counter - 1}))
  }
}

export default App;

