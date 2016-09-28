var React = require("react");
var actions = require("../actions/ProgressBarActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          btntype:"",
          progessbar:""
      }  
    },
    changeWidth:function(e){
        e.preventDefault();
		var state = this.state;
		state.btntype = e.target.name;
        state.progessbar = this.props.selectedBar;
		this.setState(state);		  
		actions.changeWidth(this.state);
    },    
    render:function(){
        return(
            <div>
                <button name="-25" onClick={this.changeWidth} className="btns">-25</button>
                <button name="-10" onClick={this.changeWidth} className="btns">-10</button>
                <button name="+10" onClick={this.changeWidth} className="btns">+10</button>
                <button name="+25" onClick={this.changeWidth} className="btns">+25</button>
            </div>
        )
    }
})