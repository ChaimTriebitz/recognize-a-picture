'use strict'
var gQuests = []

var gCurrQuestIdx

var elCard = document.querySelector('.card')
var elBtns = document.querySelectorAll('.option')
var elWin = document.querySelector('.win')

function initGame() {
	elWin.style.display = 'none'
	gCurrQuestIdx = 0
	createQuests(4)
	renderQuest()
}
function createQuests(amount) {
	for (var i = 0; i < amount; i++) {
		var quest = {
			id: i + 1,
			opts: [],
			correctOptIndex: 0,
		}
		gQuests.push(quest)
	}
	//1=basketball
	gQuests[0].opts[0] = 'SoccerBall'
	gQuests[0].opts[1] = 'BasketBall'
	gQuests[0].correctOptIndex = 1
	//2=billiardball
	gQuests[1].opts[0] = 'BilliardBall'
	gQuests[1].opts[1] = 'Basketball'
	gQuests[1].correctOptIndex = 0
	//3=bowlingball
	gQuests[2].opts[0] = 'BowlingBall'
	gQuests[2].opts[1] = 'BilliardBall'
	gQuests[2].correctOptIndex = 0
	//4=soccerball
	gQuests[3].opts[0] = 'BasketBall'
	gQuests[3].opts[1] = 'SoccerBall'
	gQuests[3].correctOptIndex = 1
}
console.log(gQuests)
renderQuest()
function renderQuest() {
	var strHTML = ''
	strHTML = `<img src="img/${gCurrQuestIdx + 1}.png" /><h2>ball</h2>`
	elCard.innerHTML = strHTML
	elBtns[0].innerText = gQuests[gCurrQuestIdx].opts[0]
	elBtns[1].innerText = gQuests[gCurrQuestIdx].opts[1]
}

function checkAnswer(optIdx) {
	var quest = gQuests[gCurrQuestIdx]
	var correctOpt = quest.opts[quest.correctOptIndex]
	if (optIdx.innerText === correctOpt) {
		gCurrQuestIdx++
		if (gCurrQuestIdx === gQuests.length) {
			elWin.style.display = 'block'
			return
		}
		renderQuest()
	} else {
		alert('wrong anser!')
	}
}
