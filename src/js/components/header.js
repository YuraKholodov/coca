export function headerScroll() {
  const body = document.body;
  const header = body.querySelector('.header');
  const headerHeight = header.scrollHeight;

  const scrollPosition = () =>
    document.documentElement.scrollTop || window.pageYOffset;
    
  const containHeaderHidden = () => header.classList.contains('header--hidden');
  
  body.style.paddingTop = headerHeight + 'px';

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHeaderHidden()) {
      header.classList.add('header--hidden');
    } else if (scrollPosition() < lastScroll && containHeaderHidden()) {
      header.classList.remove('header--hidden');
    }
    lastScroll = scrollPosition();
  });
}
