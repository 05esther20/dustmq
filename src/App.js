
import './App.css';

const App = (props) => {
  return (
    <>    
    <h1 className='m-5'>코딩은 너무 어렵고 힘들다. {props.msg}</h1>
    <a href={props.link}>네이버</a>
    <img src={props.pic}></img>
    </>

  );
}

export default App;
