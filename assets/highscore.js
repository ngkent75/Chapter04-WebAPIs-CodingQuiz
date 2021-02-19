var leaderboard = document.querySelector('.leaderboard')
var scores = [];
var sortScores = scores.sort(function(a,b){return b-a});
console.log(sortScores);

for (let i = 0; i < 5; i++) {

    var li = document.createElement('li');
    li.textContent = sortScores[i];
    leaderboard.appendChild(li);

}