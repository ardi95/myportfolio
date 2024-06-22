export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('observe-animate', {
      mounted(el, binding) {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('animate__animated', binding.value)
              observer.unobserve(el)
            }
          })
        }, options)
  
        observer.observe(el)
      }
    })
  })
  