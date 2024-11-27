const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const script = document.createElement('script');
            script.src = '/js/loadProducts.js';
            document.body.appendChild(script);

            observer.disconnect();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const allProductsSection = document.getElementById('all-products');
    if (allProductsSection) {
        observer.observe(allProductsSection);
    }
});