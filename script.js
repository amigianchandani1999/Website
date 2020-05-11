var h = document.createElement("div");
h.id = "headeroo";
h.className = "header";
h.innerHTML = '<a class="header-link" href="V1.html"><img src="Images/header.png" height="100%"/></a>';

var n = document.createElement("div");
n.id = "navbaroo";
n.className = "navbar";
n.innerHTML = '<a href="golf.html">Golf</a><a href="yale.html">Yale</a><a href="pingry.html">Pingry</a><a href="about.html">About</a>'

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

if (window.location.pathname.includes("about"))
{
    document.getElementById('navbaroo').children[3].className = "section";
}
