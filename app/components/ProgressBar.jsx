var React = require("react");

module.exports = React.createClass({
    render:function(){
        return(
            <div name="row-pb" id="row-pb" className="row-pb">
                <div className="display-data">{this.props.info.displayWidth + '%'}</div>
				<div name={this.props.info.name} id={this.props.info.name} 
                    style={{width: this.props.info.width + '%'}}
                    className={this.props.info.className}>                    
                </div>
		    </div>            
        )
    }
})
