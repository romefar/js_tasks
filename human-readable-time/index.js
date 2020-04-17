function humanReadable(sec) {
    var timeArr = [];
    var timeStr = "";
    
    timeArr[0] = (sec / 3600)^0;
    timeArr[1] = ((sec - timeArr[0] * 3600) / 60)^0;
    timeArr[2] = sec - (timeArr[0] * 3600 + timeArr[1] * 60);   
  
    for (let i = 0; i < timeArr.length; i++) {
      timeStr += ((timeArr[i] + "").length === 2) ? ":" + timeArr[i] : ":0" + timeArr[i];                
    }
      
    return timeStr.slice(1);
  }