const titles = document.getElementsByClassName('team-details-title')
const rosters = document.getElementsByClassName('bfy-team-details')

for (let i = 0; i < rosters.length; ++i) {
    if (rosters[i].innerText.trim('\n') != 'aseila') {
        enemyTeamRoster = rosters[i]
        break ;
    }
}

const enemyTeamPlayersHtml = enemyTeamRoster.getElementsByClassName('player-in-game-name')

const enemyTeamPlayers = Array.from(enemyTeamPlayersHtml).map((param) => {
	let originalValue = param.innerText.trim();
    let splitted = originalValue.split('\n');
    if (splitted.length > 1) {
        return splitted[0];
    }
    return originalValue;
})

const urlParam = enemyTeamPlayers.join('%2c').replaceAll(' ', '+');
const finalUrl = "https://www.op.gg/multisearch/br?summoners=" + urlParam;
window.open(finalUrl)
