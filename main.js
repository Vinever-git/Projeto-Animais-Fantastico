function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo')

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativeClass = 'ativo'

    if(accordionList.length) {
        accordionList[0].classList.add(ativeClass);
        accordionList[0].nextElementSibling.classList.add(ativeClass)

        function activeAccordion() {
            this.classList.toggle(ativeClass)
            this.nextElementSibling.classList.toggle(ativeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}
initAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)

        section.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
})
}
initScrollSuave();

const sections = document.querySelectorAll('.js-scroll')

function initAnimacaoScroll () {
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll () {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible) {
                    section.classList.add('ativo')
                    
                }
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll)
    }
}
initAnimacaoScroll();

function backToTop () {
    const button = document.querySelector('.buttonInit a')
    if(button){
        function homePage(event){
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)
            
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        button.addEventListener('click', homePage);
    }
}
backToTop();




