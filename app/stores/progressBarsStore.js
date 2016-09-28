var dispatcher = require("../dispatcher");

function ProgressBarStore() {
    var listeners = [];
    
    /* Bars to be displayed in the html */
    var bars = [{ name: "pb1", width: 0, className: "inner-progress-barB", displayWidth: 0 }, 
                { name: "pb2", width: 0, className: "inner-progress-barB", displayWidth: 0 }];
    
    function getBars() {
        return bars;
    }
    
    /* Function to be called on change of bar */
    function onChange(listener) {
        listeners.push(listener);       
    }
    
    /* Triggers the specific listener */
    function triggerListeners() {                                    
        listeners.forEach(function (listener) {
            listener(bars);
        });
    }
	
    /* Common function to change the width of the bars */
	function setProgressBarWidth(progressBar, widthChangeSize) {
        progressBar.displayWidth += parseInt(widthChangeSize);
        if(progressBar.displayWidth < 0)
        {
            progressBar.displayWidth = 0;
            progressBar.width = progressBar.displayWidth;
        }
        else if(progressBar.displayWidth >= 0 && progressBar.displayWidth <= 100)
        {
            progressBar.width = progressBar.displayWidth;
            progressBar.className = "inner-progress-barB";
        }
        else if(progressBar.displayWidth > 100)
        {
            progressBar.width = 100;
            progressBar.className = "inner-progress-barR";
        }
    }
    
    /* Registers function for the specific payload type */
    dispatcher.register(function (payload) {
        var payloadType = payload.type;
        
        switch (payloadType) {
            case "changeWidth":
                var progessbar = payload.progessbar;
                var widthChangeSize = payload.btntype;
                bars.map(function (s, index) {            
                    if (s.name === progessbar.bar) {
                        setProgressBarWidth(s, widthChangeSize);
                    }
                });
                triggerListeners();
            break;
        }
    });

    return {
        getBars: getBars,
        onChange: onChange
    }
}

module.exports = ProgressBarStore();