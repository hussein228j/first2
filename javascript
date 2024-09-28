let clickCount = 0;

document.getElementById('click-button').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-count').innerHTML = `Clicks: ${clickCount}`;
});
