import { music } from './object.js'

//dom
let container = document.getElementById('container')

function getMusic() {
	for (let i = 0; i < music.length; i++) {
		let currentMusic = music[i]
		renderAudioHtml(currentMusic)
	}
}
getMusic()

function renderAudioHtml(render) {
	container.innerHTML += `
        <h3>${render.title}</h3>
        <audio controls class="audiplay" src="${render.audio}"></audio>
    `
}
