const shareBtn = document.getElementById('share-btn');
const socialLinks = document.getElementById('social-links');
const shareArrow = document.querySelector('svg path');

shareBtn.addEventListener('click', () => {
	shareArrow.classList.toggle('open');
	shareBtn.classList.toggle('open');
	socialLinks.classList.toggle('hidden');
});
