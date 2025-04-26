// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project category filtering
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Initialize Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Initialize Bootstrap popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

// Add animation to skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Animate skill bars when they come into view
const skillSection = document.querySelector('.skills-section');
if (skillSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillSection);
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background change on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            let lastScrollTop = 0;
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                
                if (scrollTop > 50) {
                    navbar.style.backgroundColor = '#ffffff';
                    navbar.style.boxShadow = 'none';
                } else {
                    navbar.style.backgroundColor = 'transparent';
                    navbar.style.boxShadow = 'none';
                }
                
                if (scrollTop > lastScrollTop) {
                    navbar.style.transform = 'translateY(-100px)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
            });
        }

        // Animate progress bars on scroll
        const progressBars = document.querySelectorAll('.progress-bar');
        const animateProgressBars = () => {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };

        // Intersection Observer for animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    if (entry.target.classList.contains('progress-bar')) {
                        animateProgressBars();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and elements that need animation
        document.querySelectorAll('.section-title, .skill-category, .timeline-item, .publication-card, .project-card, .contact-form').forEach(el => {
            observer.observe(el);
        });

        // Add current year to footer
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.innerHTML = `&copy; ${new Date().getFullYear()} Dr. Pradeepika Kaushik. All rights reserved.`;
        }

        // Museum data
        const museumData = {
            'Rijksmuseum': {
                location: 'Amsterdam',
                description: 'The Netherlands\' national museum dedicated to arts and history, housing masterpieces from the Dutch Golden Age.',
                highlights: ['The Night Watch by Rembrandt', 'The Milkmaid by Vermeer', 'Self-portrait by Van Gogh', 'The Merry Family by Jan Steen'],
                hours: '9:00 - 17:00 daily',
                admission: '€20 (adults)',
                address: 'Museumstraat 1, Amsterdam'
            },
            'Van Gogh Museum': {
                location: 'Amsterdam',
                description: 'Home to the largest collection of Vincent van Gogh\'s works, including paintings, drawings, and personal letters.',
                highlights: ['Sunflowers series', 'The Bedroom', 'Almond Blossoms', 'Van Gogh\'s letters'],
                hours: '9:00 - 17:00 daily',
                admission: '€20 (adults)',
                address: 'Museumplein 6, Amsterdam'
            },
            'Stedelijk Museum': {
                location: 'Amsterdam',
                description: 'The Netherlands\' premier museum for modern and contemporary art and design.',
                highlights: ['Mondrian collection', 'Karel Appel works', 'Modern art exhibitions', 'Design collection'],
                hours: '10:00 - 18:00 daily',
                admission: '€18.50 (adults)',
                address: 'Museumplein 10, Amsterdam'
            },
            'Mauritshuis': {
                location: 'The Hague',
                description: 'A royal museum housing the best of Dutch Golden Age paintings in a 17th-century palace.',
                highlights: ['Girl with a Pearl Earring by Vermeer', 'The Anatomy Lesson by Rembrandt', 'The Goldfinch by Fabritius'],
                hours: '10:00 - 18:00 daily',
                admission: '€17.50 (adults)',
                address: 'Plein 29, The Hague'
            },
            'Micropia': {
                location: 'Amsterdam',
                description: 'The world\'s first museum dedicated to microbes, making the invisible world visible.',
                highlights: ['Microbe exhibits', 'Interactive displays', 'Live cultures', 'Science meets art'],
                hours: '9:00 - 18:00 daily',
                admission: '€16 (adults)',
                address: 'Plantage Kerklaan 38-40, Amsterdam'
            },
            'Museum of the Mind': {
                location: 'Haarlem',
                description: 'A unique museum exploring the human mind through art and history.',
                highlights: ['Mental health art', 'Historical exhibits', 'Interactive installations', 'Educational programs'],
                hours: '10:00 - 17:00 daily',
                admission: '€12.50 (adults)',
                address: 'Schotersingel 2, Haarlem'
            },
            'FOAM Photography': {
                location: 'Amsterdam',
                description: 'A leading photography museum presenting all facets of contemporary photography.',
                highlights: ['Contemporary photography', 'Emerging artists', 'International exhibitions', 'Photography workshops'],
                hours: '10:00 - 18:00 daily',
                admission: '€12.50 (adults)',
                address: 'Keizersgracht 609, Amsterdam'
            },
            'Escher in Het Paleis': {
                location: 'The Hague',
                description: 'A museum dedicated to the works of M.C. Escher, featuring his optical illusions and mathematically inspired art.',
                highlights: ['Optical illusions', 'Mathematical art', 'Escher\'s masterpieces', 'Interactive exhibits'],
                hours: '11:00 - 17:00 daily',
                admission: '€11 (adults)',
                address: 'Lange Voorhout 74, The Hague'
            },
            'NEMO Science': {
                location: 'Amsterdam',
                description: 'The largest science museum in the Netherlands, making science and technology accessible to all.',
                highlights: ['Interactive exhibits', 'Science experiments', 'Roof terrace', 'Family-friendly activities'],
                hours: '10:00 - 17:30 daily',
                admission: '€17.50 (adults)',
                address: 'Oosterdok 2, Amsterdam'
            },
            'Centraal Museum': {
                location: 'Utrecht',
                description: 'Utrecht\'s main museum featuring art, fashion, and the famous Miffy collection.',
                highlights: ['Miffy Studio', 'Utrecht Caravaggists', 'Modern art', 'Fashion collection'],
                hours: '11:00 - 17:00 daily',
                admission: '€14 (adults)',
                address: 'Agnietenstraat 1, Utrecht'
            },
            'Verzetsmuseum Junior': {
                location: 'Amsterdam',
                description: 'A museum about World War II designed specifically for children, combining history with art.',
                highlights: ['Interactive exhibits', 'Children\'s stories', 'Historical artifacts', 'Educational programs'],
                hours: '10:00 - 17:00 daily',
                admission: '€10 (children), €12 (adults)',
                address: 'Plantage Kerklaan 61, Amsterdam'
            },
            'Amsterdam Light Festival': {
                location: 'Amsterdam',
                description: 'An annual winter festival featuring light art installations along Amsterdam\'s canals.',
                highlights: ['Light art installations', 'Canal route', 'International artists', 'Interactive displays'],
                hours: '17:00 - 23:00 daily',
                admission: '€25 (boat tour)',
                address: 'Various locations in Amsterdam'
            }
        };

        // Function to open museum modal
        window.openMuseumModal = function(museumName) {
            const modal = document.getElementById('museumModal');
            const data = museumData[museumName];
            
            if (!data) return;
            
            document.getElementById('modalMuseumName').textContent = museumName;
            document.getElementById('modalMuseumLocation').textContent = data.location;
            document.getElementById('modalMuseumDescription').textContent = data.description;
            
            const highlightsList = document.getElementById('modalMuseumHighlights');
            highlightsList.innerHTML = '';
            data.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsList.appendChild(li);
            });
            
            document.getElementById('modalMuseumHours').textContent = data.hours;
            document.getElementById('modalMuseumAdmission').textContent = data.admission;
            document.getElementById('modalMuseumAddress').textContent = data.address;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        // Function to close museum modal
        window.closeMuseumModal = function() {
            const modal = document.getElementById('museumModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('museumModal');
            if (event.target == modal) {
                closeMuseumModal();
            }
        };

        // Add click event to all museum items
        document.querySelectorAll('.museum-item').forEach(item => {
            item.addEventListener('click', function() {
                const museumName = this.querySelector('h4').textContent;
                openMuseumModal(museumName);
            });
        });
    } catch (error) {
        console.error('Error initializing scripts:', error);
    }
}); 