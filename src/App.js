import logo from './logo.svg';
import './App.css';
import RefComponent from "./RefComponent";
import PureComponent from './Pure'
import Parent from './Parent';
import Refs from './Refs';
import ParentRef from './ParentRef';
import Focus from './FocusDemo';
import FocusDemo from './FocusDemo';
import Forms from './Forms';
import Parencompo from './Parencompo';
import MyPure from './MyPure';
import Hooksdemo from './Hooksdemo';
import Refrence from './Refrence';
import DataList from './DataList';
import {createStore} from 'redux'
function App() {
  var default_state=0;
  //reducer
  // const balenceReduce=(state=default_state,action)=>{
  //   console.log("reducer invoked",action)
  //   switch(action.type){
  //     case "DEPOSIT":
  //      return  state=state+100
  //      case "WITHDRAW":
  //      return  state=state-100
  //      default:
  //        return state;
  //   }
  // }

  // store
  // var store=createStore(balenceReduce)
  // console.log("state",store.getState())
  // store.dispatch({type:"DEPOSIT"})
  // console.log("state",store.getState())

  // store.dispatch({type:"DEPOSIT"})
  // console.log("state",store.getState())
 
  return (
    <div className="App">
   
     <Parent></Parent>
     {/* <Refs></Refs> */}
    </div>
  );
}

export default App;
