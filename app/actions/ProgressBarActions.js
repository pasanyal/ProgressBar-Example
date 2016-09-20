var dispatcher = require("../dispatcher");

module.exports = {
    changeBar:function(bar){
        dispatcher.dispatch({
           progessbar:bar,
           type:"changeProgressBar" 
        });
    },
    changeWidth:function(state){
        dispatcher.dispatch({
           progessbar:state.bar,
           btnType:state.name,
           type:"changeWidth" 
        });
    }
}