console.log("am fromt he worker");

var getDateInCustomFormat = () => {
    var cDate = new Date();
    var myDateFormat = `${cDate.getDate()} / ${cDate.getMonth() + 1} / ${cDate.getFullYear()} ${cDate.getHours()}: ${cDate.getMinutes()} : ${cDate.getSeconds()}`;
    console.log(myDateFormat)
    postMessage(myDateFormat)
    

}
setInterval(() => {
    getDateInCustomFormat();
}, 1000)
