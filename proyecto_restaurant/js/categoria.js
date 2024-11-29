function filterMenu(category) {
  const items = document.querySelectorAll('.category');
  items.forEach(item => {
      if (category === 'todos' || item.classList.contains(category)) {
          item.style.display = 'block';  
      } else {
          item.style.display = 'none';  
      }
  });
}
