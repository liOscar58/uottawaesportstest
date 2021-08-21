let people = { // keys are unique IDs
    "0": {
        name: "Steven Li",
        pts: 1100
    },
    "1": {
        name: "Lorem Ipsum",
        pts: 190
    },
    "2": {
        name: "Lorem Ipsum",
        pts: 80
    },
    "3": {
        name: "Lorem Ipsum",
        pts: 1000
    },
    "4": {
        name: "Lorem Ipsum",
        pts: 195
    },
    "5": {
        name: "Lorem Ipsum",
        pts: -1
    }
}

let sorted = Object.keys(people).sort((a, b) => { return people[b].pts - people[a].pts }); // sorts the keys of the people object and stores them into an array

let pos = 1;
let headerCreated = false;

sorted.forEach(personObj => {
    if (pos <= 3) {
        let div = document.createElement("div");
        div.className = "d-flex mb-4";
        div.className += (pos == 1 ? " bg-gold" : pos == 2 ? " bg-silver" : " bg-bronze")
        let img = document.createElement("img");
        img.src = "../../images/leaderboard/" + (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze") + ".png";
        img.alt = (pos == 1 ? "Gold badge" : pos == 2 ? "Silver badge" : "Bronze badge");
        img.className = "p-1";
        img.style.height = "5rem";
        img.style.width = "5rem";
        div.appendChild(img);
        let name = document.createElement("p");
        name.className = "fs-3 d-flex align-self-center me-auto mb-0 ms-1";
        name.innerHTML = ('<span class="fw-bold">' + pos + ".</span>&nbsp;" + people[personObj].name);
        div.appendChild(name);
        let points = document.createElement("p");
        points.className = "fs-3 d-flex align-self-center mb-0 me-2";
        points.innerHTML = people[personObj].pts + " points";
        div.appendChild(points);
        document.getElementById("top3").appendChild(div);
        pos++;
    } else {
        if (!headerCreated) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");

            th.scope = "col";
            th.innerHTML = "Position";
            th.className = "text-center"
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);
            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "Name";
            th.className = "w-50";
            tr.appendChild(th);
            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "Points";
            th.className = "text-center";
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);
            document.getElementById("table-head").appendChild(tr);
            headerCreated = true;
        }
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");
        
        th.innerHTML = pos++;
        th.scope = "row";
        th.className = "text-center";
        tr.appendChild(th);
        td = document.createElement("td");
        td.innerHTML = people[personObj].name;;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = people[personObj].pts;
        td.className = "text-end";
        tr.appendChild(td);
        document.getElementById("table-body").appendChild(tr);
    }
});