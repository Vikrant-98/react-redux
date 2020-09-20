import React from 'react';
import { connect } from 'react-redux';
import { updateName } from './redux/action/action'

function App(props) {
  console.log(props);
  return (
    <div>
      <h1>I am in {props.myName}</h1>
      <input type='text' onChange={(e)=>{props.changeName(e.target.value)}}/>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    myName:state.name
  }
}

const mapDispatchToProps=(dispatch)=>{
  
  return{
    changeName:(name)=>{dispatch(updateName(name))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
