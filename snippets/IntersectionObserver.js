initializeObserver = (options = {}) => {
  const observerOptions = {
    root: this.containerRef.current,
    rootMargin: '0px',
    threshold: 1.0,
    ...options
  }
  
  observer = new IntersectionObserver(
    this.observerCallback,
    observerOptions
  );
  observer.observe(this.imageRef.current)
}

observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // Do some work and
      observer.unobserve(entry)
    }
  })
}