document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Função para atualizar o slider
    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Função para ir para um slide específico
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    // Função para próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    // Função para slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play (opcional - remova se não quiser)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pausa auto-play quando o mouse está sobre o slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Inicializa o slider
    updateSlider();
});