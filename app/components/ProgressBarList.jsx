var React = require("react");
var ChangeBar = require("./ChangeBar.jsx");
var ProgressBar = require("./ProgressBar.jsx");

module.exports = React.createClass({
   render:function(){
       return(
		<div>           
            {
                this.props.bars.map(function(s,index){
                    return(
                        <ProgressBar info={s} key={"bar"+index} />
                    )         
                })
            }
           
		   <div name="row-cb" id="row-cb" className="row-cb">
				<ChangeBar />
           </div>           
		</div>
       )
   } 
});
