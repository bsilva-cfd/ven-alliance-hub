// ==================================================
// VEN Alliance Hub - Central JavaScript
// ==================================================

console.log("VEN Alliance Hub Loaded - Command Center Ready");

document.addEventListener("DOMContentLoaded", () => {

    // --- Mobile & Touch Dropdown Menu Handler ---
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Em ecrãs móveis/pequenos, abre o menu ao clicar
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const content = this.nextElementSibling;

                // Fecha outros menus abertos
                document.querySelectorAll(".dropdown-content").forEach(drop => {
                    if (drop !== content) {
                        drop.style.display = "none";
                    }
                });

                // Alterna o estado do menu atual
                if (content) {
                    content.style.display = (content.style.display === "block") ? "none" : "block";
                }
            }
        });
    });

    // --- Smooth Scrolling para Links Internos (#) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // --- Sombra Dinâmica no Header ao Fazer Scroll ---
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                header.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.45)";
            } else {
                header.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.35)";
            }
        });
    }

    // --- Animação Suave nos Cartões ---
    const cards = document.querySelectorAll(".card, .home-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-4px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});
