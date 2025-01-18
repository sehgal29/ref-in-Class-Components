import React, { createRef } from 'react'
class App extends React.Component {

  constructor() {
    super();
    this.inputref = createRef();
  }

  //this will set the value of input when the DOM is created.
  componentDidMount() {
    // console.log(this.inputref.current.value="1540");
  }

  callingRef() {
    console.log(this.inputref.current.value)
    this.inputref.current.style.color="Green"
    this.inputref.current.style.backgroundColor="Black"
  }
  render() {
    
    return (
      <>
      <h1>Ref in Class Component</h1>
      <input type="text" ref={this.inputref}/>
      <button onClick={() => this.callingRef()}>Update DOM</button>
      </>
    )
  }
}

export default App;