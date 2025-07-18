document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.animated-gallery');
    setTimeout(() => {
        gallery.classList.add('loaded');
    }, 200);
});
// Menu toggle functionality (existing)
const shrii17 = document.querySelector('.shrii3');
const shrii18 = document.querySelector('.shrii4');
const shrii19 = document.querySelector('.shrii5');
const shrii20 = document.querySelector('.shrii7');
const shrii21 = document.querySelectorAll('.shrii7 li');

let shrii22 = false;

function shrii23() {
shrii22 = !shrii22;

if (shrii22) {
    // Animate the icons
    gsap.to(shrii18, {
        opacity: 0,
        scale: 0.5,
        rotation: 90,
        duration: 0.6,
        ease: "back.inOut"
    });
    
    gsap.to(shrii19, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.inOut",
        delay: 0.1
    });
    
    // Show menu content
    shrii20.classList.add('show');
    
    // Animate menu links with stagger
    gsap.to(shrii21, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
    });
    
} else {
    // Animate the icons
    gsap.to(shrii19, {
        opacity: 0,
        scale: 0.5,
        rotation: -90,
        duration: 0.6,
        ease: "back.inOut"
    });
    
    gsap.to(shrii18, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.inOut",
        delay: 0.1
    });
    
    // Hide menu content
    shrii20.classList.remove('show');
    
    // Reset menu links
    gsap.to(shrii21, {
        opacity: 0,
        x: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
    });
}
}

shrii17.addEventListener('click', shrii23);

// Add hover effect to menu button
shrii17.addEventListener('mouseenter', () => {
gsap.to(shrii17, {
    scale: 1.1,
    duration: 0.3,
    ease: "power2.out"
});
});

shrii17.addEventListener('mouseleave', () => {
gsap.to(shrii17, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
});
});

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.shrii7 a').forEach(link => {
link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        shrii23();
    }
});
});

// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
// Animate hero elements on page load
gsap.to('.shrii8 h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3
});

gsap.to('.shrii8 p', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
});

gsap.to('.shrii10', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.1,
    delay: 0.7
});

gsap.to('.shrii12', {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 0.9
});

// Floating animation for shapes
gsap.to('.shrii14', {
    y: 20,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to('.shrii15', {
    y: -20,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
});
});


// ABOUT US TORCH SECTION

document.addEventListener('DOMContentLoaded', function() {
    const photographySection = document.getElementById('photographySection');
    const torchOverlay = document.getElementById('torchOverlay');
    const torchImages = photographySection.querySelectorAll('.torch-image');
    
    // Initially hide all images
    gsap.set(torchImages, { opacity: 0 });
    
    // Track mouse movement only within photography section
    photographySection.addEventListener('mousemove', (e) => {
        const rect = photographySection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update torch position relative to section
        torchOverlay.style.setProperty('--x', x + 'px');
        torchOverlay.style.setProperty('--y', y + 'px');
        
        // Show images near cursor
        torchImages.forEach(image => {
            const imgRect = image.getBoundingClientRect();
            const imgCenterX = imgRect.left + imgRect.width/2 - rect.left;
            const imgCenterY = imgRect.top + imgRect.height/2 - rect.top;
            
            const distance = Math.sqrt(
                Math.pow(x - imgCenterX, 2) + 
                Math.pow(y - imgCenterY, 2)
            );
            
            if (distance < 200) {
                gsap.to(image, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                });
            } else {
                gsap.to(image, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.3
                });
            }
        });
    });
    
    // Make responsive adjustments
    function adjustLayout() {
        if (window.innerWidth < 768) {
            // Show all images on mobile
            gsap.to(torchImages, {
                opacity: 1,
                scale: 1,
                duration: 0.5
            });
        }
    }
    
    // Run on load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});

document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Floating label parallax
    gsap.to("#floatingServices", {
        scrollTrigger: {
            trigger: ".services-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: 100,
        ease: "none"
    });
    
    // Section header animation
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from(".section-description", {
        scrollTrigger: {
            trigger: ".section-description",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    // Card animations - now targeting individual services
    gsap.from(".service1", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.1,
        ease: "power3.out"
    });
    
    gsap.from(".service2", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });
    
    gsap.from(".service3", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from(".service4", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
    });
    
    gsap.from(".service5", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
    
    gsap.from(".service6", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });
    
    // Mouse move parallax effect for cards
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            
            const centerX = card.offsetWidth / 2;
            const centerY = card.offsetHeight / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            gsap.to(card.querySelector('.card-image'), {
                x: moveX,
                y: moveY,
                duration: 0.6,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.card-image'), {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
});

  gsap.from(".team1", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.1,
    ease: "power3.out"
});

gsap.from(".team2", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(".team3", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".team4", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
});

// Floating label animation for team section
gsap.to("#floatingTeam", {
    scrollTrigger: {
        trigger: ".team-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    y: 100,
    ease: "none"
});
gsap.from(".package1", {
    scrollTrigger: {
        trigger: ".packages-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.1,
    ease: "power3.out"
});

gsap.from(".package2", {
    scrollTrigger: {
        trigger: ".packages-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(".package3", {
    scrollTrigger: {
        trigger: ".packages-section",
        start: "top 70%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

// Floating label animation for packages section
gsap.to("#floatingPackages", {
    scrollTrigger: {
        trigger: ".packages-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    y: 100,
    ease: "none"
});

// Mobile fallback for flip effect
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const packageCards = document.querySelectorAll('.package-card');
        
        packageCards.forEach(card => {
            card.addEventListener('click', function() {
                const front = this.querySelector('.package-front');
                const back = this.querySelector('.package-back');
                
                if (front.style.display !== 'none') {
                    front.style.display = 'none';
                    back.style.display = 'flex';
                } else {
                    front.style.display = 'block';
                    back.style.display = 'none';
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Get all step elements
        const steps = [
            document.getElementById('step1'),
            document.getElementById('step2'),
            document.getElementById('step3'),
            document.getElementById('step4')
        ];
        
        // Get the SVG path element
        const connectorPath = document.querySelector('.connector-path');
        
        // Calculate path through vacant spaces
        function calculateVacantPath() {
            const points = [];
            const containerRect = document.querySelector('.process-container').getBoundingClientRect();
            
            steps.forEach((step, index) => {
                const numberElement = step.querySelector('.step-number');
                const rect = numberElement.getBoundingClientRect();
                
                // Center point of number
                points.push({
                    x: rect.left + rect.width/2 - containerRect.left,
                    y: rect.top + rect.height/2 - containerRect.top,
                    type: 'number'
                });
                
                // Add midpoint in vacant space if not last step
                if(index < steps.length - 1) {
                    const nextRect = steps[index+1].querySelector('.step-number').getBoundingClientRect();
                    const vacantY = rect.bottom + (nextRect.top - rect.bottom)/2 - containerRect.top;
                    
                    // For even steps (right-aligned), go left first
                    if(index % 2 === 1) {
                        points.push({
                            x: rect.left + rect.width/2 - containerRect.left - 60,
                            y: vacantY,
                            type: 'vacant'
                        });
                    } 
                    // For odd steps (left-aligned), go right first
                    else {
                        points.push({
                            x: rect.left + rect.width/2 - containerRect.left + 60,
                            y: vacantY,
                            type: 'vacant'
                        });
                    }
                }
            });
            
            // Create path through points (only horizontal moves in vacant spaces)
            let pathData = '';
            if(points.length > 0) {
                pathData = `M${points[0].x},${points[0].y}`;
                
                for(let i = 1; i < points.length; i++) {
                    const prev = points[i-1];
                    const curr = points[i];
                    
                    if(prev.type === 'number' && curr.type === 'vacant') {
                        // From number to vacant - vertical then horizontal
                        pathData += ` V${curr.y} H${curr.x}`;
                    } 
                    else if(prev.type === 'vacant' && curr.type === 'number') {
                        // From vacant to number - horizontal then vertical
                        pathData += ` H${curr.x} V${curr.y}`;
                    }
                }
            }
            
            return pathData;
        }
        
        // Set initial path
        connectorPath.setAttribute('d', calculateVacantPath());
        const pathLength = connectorPath.getTotalLength();
        connectorPath.style.strokeDasharray = pathLength;
        connectorPath.style.strokeDashoffset = pathLength;
        
        // Animate the line drawing on scroll
        ScrollTrigger.create({
            trigger: ".process-container",
            start: "top center",
            end: "bottom center",
            onUpdate: (self) => {
                const drawLength = pathLength * self.progress;
                connectorPath.style.strokeDashoffset = pathLength - drawLength;
                
                // Update path if resized while scrolling down
                if(self.direction === 1) {
                    connectorPath.setAttribute('d', calculateVacantPath());
                }
            }
        });
        
        // Recalculate path on resize
        window.addEventListener('resize', () => {
            connectorPath.setAttribute('d', calculateVacantPath());
        });
        
        // Initial animation for steps
        gsap.utils.toArray('.process-step').forEach((step, index) => {
            gsap.from(step, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Floating label animation
        gsap.to("#floatingProcess", {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".process-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Hover effects
        document.querySelectorAll('.process-step').forEach(step => {
            step.addEventListener('mouseenter', () => {
                gsap.to(step.querySelector('.step-image'), {
                    scale: 1.05,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
            
            step.addEventListener('mouseleave', () => {
                gsap.to(step.querySelector('.step-image'), {
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if(typeof gsap !== 'undefined') {
        // Parallax effect for gallery images
        const parallaxImages = document.querySelectorAll('.parallax-img');
        
        parallaxImages.forEach(img => {
            const speed = parseFloat(img.getAttribute('data-speed')) || 0.1;
            const height = img.offsetHeight;
            const wrapperHeight = img.parentElement.offsetHeight;
            const movement = (height - wrapperHeight) * speed;
            
            gsap.to(img, {
                y: -movement,
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
        
        // Floating label animation
        gsap.to("#floatingGallery", {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        
        // Animate gallery rows on enter
        gsap.utils.toArray('.gallery-row').forEach((row, index) => {
            gsap.from(row, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Hover effects
        document.querySelectorAll('.image-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('.parallax-img'), {
                    scale: 1.05,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('.parallax-img'), {
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    if(typeof gsap !== 'undefined') {
        // Testimonial animations
        gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
        
        // Floating label animation
        gsap.to("#floatingTestimonials", {
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".testimonial-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        
        // Footer elements animation
        gsap.from(".footer-container > div", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }
});