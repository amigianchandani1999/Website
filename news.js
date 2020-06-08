var articles = [];
var count = 0;

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var xhr_YDN_tok = createCORSRequest("GET", "http://localhost:3000/news");



xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var data = JSON.parse(xhr.responseText).data;
       for(var i = 0; i < data.length; i++){
           articles.push({title: data[i].story_headline, date: Date.parse(data[i].story_postdate), image: !(data[i].story_image)? "Images/default2.jpg" : "https://yalebulldogs.com"+data[i].story_image, link:"https://yalebulldogs.com"+data[i].story_path});
       }
       updateArticles();
    }
};

xhr_YDN_tok.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dat = xhr_YDN_tok.responseText;
        var tem = '"cse_token": "';
        dat = dat.substring(dat.indexOf(tem) + tem.length);
        dat = dat.substring(0, dat.indexOf('",'));

        var xhrYDN = createCORSRequest("GET", "https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=30&hl=en&source=gcsc&gss=.com&cselibv=57975621473fd078&cx=010327200236473118383:talvx2ixvnk&q=ami%20gianchandani&safe=off&cse_tok="+ dat +"&sort=&exp=csqr,cc&oq=ami%20gianchandani&callback=google.search.cse.api5859");

        xhrYDN.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               var data = xhrYDN.responseText;
               //console.log(data);
               var temp = "google.search.cse.api5859(";
               data = data.substring(data.indexOf(temp)+ temp.length);
               data = JSON.parse(data.substring(0, data.length - 2)).results;
               //console.log(data);
               for(var j = 0; j < data.length; j ++){
                   var date = data[j].richSnippet.metatags.ogUrl;
                   temp = "/blog/";
                   date = date.substring(date.indexOf(temp) + temp.length);
                   date = date.substring(0, 10);  //2019/10/03
                   date = Date.parse(date);
                   articles.push({title: data[j].richSnippet.metatags.ogTitle, date: date, image: !(data[j].richSnippet.metatags.ogImage)? "Images/default2.jpg" : data[j].richSnippet.metatags.ogImage, link: data[j].richSnippet.metatags.ogUrl});
               }
               updateArticles();
            }
        };
        xhrYDN.send();
    }
}


count = 2;
xhr.send();
xhr_YDN_tok.send();



function updateArticles() {
    count --;
    if (count > 0){
        return;
    }
    document.getElementById('mainoo').innerHTML = '<h2>Recent News</h2>';

    //sort articles by date
    articles.sort(function(a, b){
        return b.date - a.date;
    })

    //removing duplicate articles
    for(var i = 0; i < articles.length; i ++){
        for (var j = i + 1; j < articles.length; j ++){
            if (articles[i].title == articles[j].title){
                articles.splice(j, 1);
            }
        }
    }

    for(var k = 0; k < articles.length; k ++){
        console.log(articles[i]);
        var d = document.createElement("a");
        d.className = "article card";
        d.href = articles[k].link;
        d.target = "_blank";

        d.innerHTML = '<img src='+ articles[k].image +' alt="News Picture" style="width:100%"><div class="container"><h4><b>'+articles[k].title+'</b></h4></div>';

        document.getElementById('mainoo').appendChild(d);
    }




}
