// import logo from '../../logo.svg';
import './App.css';
import Welcome from './../Welcome';

function App() {
  const shouldShowWelcome = true
  const onClickHandler = (e) => {
    console.log('Hello World!')
   }
  return (
    <div className="App">
      <header className="App-header">
        { 
          //!true && <Welcome /> 
          shouldShowWelcome ? <Welcome name="Gawee" /> : (<div>
            <h1>Hi there...</h1>
            <p>I'm using React. 👨‍💻</p>
            <button 
              style={{ height: 50, border: '1px solid white', padding: 8, }}
              onClick={onClickHandler}
              >Click me!</button>
            </div>)
        }
      </header>
    </div>
  );
}

export default App;
