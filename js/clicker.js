const panda = document.getElementById('panda')
const score = document.getElementById('click-count')
let count = localStorage.getItem(score);
score.textContent = `Clicks: ${count}`;

panda.addEventListener("click", () => {
	count++;
	score.textContent = `Clicks: ${count}`;
    localStorage.setItem(score, count);
});