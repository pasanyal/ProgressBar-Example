var React = require("react");
var actions = require("../actions/ProgressBarActions");
var ControlButtons = require("./ControlButtons.jsx");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:""
      }  
    },
    changeBar:function(e){
        e.preventDefault();
		var name = e.target.name;
		var state = this.state;
		state[name] = e.target.value;
		this.setState(state);
    },    
    render:function(){
        return(
            <div>
			<div name="select-progress-div">
				<select name="bar" onChange={this.changeBar}>
                  <option value="">Select Progress bar</option>
				  <option value="pb1">ProgressBar1</option>
				  <option value="pb2">ProgressBar2</option>				  
				</select>
			</div>
            <div name="row-buttons">
				<ControlButtons selectedBar={this.state} />
            </div>
            </div>
        )
    }
})