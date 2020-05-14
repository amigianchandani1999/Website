function createRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr.open(method, url);
    }

    if(xhr != null) {
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               callback(xhr.responseText);
            }
        };
        xhr.send();
        return true;
    }

    return false;
}


createRequest("GET", "TournamentResults/2014.txt", function(data) {
    console.log(data);
    var lines = data.split("\n")
    var array = [];
    for (var i = 0; i < lines.length; i ++){
        array.push(lines[i].split("\t"));
    }
    var r = document.createElement("a")
    
});
