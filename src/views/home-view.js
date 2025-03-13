import firstScheduleImg from '../assets/home-schedule-img.png'
import secondScheduleImg from '../assets/home-schedule2-img.png'

export default function loadHome () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
});

  const mainContainer = document.querySelector('.main-content');
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const firstParagraph = document.createElement('p');
  firstParagraph.textContent = 'Create personal projects to manage your time';
  homeContainer.appendChild(firstParagraph);

  const firstImageDiv = document.createElement('div');
  firstImageDiv.classList.add('home-image');
  const firstImage = document.createElement('img');
  firstImage.src = firstScheduleImg;
  firstImage.alt = 'Illustration of people with an organizer';
  firstImageDiv.appendChild(firstImage);
  homeContainer.appendChild(firstImageDiv);

  const secondParagraph = document.createElement('p');
  secondParagraph.textContent = 'Add tasks and monitor their status';
  homeContainer.appendChild(secondParagraph);

  const secondImageDiv = document.createElement('div');
  secondImageDiv.classList.add('home-image');
  const secondImage = document.createElement('img');
  secondImage.src = secondScheduleImg;
  secondImage.alt = 'Illustration of people with an organizer';
  secondImageDiv.appendChild(secondImage);
  homeContainer.appendChild(secondImageDiv);

  const ctaHomeBtn = document.createElement('button');
  ctaHomeBtn.id = 'home-cta';
  ctaHomeBtn.textContent = 'Try for free';
  homeContainer.appendChild(ctaHomeBtn);
  mainContainer.appendChild(homeContainer);
};