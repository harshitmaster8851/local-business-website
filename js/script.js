document.addEventListener('click', function(e){
const a = e.target.closest('a[href^="#"]');
if(!a) return;
const href = a.getAttribute('href');
if(href === '#') return;
const target = document.querySelector(href);
if(target){
e.preventDefault();
target.scrollIntoView({behavior:'smooth'});
}
});
