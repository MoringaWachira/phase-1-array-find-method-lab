// code your solution here //...


const record = [
    {
     year: "2015", 
     result: "W"
    },
     
    {
    year: "2014",
     result: "N/A"
    },

    {
     year: "2013", 
     result: "L"
    },
    
  ];



  function superbowlWin(array) {
    let arrayRecord = array.find(function (storeResult) {
        return storeResult.result === "W"
    });
    if (typeof arrayRecord === "object") {
        return arrayRecord.year;
    }
}

superbowlWin(record);