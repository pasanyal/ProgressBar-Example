var React = require("react");
var ReactDOM = require("react-dom");
var ProgressBarList = require("./components/ProgressBarList.jsx");
var pbStore = require("./stores/progressBarsStore");
var _bars = pbStore.getBars();
pbStore.onChange(function(bars){
    _bars = bars;
    render();
});

function render(){
    ReactDOM.render(<ProgressBarList bars={_bars} />, document.getElementById("container"));	
}

render();
