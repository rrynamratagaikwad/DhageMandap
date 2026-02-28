// Init AOS
AOS.init({ duration: 800, once: true });

// Navbar Scroll Color Change
window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('bg-white', 'shadow-md', 'py-2');
        nav.classList.remove('bg-white/90', 'py-4');
    } else {
        nav.classList.remove('bg-white', 'shadow-md', 'py-2');
        nav.classList.add('bg-white/90', 'py-4');
    }
};
// Init AOS
AOS.init({ duration: 800, once: true });

// Navbar Scroll Color Change
window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('bg-white', 'shadow-md', 'py-2');
        nav.classList.remove('bg-white/90', 'py-4');
    } else {
        nav.classList.remove('bg-white', 'shadow-md', 'py-2');
        nav.classList.add('bg-white/90', 'py-4');
    }
};

// Gallery Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Gallery Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});