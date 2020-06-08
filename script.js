var h = document.createElement("div");
h.id = "headeroo";
h.className = "header";
h.innerHTML = '<a class="header-link" href="index.html"><img class="header-logo" src="Images/header.png"/></a>';

var n = document.createElement("div");
n.id = "navbaroo";
n.className = "navbar";
n.innerHTML = '<a href="golf.html">Golf</a><a href="yale.html">Yale</a><a href="pingry.html">Pingry</a><a href="professional.html">Professional</a><a href="about.html">About</a>'


var f = document.createElement("div");
f.id = "footeroo";
f.className = "footer";
f.innerHTML = '<a href="#top">Top</a>'

document.body.append(f);
document.body.prepend(n);
document.body.prepend(h);



if (window.location.pathname.includes("golf"))
{
    document.getElementById('navbaroo').children[0].className = "section";
}

if (window.location.pathname.includes("yale"))
{
    document.getElementById('navbaroo').children[1].className = "section";
}

if (window.location.pathname.includes("pingry"))
{
    document.getElementById('navbaroo').children[2].className = "section";
}

if (window.location.pathname.includes("professional"))
{
    document.getElementById('navbaroo').children[3].className = "section";
}

if (window.location.pathname.includes("about"))
{
    document.getElementById('navbaroo').children[4].className = "section";
}
