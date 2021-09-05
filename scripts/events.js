const events = [
    {
        title: ["VALORANT In-house", "VALORANT «&nbsp;In-house&nbsp;»"],
        image: ["../../images/teams/content/dota2.png", "DOTA 2"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
        time: ["6 AM", "6h00"],
        location: ["Discord", "Discord"],
        contact: "Yell#8888"
    },
    {
        title: ["VALORANT In-house", "VALORANT «&nbsp;In-house&nbsp;»"],
        image: ["../../images/teams/content/dota2.png", "DOTA 2"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
        time: ["6 AM", "6h00"],
        location: ["Discord", "Discord"],
        contact: "Yell#8888"
    },
    {
        title: ["VALORANT In-house", "VALORANT «&nbsp;In-house&nbsp;»"],
        image: ["../../images/teams/content/dota2.png", "DOTA 2"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
        time: ["6 AM", "6h00"],
        location: ["Discord", "Discord"],
        contact: "Yell#8888"
    },
    {
        title: ["VALORANT In-house", "VALORANT «&nbsp;In-house&nbsp;»"],
        image: ["../../images/teams/content/dota2.png", "DOTA 2"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
        time: ["6 AM", "6h00"],
        location: ["Discord", "Discord"],
        contact: "Yell#8888"
    },
    {
        title: ["VALORANT In-house", "VALORANT «&nbsp;In-house&nbsp;»"],
        image: ["../../images/teams/content/dota2.png", "DOTA 2"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
        time: ["6 AM", "6h00"],
        location: ["Discord", "Discord"],
        contact: "Yell#8888"
    }
];

function displayEvents() {
    let isEnglish = window.location.href.includes("/en");
    let onEventPage = window.location.href.includes("/events") || window.location.href.includes("/evenements");

    for (let i = 0; i < events.length; i++) {
        if (!onEventPage && i == 3) break;
        let event = events[i];

        let div1 = document.createElement("div");
        div1.className = "card bg-dark m-2";

        let img = document.createElement("img");
        img.src = event.image[0];
        img.alt = event.image[1];
        img.className = "card-img-top pt-3 px-3";

        let div2 = document.createElement("div");
        div2.className = "card-body";

        let h2 = document.createElement("h2");
        h2.className = "card-title fs-5";
        h2.innerHTML = isEnglish ? event.title[0] : event.title[1];

        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = isEnglish ? event.text[0] : event.text[1];

        let ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";

        let li1 = document.createElement("li");
        li1.className = "list-group-item";
        li1.innerHTML = isEnglish ? event.date[0] : event.date[1];

        let span1 = document.createElement("span");
        span1.className = "fw-bold";
        span1.innerHTML = isEnglish ? "Date: " : "Date&nbsp;: ";
        li1.prepend(span1);

        let li2 = document.createElement("li");
        li2.className = "list-group-item";
        li2.innerHTML = isEnglish ? event.time[0] : event.time[1];

        let span2 = document.createElement("span");
        span2.className = "fw-bold";
        span2.innerHTML = isEnglish ? "Time: " : "Heure&nbsp;: ";
        li2.prepend(span2);

        let li3 = document.createElement("li");
        li3.className = "list-group-item";
        li3.innerHTML = isEnglish ? event.location[0] : event.location[1];

        let span3 = document.createElement("span");
        span3.className = "fw-bold";
        span3.innerHTML = isEnglish ? "Location: " : "Lieu&nbsp;: ";
        li3.prepend(span3);

        let li4 = document.createElement("li");
        li4.className = "list-group-item";
        li4.innerHTML = event.contact;

        let span4 = document.createElement("span");
        span4.className = "fw-bold";
        span4.innerHTML = isEnglish ? "Contact: " : "Contact&nbsp;: ";
        li4.prepend(span4);

        ul.append(li1, li2, li3, li4);
        div2.append(h2, p);
        div1.append(img, div2, ul);
        document.getElementById("events").appendChild(div1);
    }
}

const info = document.getElementById("information");
const btn = document.getElementById("information-button");

btn.onclick = function () {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
};

window.addEventListener('click', function (e) {
    if (!info.contains(e.target) && !btn.contains(e.target)) {
        info.style.display = "none";
    }
});