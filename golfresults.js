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


createRequest("GET", "TournamentResults/Winstxt.txt", function(data) {
    console.log(data);
    var lines = data.split("\n")
    var array = [];
    for (var i = 0; i < lines.length; i ++){
        if (lines[i][0] != "\t" && lines[i] != ''){
            array.push(lines[i].split("\t"));
        }

    }
    console.log(array); //2D array. Each item is a table row

    for (var j = 0; j < array.length; j ++){
        //need to append to table?

        var r = document.createElement("tr");  //starting to create HTML code
        //r.className = "tournament score";

        r.innerHTML = "<td>" + array[j][0] +"</td> <td>" + array[j][1] + "</td><td style='text-align:center'>" + array[j][2] + "</td>  <td style='text-align:center'>"+ array[j][3] + "</td> <td style='text-align:center'>" + array[j][4] + "</td> <td style='text-align:center'>" + array[j][5] + "</td> <td style='text-align:center'>" + array[j][6] + "</td> <td style='text-align:center'>" + array[j][7]+ "</td> <td style='text-align:center'>"+ array[j][8] +"</td>";

        // <tr>
        //   <td>array[j][k]</td> //tournament
        //   <td>array[0][k+1]</td> //course
        //   <td style='text-align:center'>array[j][k+2]</td>  //yards
        //   <td style='text-align:center'>array[j][k+3]</td> //tour
        //   <td style='text-align:center'>array[j][k+4]</td> //date
        //   <td style='text-align:center'>array[j][k+5]</td> //score 1
        //   <td style='text-align:center'>array[j][k+6]</td> //score 2
        //   <td style='text-align:center'>array[j][k+7]</td> //score 3
        //   <td style='text-align:center'>array[j][k+8]</td>  //total
        // </tr>

        document.getElementById('tableoo').appendChild(r);
    }




});
