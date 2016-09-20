var React = require("react");
var actions = require("../actions/ProgressBarActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          bar:""
      }  
    },
    changeWidth:function(e){
        e.preventDefault();
		var btnName = e.target.name;
		var state = this.state;
		state.name = btnName;
        state.bar = this.props.selectedBar;
		this.setState(state);
		  
		actions.changeWidth(this.state);
    },    
    render:function(){
        return(
            <div>
                <button name="decrease-25" id="decrease-25" onClick={this.changeWidth} className="btns">-25</button>
                <button name="decrease-10" id="decrease-10" onClick={this.changeWidth} className="btns">-10</button>
                <button name="increase+10" id="increase+10" onClick={this.changeWidth} className="btns">+10</button>
                <button name="increase+25" id="increase+25" onClick={this.changeWidth} className="btns">+25</button>
            </div>
        )
    }
})