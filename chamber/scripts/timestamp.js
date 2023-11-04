function getTimeStamp(){
    var dateNow = new Date();

    document.getElementById("timestamp-id").value = dateNow.toDateString();


    var hours = dateNow.getHours();
    var mins = dateNow.getMinutes();
    var seconds = dateNow.getSeconds();
    document.getElementById("time-stamp-id").value = hours + ":" + mins + ":" + seconds;
}