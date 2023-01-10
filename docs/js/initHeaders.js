export const initHeaders = () => {
    let options = {
        root: null,
        rootMargin: '100px',
        threshold: .5
    }
      
    let observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const stickyTitle = document.querySelector(`[for="#${entry.target.getAttribute('id')}"]`)
    
            if (entry.isIntersecting) {
                stickyTitle.classList.add('visible')
            }
            else {
                stickyTitle.classList.remove('visible')
            }
        }
    }, options) 
    
    let stickyTitles = document.querySelectorAll('.sticky-title');
    for (const stickyTitle of stickyTitles) {
        observer.observe(document.querySelector(stickyTitle.getAttribute('for')))
    }
}
