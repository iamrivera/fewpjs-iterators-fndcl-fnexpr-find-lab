function superbowlWin(array) {
    let winningYear = array.find(function(object){return object['result'] === "W"})
    if (winningYear) {
        return winningYear.year
    } else {
        return winningYear
    }
}