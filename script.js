document.addEventListener('DOMContentLoaded', () => {
    // Shared Components Logic
    const navHTML = `
    <nav>
        <div class="logo"><a href="index.html"><img src="logo.png" alt="NewTech Kraków" style="height: 40px; vertical-align: middle;"></a></div>
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li><a href="index.html">Start</a></li>
            <li><a href="about.html">Galeria</a></li>
            <li><a href="curriculum.html">Kierunki</a></li>
            <li><a href="team.html">Drużyna 9155</a></li>
            <li><a href="contact.html">Kontakt</a></li>
        </ul>
    </nav>
    `;

    const footerHTML = `
    <footer>
        <div class="footer-socials">
            <a href="#" class="social-link" title="Facebook" onclick="event.preventDefault();var w=window.open('about:blank','_blank');w.document.write('<meta http-equiv=\\'refresh\\' content=\\'0;url=https://www.facebook.com/people/Technikum-New-Technology/100090300982602/\\'>');w.document.close();">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="social-link" title="TikTok" onclick="event.preventDefault();var w=window.open('about:blank','_blank');w.document.write('<meta http-equiv=\\'refresh\\' content=\\'0;url=https://www.tiktok.com/@technikum.new.technology\\'>');w.document.close();">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.51V6.77a4.83 4.83 0 0 1-1-.08z"/></svg>
            </a>
            <a href="#" class="social-link" title="Instagram" onclick="event.preventDefault();var w=window.open('about:blank','_blank');w.document.write('<meta http-equiv=\\'refresh\\' content=\\'0;url=https://www.instagram.com/new_tech9155/\\'>');w.document.close();">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
        </div>
        <p>&copy; 2026 Technikum New Technology Kraków. Wszelkie prawa zastrzeżone.</p>
    </footer>
    `;

    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // Set active class based on current URL
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const kierunkiSubpages = ['technik-programista.html', 'technik-robotyk.html'];
        const navLinks = navPlaceholder.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
            // Highlight "Kierunki" when on a subpage
            if (href === 'curriculum.html' && kierunkiSubpages.includes(currentPage)) {
                link.classList.add('active');
            }
        });

        // Hamburger toggle
        const hamburger = document.getElementById('hamburger');
        const navUl = navPlaceholder.querySelector('nav ul');

        if (hamburger && navUl) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navUl.classList.toggle('show');
            });

            // Close menu when a link is clicked
            navUl.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navUl.classList.remove('show');
                });
            });
        }
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    console.log("NewTech 9155 Website Loaded");

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler (visual only)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Wysłano!';
            btn.style.background = 'var(--neon-blue)';
            btn.style.color = 'black';

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = 'transparent';
                btn.style.color = 'var(--neon-blue)';
                form.reset();
            }, 3000);
        });
    }


    // Ambient lights effect for recruitment button
    const rekrutacjaBtn = document.getElementById('rekrutacja-btn');
    if (rekrutacjaBtn) {
        let miniBlobs = [];

        rekrutacjaBtn.addEventListener('mouseenter', () => {
            // Create 25 random blobs for a denser effect
            for (let i = 0; i < 25; i++) {
                const blob = document.createElement('div');
                blob.classList.add('blob-mini');

                // Random position across the screen
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;

                // Random color between Neon Blue and Purple
                // Blue: hue 180-200, Purple: hue 270-290
                // We'll interpolate between cyan/blue (180deg) and purple (280deg)
                const hue = 180 + Math.random() * 100;
                blob.style.background = `hsla(${hue}, 100%, 50%, 0.4)`;

                blob.style.left = `${x}px`;
                blob.style.top = `${y}px`;

                // Random animation delay so they don't move in sync
                blob.style.animationDelay = `-${Math.random() * 5}s`;

                document.body.appendChild(blob);
                miniBlobs.push(blob);

                // Trigger reflow for transition
                void blob.offsetWidth;

                blob.style.opacity = '0.35'; // Slightly more opaque
            }
        });

        rekrutacjaBtn.addEventListener('mouseleave', () => {
            miniBlobs.forEach(blob => {
                blob.style.opacity = '0';
                setTimeout(() => {
                    if (blob.parentNode) {
                        blob.parentNode.removeChild(blob);
                    }
                }, 800); // Wait for transition to finish
            });
            miniBlobs = [];
        });
    }

    // ========== GALLERY FILTERS ==========
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                // First: fade out items that should hide
                galleryItems.forEach(item => {
                    const shouldShow = filter === 'all' || item.dataset.category === filter;
                    if (!shouldShow && !item.classList.contains('hidden')) {
                        item.style.opacity = '0';
                    }
                });

                // After fade-out, toggle visibility and fade in new items
                setTimeout(() => {
                    galleryItems.forEach(item => {
                        const shouldShow = filter === 'all' || item.dataset.category === filter;
                        if (shouldShow) {
                            item.classList.remove('hidden');
                            item.style.opacity = '';
                        } else {
                            item.classList.add('hidden');
                            item.style.opacity = '';
                        }
                    });
                }, 300);
            });
        });
    }

    // ========== LIGHTBOX ==========
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    if (lightbox && galleryItems.length > 0) {
        let currentIndex = 0;

        function getVisibleItems() {
            return [...document.querySelectorAll('.gallery-item:not(.hidden)')];
        }

        function openLightbox(index, animate = false) {
            const visible = getVisibleItems();
            if (index < 0 || index >= visible.length) return;
            currentIndex = index;
            const item = visible[index];
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-overlay span');

            const doSwap = () => {
                lightboxImg.src = img.src.replace(/\/\d+\/\d+$/, '/1200/800');
                lightboxImg.alt = img.alt;
                lightboxCaption.textContent = caption ? caption.textContent : '';
                // Fade in
                requestAnimationFrame(() => {
                    lightboxImg.classList.remove('fading');
                });
            };

            if (animate) {
                // Fade out first, then swap
                lightboxImg.classList.add('fading');
                setTimeout(doSwap, 300);
            } else {
                doSwap();
            }

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        function navigateLightbox(direction) {
            const visible = getVisibleItems();
            currentIndex = (currentIndex + direction + visible.length) % visible.length;
            openLightbox(currentIndex, true);
        }

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const visible = getVisibleItems();
                const index = visible.indexOf(item);
                if (index !== -1) openLightbox(index);
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
        lightboxNext.addEventListener('click', () => navigateLightbox(1));

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        });
    }
});
