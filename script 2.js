// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('.navlinks a, .btn').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});