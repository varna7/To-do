import React from 'react';
import './App.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          item: [],
          textcontent: " "
        };
      }
      txtchange =(e)=>{
        this.setState({textcontent : e.target.value})
      }

      additem =(e)=>{
        let list=this.state.item;
        let tcontent=this.state.textcontent;
        list.push(tcontent);
        this.setState({item:list});

      }
      remove =(i)=>{
        let list=this.state.item;
        list.splice(i,1);
        this.setState({item:list});
      }
    
  render() {
    return (
      
        <div className="App">
        <input type="text" onChange={this.txtchange}/>
        <button onClick={this.additem}>add</button>
        <br />
        <ul>
          {this.state.item.map((itm, k)=>{
            return(
              <li>{itm} <button onClick={()=>{this.remove(k)}}>delete</button></li>
            );
          })}
        </ul>
      </div>
    );

  }

}
export default Todo;


