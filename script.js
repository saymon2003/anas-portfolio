/* ================================
   SMOOTH SCROLLING FOR NAV LINKS
================================ */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


/* ================================
   SCROLL FADE-IN ANIMATION
================================ */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll("section, .card, .skill-box").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* ================================
   PROJECT DETAILS (MODAL DATA)
================================ */
const projectDetails = {
    1: {
        title: "Traveler App",
        description:
            "A full C# Blazor CRUD application where users manage travel plans, destinations, hotels, and budgets. Includes validation, SQL Server database, and responsive UI.",
        github: "https://github.com/YOUR_GITHUB/traveler-app"
    },
    2: {
        title: "Pokédex App",
        description:
            "JavaScript application connected to the PokéAPI with real-time search, category filters, dynamic cards, and animations.",
        github: "https://github.com/YOUR_GITHUB/pokedex-app"
    },
    3: {
        title: "Budgeting App (UI/UX)",
        description:
            "A complete Figma UI/UX budgeting app featuring onboarding screens, balance tracking, saving goals, transactions, and a component library.",
        github: "https://github.com/YOUR_GITHUB/budget-app"
    },
    4: {
        title: "SaveUp – Budget App (UI/UX)",
        description:
            "High-fidelity mobile budgeting design with progress bars, income/expense actions, transaction history, smooth layout, and reusable Figma components.",
        github: "https://github.com/YOUR_GITHUB/saveup-uiux"
    }
};


/* ================================
   MODAL LOGIC
================================ */
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalGithub = document.getElementById("modal-github");
const closeBtn = document.querySelector(".close");

// OPEN MODAL
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.project;
        const project = projectDetails[id];

        modalTitle.textContent = project.title;
        modalDesc.textContent = project.description;
        modalGithub.href = project.github;

        modal.style.opacity = "0";
        modal.style.display = "block";

        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    });
});

// CLOSE MODAL
function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => (modal.style.display = "none"), 200);
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});
