const getPositions = (element, reverse) => {
    const rect = element.getBoundingClientRect()

    const small = {
        height: rect.height + 'px',
        width: rect.width + 'px',
        top: rect.top + document.body.scrollTop + 'px',
        left: rect.left + 'px'
    }

    const big = {
        width: '100vw',
        height: '100vh',
        left: 0,
        top: 0
    }

    const before = reverse ? big : small
    const after = reverse ? small : big

    return { before, after }
}

const expandElement = (element, reverse, callback) => {
    document.body.classList.add('scroll-lock')

    const clonedElement = element.cloneNode()

    let { before, after } = getPositions(element, reverse)

    clonedElement.classList.add('is-full-size-object')
    clonedElement.style.width = before.width
    clonedElement.style.position = 'fixed'
    clonedElement.style.objectFit = 'cover'
    clonedElement.style.height = before.height
    clonedElement.style.top = before.top
    clonedElement.style.left = before.left
    clonedElement.style.transition = 'all .5s ease-in-out'
    document.body.appendChild(clonedElement)

    setTimeout(() => {
        document.body.classList.remove('hash-in')

        clonedElement.addEventListener('transitionend', () => {
            if (callback) callback()

            setTimeout(() => {
                document.body.classList.remove('scroll-lock')
                if (reverse) clonedElement.remove()
            }, 200)
        }, { once: true })

        let { before, after } = getPositions(element, reverse)
        
        clonedElement.style.width = after.width
        clonedElement.style.height = after.height
        clonedElement.style.top = after.top
        clonedElement.style.left = after.left
    }, 10)
}

export const fullSizeOnClick = () => {
    document.body.addEventListener('click', (event) => {
        const items = [
            ...event.target.querySelectorAll('.full-size-on-click'),
            event.target.classList.contains('full-size-on-click') ? event.target : null
        ].filter(Boolean)

        if (items.length === 1) {
            if (document.querySelector('.is-full-size-object')) return
            
            event.preventDefault()
            const element = items[0]

            expandElement(element, false, () => {
                event.target.click()
            })
        }
    })

    const metaClose = document.querySelector('.meta-close')

    if (metaClose) {
        const exit = () => {
            document.body.classList.add('scroll-lock')
            document.body.classList.add('transition-out')

            document.body.addEventListener('animationend', (event) => {
                location = `/#exit:${location.pathname}`
            })
        }

        metaClose.addEventListener('click', (event) => {
            event.preventDefault()
            exit()

        }, { once: true })

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                exit()
            }
        });
        
    }

    if (location.hash.includes('exit:')) {
        const cleanedExitUrl = location.hash.substring(7, location.hash.length - 1)
        const element = document.querySelector(`[href="${cleanedExitUrl}"]`)
        document.body.classList.remove('transition-in')

        if (!element) return

        document.documentElement.style = "scroll-behavior: auto";

        document.documentElement.scrollTop = element.getBoundingClientRect().top

        const resizable = element.querySelector('.full-size-on-click')
        expandElement(resizable, true)
        history.pushState('', '', '/')    
    }
}