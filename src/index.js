import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



var PersonTable = React.createClass({
    getInitialState:function(){
        return {
            data: [
                {id: 1,  fname: "Simon",  lname: "Bailey"},
                {id: 2,  fname: "Thomas", lname: "Burleson"},
                {id: 3,  fname: "Will",   lname: "Button"},
                {id: 4,  fname: "Ben",    lname: "Clinkinbeard"}
            ]
        }
    },

    render:function(){
        var rows = this.state.data.map(function(person, i){
            return <PersonRow data={person} key={i} />
        })
        return  <div className="table-responsive">
				  <table className="table table-striped">
				   	<tbody>{rows}</tbody>
				  </table>
				</div>
    }

});

var PersonRow = React.createClass({
  render:function(){
    return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.fname}</td>
                <td>{this.props.data.lname}</td>
            </tr>
        )
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PersonTable />, document.getElementById('myContainer'));
