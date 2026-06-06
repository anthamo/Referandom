// SPDX-License-Identifier: MIT
// ---- Éléments ----
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const categoryBadge = document.getElementById("category-badge");
const passer = document.getElementById("passer");
const passHint = document.getElementById("pass-hint");
const boutonChance = document.getElementById("boutonChance");

// Libellés affichés dans le badge (la donnée garde "Ton manager")
const DISPLAY = {
    "Carrière": "Carrière",
    "Équilibre pro/perso": "Équilibre pro/perso",
    "Ton manager": "Ton référent",
    "Reconnaissance": "Reconnaissance"
};

let questions = [];

// État de session du bouton Passer
let mode = null;          // "category" | "lucky"
let currentCategory = null;
let currentText = null;
let passUsed = false;

// ---- Chargement CSV (PapaParse) ----
function chargerQuestions() {
    Papa.parse("questions.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        delimiter: ";",
        skipEmptyLines: true,
        complete: function (results) {
            questions = results.data.filter(q => q && q.Question);
        },
        error: function (error) {
            console.error("Erreur lors du chargement des questions:", error);
        }
    });
}

// ---- Tirage ----
function tirer(pool, exclure) {
    let candidats = pool;
    if (candidats.length > 1 && exclure) {
        candidats = candidats.filter(q => q.Question !== exclure);
    }
    return candidats[Math.floor(Math.random() * candidats.length)];
}

function afficher(q) {
    if (!q) {
        questionElement.textContent = "Aucune question disponible pour cette catégorie.";
        categoryBadge.textContent = "";
        questionContainer.classList.add("is-visible");
        return;
    }
    currentText = q.Question;
    questionElement.textContent = q.Question;
    categoryBadge.textContent = DISPLAY[q.Catégorie] || q.Catégorie;
    questionContainer.classList.add("is-visible");
}

// Réarme l'esquive à chaque nouveau clic sur un bouton
function reinitEsquive() {
    passUsed = false;
    passer.disabled = false;
    passHint.textContent = "1 esquive disponible";
}

function afficherQuestionAleatoire(categorie) {
    mode = "category";
    currentCategory = categorie;
    setActiveButton(categorie);
    const pool = questions.filter(q => q.Catégorie === categorie && q.Afficher);
    afficher(tirer(pool));
    reinitEsquive();
}

function afficherQuestionAleatoireToutesCategories() {
    mode = "lucky";
    currentCategory = null;
    setActiveButton(null);
    const pool = questions.filter(q => q.Afficher);
    afficher(tirer(pool));
    reinitEsquive();
}

// Allume le bouton de catégorie correspondant (rien en mode "chance")
function setActiveButton(categorie) {
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.toggle("is-active", btn.dataset.cat === categorie);
    });
}

// ---- Passer (1 esquive par session de bouton) ----
function passerQuestion() {
    if (passUsed) return;
    // Lucky -> toutes catégories ; sinon -> même catégorie que la question affichée
    const pool = mode === "lucky"
        ? questions.filter(q => q.Afficher)
        : questions.filter(q => q.Catégorie === currentCategory && q.Afficher);
    afficher(tirer(pool, currentText));
    passUsed = true;
    passer.disabled = true;
    passHint.textContent = "Plus d'esquive, à toi de jouer !";
}

// ---- Init ----
chargerQuestions();

document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => afficherQuestionAleatoire(btn.dataset.cat));
});
boutonChance.addEventListener("click", afficherQuestionAleatoireToutesCategories);
passer.addEventListener("click", passerQuestion);

// ---- Toggle thème (dark ⇄ light) — pas de localStorage (conforme embed Notion) ----
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    root.setAttribute("data-theme", root.getAttribute("data-theme") === "light" ? "dark" : "light");
});
