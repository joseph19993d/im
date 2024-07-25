document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item a');
  
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        navItems.forEach(el => {
          if (el !== item) {
            el.classList.add('inactive');
          }
        });
        item.classList.add('active');
      });
  
      item.addEventListener('mouseout', () => {
        navItems.forEach(el => {
          el.classList.remove('inactive', 'active');
        });
      });
    });
  });