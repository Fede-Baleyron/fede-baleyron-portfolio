import './styles.scss'
const $home_section = document.querySelector('#inicio')
const $about_section = document.querySelector('#sobre-mi')
const $techs_section = document.querySelector('#tecnologias')
const $projects_section = document.querySelector('#proyectos')
const $navItems = {
  $home_item: document.querySelector('.nav-item-home'),
  $about_item: document.querySelector('.nav-item-about'),
  $techs_item: document.querySelector('.nav-item-technologies'),
  $projects_item: document.querySelector('.nav-item-projects')
}
const $page_sections = [$home_section, $about_section, $techs_section, $projects_section]
const observeSections = (entries) => {
  let targetNavID
  entries.forEach(entry => {
    targetNavID = entry.target.dataset.navid
    if(entry.isIntersecting && !$navItems[targetNavID].classList.contains('nav-item-focus')) {
      $navItems[targetNavID].classList.add('nav-item-focus')
    }
    if(!entry.isIntersecting && $navItems[targetNavID].classList.contains('nav-item-focus')) {
      $navItems[targetNavID].classList.remove('nav-item-focus')
    }
  })
}
const sectionsObserver = new IntersectionObserver(observeSections, {
  root: null,
  rootMargin: '0px',
  threshold: 0.36
})
$page_sections.forEach($section => sectionsObserver.observe($section))
