var dispatcher = require("../dispatcher");

module.exports = {
    changeWidth:function(state){
        dispatcher.dispatch({
           progessbar:state.progessbar,
           btntype:state.btntype,
           type:"changeWidth" 
        });
    }
}