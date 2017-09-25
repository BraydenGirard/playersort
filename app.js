let players = require("./data.json");
players.sort(function(a, b){return 0.5 - Math.random()});
players.sort(sortPlayers);
let whiteTeam = [];
let blackTeam = [];

for(var i=0; i<players.length; i++) {

    if(whiteTeam.length === 0 && blackTeam.length === 0) {
        
        whiteTeam.push(players[i]);
    }
    else {
        if(calculateWeight(whiteTeam) > calculateWeight(blackTeam)) {
            blackTeam.push(players[i]);
            
        }
        else {
            whiteTeam.push(players[i]);
        }
    }
}

whiteTeam.sort(function(a, b){return 0.5 - Math.random()});
blackTeam.sort(function(a, b){return 0.5 - Math.random()});

console.log("============ WHITE TEAM ============");
for(var i=0; i<whiteTeam.length; i++) {
    console.log(whiteTeam[i].name);
}

console.log("============ BLACK TEAM ============");
for(var i=0; i<blackTeam.length; i++) {
    console.log(blackTeam[i].name);
}

function calculateWeight(team) {
    let weight = 0;
    for(var i=0; i<team.length; i++) {
        weight = team[i].weight + weight;
    }
    return weight;
}

function sortPlayers(a,b) {
    if (a.weight > b.weight)
        return -1;
    if (a.weight < b.weight)
        return 1;
    return 0;
}