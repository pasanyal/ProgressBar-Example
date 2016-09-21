var dispatcher = require("../dispatcher");

function ProgressBarStore() {
    var listeners = [];
    var bars = [{ name: "pb1", width: 0, className: "inner-progress-barB", displayWidth: 0 }, 
                    { name: "pb2", width: 0, className: "inner-progress-barB", displayWidth: 0 }];
                    
    function getBars() {
        return bars;
    }

    function onChange(listener) {
        listeners.push(listener);       
    }
	
	function changeBar(bar) {
		triggerListeners();
	}
    
    function changeWidth(bar, btnType) {
		bars.map(function (s, index) {
            
            if (s.name === bar.bar) {
                switch (btnType) {
                    case "decrease-25":
                        s.displayWidth -= 25;
                        if(s.displayWidth < 0)
                        {
                            s.displayWidth = 0;
                            s.width = s.displayWidth;
                        }
                        else if(s.displayWidth >= 0 && s.displayWidth <= 100)
                        {
                            s.width = s.displayWidth;
                            s.className = "inner-progress-barB";
                        }
                        else if(s.displayWidth > 100)
                            s.className = "inner-progress-barR";
                        //setProgressBarWidth(s);
                        break;
                    case "decrease-10":                    
                        s.displayWidth -= 10;
                        if(s.displayWidth < 0)
                        {
                            s.displayWidth = 0;
                            s.width = s.displayWidth;
                        }
                        else if(s.displayWidth >= 0 && s.displayWidth <= 100)
                        {
                            s.width = s.displayWidth;
                            s.className = "inner-progress-barB";
                        }
                        else if(s.displayWidth > 100)
                            s.className = "inner-progress-barR";
                        //setProgressBarWidth(s);
                        break;
                    case "increase+25":                    
                        s.displayWidth += 25;
                        if(s.width < 100){
                            s.width += 25;
                            if(s.width > 100)
                            {
                                s.width = 100;
                                s.className = "inner-progress-barR";
                            }
                        }
                        else
                            s.className = "inner-progress-barR";
                        //setProgressBarWidth(s);
                        break;
                    case "increase+10":                    
                        s.displayWidth += 10;
                        if(s.width < 100){
                            s.width += 10;
                            if(s.width > 100)
                            {
                                s.width = 100;
                                s.className = "inner-progress-barR";
                            }
                        }
                        else
                            s.className = "inner-progress-barR";
                        //setProgressBarWidth(s);
                        break;
                }
            }
        });
        triggerListeners();
	}
    
    function setProgressBarWidth(progressBar) {
        if(progressBar.displayWidth < 0)
        {
            progressBar.displayWidth = 0;
            progressBar.width = progressBar.displayWidth;
        }
        else if(progressBar.displayWidth > 0 && progressBar.displayWidth < 100)
        {
            progressBar.width = progressBar.displayWidth;
            progressBar.className = "inner-progress-barB";
        }
        else if(progressBar.displayWidth > 100)
            progressBar.className = "inner-progress-barR";
    }
    
    function triggerListeners() {                                    
        listeners.forEach(function (listener) {
            listener(bars);
        });
    }

    dispatcher.register(function (payload) {
        var payloadType = payload.type;
        switch (payloadType) {
            case "changeProgressBar":
                changeBar(payload.progessbar);
                break;
            case "changeWidth":
                changeWidth(payload.progessbar, payload.btnType);
                break;
        }        
    });

    return {
        getBars: getBars,
        onChange: onChange
    }
}

module.exports = ProgressBarStore();