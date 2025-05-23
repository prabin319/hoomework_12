function setStyle(styleName) {
  const container = document.getElementById('card-container');
  container.className = styleName;
  
  // Update active button
  document.querySelectorAll('.buttons button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}

function resetCardStyles() {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active-card');
  });
}

// Highlight a card when clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't toggle if a link was clicked
    if (!e.target.closest('a')) {
      card.classList.toggle('active-card');
    }
  });
});

// Initialize with style1 active
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.buttons button').classList.add('active');
});