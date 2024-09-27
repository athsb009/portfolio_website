function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

const projectCards = document.querySelectorAll('.project-card');
const totalProjects = projectCards.length;
const cardsToShow = 3;
let currentIndex = 0;

function showProjects(index) {
    projectCards.forEach((card, i) => {
        if (i >= index && i < index + cardsToShow) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

showProjects(currentIndex);

document.querySelectorAll('.know-more').forEach(button => {
  button.addEventListener('click', function() {
      const projectCard = this.closest('.project-card');
      const description = projectCard.getAttribute('data-description');
      document.getElementById('project-description').innerText = description;
      popup.style.display = 'block';
      popup.classList.remove('zoomOut');
      popup.classList.add('zoomIn');
  });
});

// Close popup with zoom out effect
closeBtn.addEventListener('click', function() {
  popup.classList.remove('zoomIn');
  popup.classList.add('zoomOut');
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Delay to allow animation to complete
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    showProjects(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentIndex < totalProjects - cardsToShow) {
        currentIndex++;
    }
    showProjects(currentIndex);
});

