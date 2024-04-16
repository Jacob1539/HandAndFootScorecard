var team1Bonus = 0;
var team2Bonus = 0;
var team1Score = 0;
var team2Score = 0;

/**
* To be called after the homepage is loaded. This function will update/load all essential elements onto the homepage.
*/
function homepageLoaded() {
    team1Score = sessionStorage.getItem("team1ScoresessionStorage");
    team2Score = sessionStorage.getItem("team2ScoresessionStorage");
    if (team1Score == null || team2Score == null) {
        team1Score = 0;
        team2Score = 0;
    }
    team1Score = parseFloat(team1Score);
    team2Score = parseFloat(team2Score);
    document.getElementById("t1Score").innerHTML = team1Score;
    document.getElementById("t2Score").innerHTML = team2Score;
}

/**
* Assigns the correct value to a team's bonus.  This function should be called after each click of a bonus option.
* @param teamNum a number, 1 or 2, corresponding to which team's score is being calculated.
* @param bonusAmount the score to be added as a result of the bonus.
*/
function setBonus(teamNum, bonusAmount) {
    if (teamNum == 1) {
        team1Bonus = bonusAmount;
    } else {
        team2Bonus = bonusAmount;
    }
}

/**
* Calculates and updates the score of a team.
* @param teamNum a number, 1 or 2, corresponding to which team's score is being calculated.
*/
function add(teamNum) { 
    //Set currentScore based on incoming value & bonus
    var currentScore = 0;
    if (teamNum == 1) {
        currentScore = team1Score + team1Bonus;
        team1Bonus = 0;
    } else if (teamNum == 2) {
        currentScore = team2Score + team2Bonus;
        team2Bonus = 0;
    } else {
        return;
    }
    //Load elements from webpage into variables
    var redCanastas = parseFloat(document.getElementById("t" + teamNum + "Red").value);
    var blackCanastas = parseFloat(document.getElementById("t" + teamNum + "Black").value);
    var cards = parseFloat(document.getElementById("t" + teamNum + "Cards").value);
    var negative = Math.abs(parseFloat(document.getElementById("t" + teamNum + "Negative").value));
    
    //validate data
    if (isNaN(redCanastas)) {
        redCanastas=0
    }
    if (isNaN(blackCanastas)) {
        blackCanastas=0
    }
    if (isNaN(cards)) {
        cards=0
    }
    if (isNaN(negative)) {
        negative=0
    }
    if (redCanastas > 499) {
        redCanastas = redCanastas / 500;
    }
    if (blackCanastas > 299) {
        blackCanastas = blackCanastas / 300;
    }
    if (redCanastas<0 || blackCanastas<0 || cards<0) {
    alert("Only the negative field may contain a negative number.");
    return;
    }

    //Calculation & updating
    currentScore = currentScore + cards + (500*redCanastas) + (300*blackCanastas) - negative;
    if (teamNum == 1) {
        team1Score = currentScore;
        document.getElementById("t1Score").innerHTML = team1Score;
        document.getElementById("t1Reset").click();
        bonus1 = 0;
        sessionStorage.setItem("team1ScoresessionStorage", team1Score);
    } else if (teamNum == 2) {
        team2Score = currentScore;
        document.getElementById("t2Score").innerHTML = team2Score;
        document.getElementById("t2Reset").click();
        bonus2 = 0;
        sessionStorage.setItem("team2ScoresessionStorage", team2Score);
    }
}

/**
* Reset the score of both teams to zero.
*/
function resetScores() {
    sessionStorage.setItem("team1ScoresessionStorage", 0);
    sessionStorage.setItem("team2ScoresessionStorage", 0);
    homepageLoaded();
    document.getElementById("t1Reset").click();
    document.getElementById("t2Reset").click();
}
