/* =========================================================
   RARI FAVARO — ECOSSISTEMA DIGITAL
   ARQUIVO PRINCIPAL DE ESTILOS
========================================================= */


/* =========================================================
   1. VARIÁVEIS
========================================================= */

:root {
  --background: #020b13;
  --background-soft: #061827;
  --background-card: rgba(5, 22, 36, 0.88);
  --background-card-strong: rgba(4, 18, 30, 0.96);

  --blue: #0d3853;
  --blue-light: #1d668f;
  --blue-glow: rgba(38, 140, 202, 0.28);

  --gold: #d8a84f;
  --gold-light: #f4d385;
  --gold-dark: #a96f27;
  --gold-glow: rgba(216, 168, 79, 0.25);

  --cream: #fff7e7;
  --white-soft: #f3eee4;
  --gray: #c9c1b5;
  --gray-dark: #857e75;

  --line: rgba(216, 168, 79, 0.34);
  --line-soft: rgba(255, 255, 255, 0.08);

  --shadow:
    0 28px 90px rgba(0, 0, 0, 0.42);

  --shadow-soft:
    0 16px 45px rgba(0, 0, 0, 0.28);

  --radius-small: 14px;
  --radius-medium: 22px;
  --radius-large: 32px;

  --header-height: 82px;
  --mobile-navigation-height: 74px;
}


/* =========================================================
   2. RESET
========================================================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  margin: 0;
  min-height: 100vh;

  overflow-x: hidden;

  color: var(--cream);

  background:
    radial-gradient(
      circle at 84% 7%,
      rgba(20, 84, 124, 0.38),
      transparent 28%
    ),
    radial-gradient(
      circle at 12% 54%,
      rgba(107, 72, 27, 0.12),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #020911 0%,
      #03111d 38%,
      #020b13 100%
    );

  font-family: "Jost", sans-serif;
  font-size: 16px;
  line-height: 1.6;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body.dialog-open {
  overflow: hidden;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
}

main {
  position: relative;
  z-index: 2;
}


/* =========================================================
   3. FUNDO VIVO
========================================================= */

.site-background {
  position: fixed;
  inset: 0;

  z-index: 0;

  overflow: hidden;
  pointer-events: none;
}

.background-light {
  position: absolute;

  display: block;

  border-radius: 50%;
  filter: blur(100px);

  opacity: 0.23;
}

.background-light-one {
  top: 5%;
  right: -160px;

  width: 340px;
  height: 340px;

  background: #1374aa;
}

.background-light-two {
  top: 45%;
  left: -180px;

  width: 300px;
  height: 300px;

  background: #9a692c;

  opacity: 0.1;
}

.background-light-three {
  right: -130px;
  bottom: 5%;

  width: 280px;
  height: 280px;

  background: #205d81;

  opacity: 0.12;
}

.background-stars {
  position: absolute;
  inset: 0;

  opacity: 0.25;

  background-image:
    radial-gradient(
      circle,
      rgba(244, 211, 133, 0.6) 0 1px,
      transparent 1.5px
    );

  background-size: 56px 56px;

  mask-image:
    linear-gradient(
      to bottom,
      #000 0%,
      rgba(0, 0, 0, 0.65) 48%,
      transparent 95%
    );
}


/* =========================================================
   4. ELEMENTOS GERAIS
========================================================= */

.section-eyebrow,
.hero-eyebrow {
  margin-bottom: 12px;

  color: var(--gold);

  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.23em;
  line-height: 1.4;
  text-transform: uppercase;
}

.button {
  width: 100%;
  min-height: 58px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 20px;

  border: 1px solid transparent;
  border-radius: var(--radius-small);

  cursor: pointer;

  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.25;
  text-align: center;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease,
    box-shadow 0.25s ease;
}

.button:active {
  transform: scale(0.98);
}

.button-primary {
  color: #15110a;

  border-color: rgba(255, 232, 170, 0.65);

  background:
    linear-gradient(
      135deg,
      var(--gold-light),
      var(--gold)
    );

  box-shadow:
    0 14px 40px rgba(216, 168, 79, 0.18);
}

.button-primary:hover {
  box-shadow:
    0 18px 48px rgba(216, 168, 79, 0.28);
}

.button-outline {
  color: var(--cream);

  border-color: var(--line);

  background:
    rgba(4, 17, 28, 0.62);

  backdrop-filter: blur(12px);
}

.button-outline:hover {
  border-color: var(--gold-light);

  background:
    rgba(10, 40, 61, 0.72);
}

.text-button,
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 0;

  border: 0;

  color: var(--gold-light);

  background: none;

  cursor: pointer;

  font-size: 0.95rem;
  font-weight: 500;

  transition:
    color 0.25s ease,
    gap 0.25s ease;
}

.text-button:hover,
.card-link:hover {
  gap: 12px;
  color: var(--cream);
}

.content-section {
  width: min(1180px, 100%);

  margin: 0 auto;
  padding: 66px 18px;
}

.section-header {
  margin-bottom: 26px;
}

.section-header h2,
.orientation-section h2,
.aurora-message h2,
.community-section h2,
.about-section h2,
.contact-section h2 {
  margin-bottom: 16px;

  color: var(--cream);

  font-size:
    clamp(
      2.55rem,
      10vw,
      4.7rem
    );

  line-height: 0.96;
}

.section-header > p:last-child {
  max-width: 680px;

  margin-bottom: 0;

  color: var(--gray);

  line-height: 1.75;
}

.section-action {
  margin-top: 26px;
}


/* =========================================================
   5. CABEÇALHO
========================================================= */

.site-header {
  position: sticky;
  top: 0;

  z-index: 90;

  min-height: var(--header-height);

  border-bottom:
    1px solid rgba(216, 168, 79, 0.13);

  background:
    linear-gradient(
      180deg,
      rgba(2, 11, 19, 0.97),
      rgba(2, 11, 19, 0.75)
    );

  backdrop-filter: blur(16px);
}

.header-container {
  width: min(1180px, 100%);
  height: var(--header-height);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10px 18px;
}

.brand {
  display: block;
  width: 245px;
  max-width: 72vw;
}

.brand-image {
  width: 100%;
}

.menu-toggle {
  width: 46px;
  height: 46px;

  display: grid;
  align-content: center;
  gap: 6px;

  padding: 9px;

  border: 0;

  background: none;

  cursor: pointer;
}

.menu-toggle span {
  width: 100%;
  height: 2px;

  border-radius: 999px;

  background: var(--gold-light);

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.menu-toggle.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.is-active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.main-menu {
  position: fixed;
  top: calc(var(--header-height) + 10px);
  right: 16px;

  z-index: 95;

  width:
    min(
      340px,
      calc(100vw - 32px)
    );

  display: grid;

  padding: 16px;

  border:
    1px solid var(--line);
  border-radius: 22px;

  background:
    rgba(3, 15, 25, 0.98);

  box-shadow: var(--shadow);

  opacity: 0;
  visibility: hidden;
  transform: translateY(-12px);

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease;
}

.main-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.main-menu a {
  padding: 14px 12px;

  border-bottom:
    1px solid var(--line-soft);

  color: var(--white-soft);

  font-size: 0.95rem;
}

.main-menu a:last-child {
  border-bottom: 0;
}


/* =========================================================
   6. HERO
========================================================= */

.hero-section {
  position: relative;

  width: min(1180px, 100%);
  min-height:
    calc(
      100svh - var(--header-height)
    );

  display: flex;
  align-items: flex-end;

  margin: 0 auto;

  overflow: hidden;

  border-bottom:
    1px solid rgba(216, 168, 79, 0.18);
}

.hero-image {
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      90deg,
      rgba(2, 11, 19, 0.98) 0%,
      rgba(2, 11, 19, 0.79) 28%,
      rgba(2, 11, 19, 0.12) 63%,
      rgba(2, 11, 19, 0.2) 100%
    ),
    linear-gradient(
      0deg,
      var(--background) 0%,
      transparent 40%
    ),
    url("assets/rari-hero.png");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 64% top;

  transform: scale(1.02);
}

.hero-overlay {
  position: absolute;
  inset: 0;

  z-index: 1;

  background:
    radial-gradient(
      circle at 70% 24%,
      rgba(52, 143, 196, 0.22),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02),
      rgba(2, 11, 19, 0.12) 42%,
      var(--background) 100%
    );
}

.hero-content {
  position: relative;

  z-index: 3;

  width: 100%;
  max-width: 560px;

  padding:
    70px 24px 44px;
}

.hero-title {
  max-width: 4.5ch;

  margin-bottom: 22px;

  font-size:
    clamp(
      4.5rem,
      18vw,
      7.4rem
    );

  line-height: 0.7;
  text-transform: uppercase;

  text-shadow:
    0 10px 32px rgba(0, 0, 0, 0.52);
}

.hero-title span {
  display: block;
}

.hero-title-light {
  color: var(--cream);
}

.hero-title-gold {
  color: var(--gold-light);
}

.hero-role {
  margin-bottom: 22px;

  color: var(--gold-light);

  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.23em;
  text-transform: uppercase;
}

.hero-message {
  max-width: 320px;

  margin-bottom: 28px;

  color: var(--white-soft);

  font-family:
    "Cormorant Garamond",
    serif;

  font-size: 1.42rem;
  line-height: 1.45;

  text-shadow:
    0 4px 15px rgba(0, 0, 0, 0.7);
}

.hero-message em {
  color: var(--gold-light);
}

.hero-actions {
  max-width: 360px;

  display: grid;
  gap: 12px;
}

.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.grid-icon {
  width: 17px;

  display: grid;
  grid-template-columns:
    repeat(2, 5px);
  gap: 3px;
}

.grid-icon i {
  width: 5px;
  height: 5px;

  border:
    1px solid var(--gold-light);
}


/* =========================================================
   7. AURORA — PRIMEIRO BLOCO
========================================================= */

.aurora-introduction {
  width:
    min(
      760px,
      calc(100% - 36px)
    );

  display: grid;
  grid-template-columns:
    106px 1fr;
  align-items: center;
  gap: 18px;

  margin: 22px auto;
  padding: 18px;

  border:
    1px solid var(--line);
  border-radius: 24px;

  background:
    linear-gradient(
      140deg,
      rgba(9, 34, 53, 0.92),
      rgba(2, 13, 22, 0.9)
    );

  box-shadow: var(--shadow-soft);
}

.aurora-introduction-image img {
  width: 106px;
  height: 106px;

  object-fit: cover;

  border:
    1px solid rgba(244, 211, 133, 0.36);
  border-radius: 50%;

  box-shadow:
    0 0 34px rgba(45, 147, 211, 0.32);
}

.aurora-introduction-content h2 {
  margin-bottom: 7px;

  font-size: 1.65rem;
  line-height: 1;
}

.aurora-introduction-content h2 span {
  color: var(--gold-light);
}

.aurora-introduction-content p {
  margin-bottom: 10px;

  color: var(--gray);

  font-size: 0.92rem;
  line-height: 1.55;
}


/* =========================================================
   8. QUESTIONÁRIO
========================================================= */

.orientation-section {
  position: relative;

  width:
    min(
      980px,
      calc(100% - 36px)
    );

  display: grid;
  grid-template-columns:
    minmax(0, 1fr) 94px;
  align-items: center;
  gap: 14px;

  margin: 56px auto;
  padding: 30px 24px;

  overflow: hidden;

  border:
    1px solid var(--line);
  border-radius: var(--radius-large);

  background:
    radial-gradient(
      circle at 92% 52%,
      rgba(37, 125, 179, 0.26),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      rgba(7, 31, 49, 0.96),
      rgba(2, 12, 21, 0.9)
    );

  box-shadow: var(--shadow);
}

.orientation-content {
  position: relative;
  z-index: 2;
}

.orientation-section h2 {
  color: var(--gold-light);
}

.orientation-section p:not(.section-eyebrow) {
  margin-bottom: 24px;

  color: var(--gray);

  line-height: 1.7;
}

.orientation-button {
  max-width: 250px;
}

.orientation-symbol {
  position: relative;

  width: 94px;
  height: 160px;

  display: grid;
  place-items: center;
}

.orientation-ring {
  position: absolute;

  border:
    1px solid rgba(244, 211, 133, 0.36);
  border-radius: 50%;
}

.ring-one {
  width: 80px;
  height: 150px;

  transform: rotate(12deg);
}

.ring-two {
  width: 80px;
  height: 150px;

  transform: rotate(-12deg);
}

.ring-three {
  width: 42px;
  height: 150px;
}

.orientation-star {
  color: var(--gold-light);

  font-size: 3.3rem;

  text-shadow:
    0 0 20px rgba(244, 211, 133, 0.58);
}


/* =========================================================
   9. CARDS DE EXPERIÊNCIAS
========================================================= */

.experience-list {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns:
    minmax(245px, 76vw);
  gap: 14px;

  overflow-x: auto;

  padding:
    2px 2px 15px;

  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color:
    var(--line)
    transparent;
}

.experience-list::-webkit-scrollbar {
  height: 6px;
}

.experience-list::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--line);
}

.experience-card {
  overflow: hidden;

  border:
    1px solid var(--line);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      160deg,
      rgba(7, 26, 42, 0.92),
      rgba(2, 12, 20, 0.94)
    );

  box-shadow: var(--shadow-soft);

  scroll-snap-align: start;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold-light);
}

.experience-image {
  position: relative;

  aspect-ratio: 4 / 3;

  overflow: hidden;
}

.experience-image::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(2, 11, 19, 0.76),
      transparent 60%
    );
}

.experience-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition:
    transform 0.55s ease;
}

.experience-card:hover .experience-image img {
  transform: scale(1.05);
}

.experience-content {
  padding: 20px;
}

.experience-category,
.library-tag {
  margin-bottom: 7px;

  color: var(--gold);

  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.experience-content h3 {
  margin-bottom: 9px;

  color: var(--cream);

  font-size: 1.78rem;
  line-height: 1.05;
}

.experience-content p {
  margin-bottom: 16px;

  color: var(--gray);

  font-size: 0.9rem;
  line-height: 1.65;
}


/* =========================================================
   10. INTERVENÇÃO DA AURORA
========================================================= */

.aurora-message {
  width:
    min(
      980px,
      calc(100% - 36px)
    );

  display: grid;
  grid-template-columns:
    104px minmax(0, 1fr);
  align-items: center;
  gap: 22px;

  margin: 36px auto 12px;
  padding: 26px 22px;

  border:
    1px solid rgba(57, 151, 207, 0.3);
  border-radius: var(--radius-large);

  background:
    radial-gradient(
      circle at 10% 50%,
      rgba(44, 144, 205, 0.24),
      transparent 30%
    ),
    rgba(3, 16, 27, 0.88);

  box-shadow: var(--shadow-soft);
}

.aurora-message-avatar img {
  width: 104px;
  height: 104px;

  object-fit: cover;

  border-radius: 50%;

  box-shadow:
    0 0 34px rgba(52, 151, 213, 0.36);
}

.aurora-message h2 {
  margin-bottom: 12px;

  font-size:
    clamp(
      2rem,
      7vw,
      3.5rem
    );

  color: var(--gold-light);
}

.aurora-message-content > p:not(.section-eyebrow) {
  margin-bottom: 15px;

  color: var(--gray);

  line-height: 1.7;
}


/* =========================================================
   11. BIBLIOTECA
========================================================= */

.section-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.library-list {
  display: grid;
  gap: 16px;
}

.library-card {
  display: grid;
  grid-template-columns:
    120px minmax(0, 1fr);

  overflow: hidden;

  border:
    1px solid var(--line);
  border-radius: var(--radius-medium);

  background:
    linear-gradient(
      150deg,
      rgba(7, 27, 43, 0.92),
      rgba(2, 12, 20, 0.95)
    );

  box-shadow: var(--shadow-soft);
}

.library-cover {
  min-height: 210px;

  overflow: hidden;
}

.library-cover img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.library-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;
}

.library-content h3 {
  margin-bottom: 9px;

  font-size: 1.55rem;
  line-height: 1.05;
}

.library-content p:not(.library-tag) {
  margin-bottom: 15px;

  color: var(--gray);

  font-size: 0.88rem;
  line-height: 1.6;
}

.library-card-placeholder {
  min-height: 210px;
}

.library-placeholder-symbol {
  display: grid;
  place-items: center;

  color: var(--gold-light);

  background:
    radial-gradient(
      circle,
      rgba(45, 142, 199, 0.3),
      transparent 60%
    );

  font-family:
    "Cormorant Garamond",
    serif;

  font-size: 4.5rem;
}

.mobile-library-link {
  display: block;
}

.desktop-library-link {
  display: none;
}


/* =========================================================
   12. COMUNIDADE SEMENTES
========================================================= */

.community-section {
  position: relative;

  width:
    min(
      980px,
      calc(100% - 36px)
    );

  margin: 44px auto 70px;
  padding: 58px 28px;

  overflow: hidden;

  border:
    1px solid var(--line);
  border-radius: var(--radius-large);

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(64, 140, 178, 0.2),
      transparent 42%
    ),
    linear-gradient(
      150deg,
      rgba(8, 31, 49, 0.92),
      rgba(2, 12, 21, 0.95)
    );

  box-shadow: var(--shadow);

  text-align: center;
}

.community-symbol {
  margin-bottom: 12px;

  color: var(--gold-light);

  font-size: 3rem;
}

.community-content {
  position: relative;
  z-index: 2;
}

.community-section h2 {
  color: var(--gold-light);
}

.community-section p:not(.section-eyebrow) {
  max-width: 640px;

  margin-right: auto;
  margin-left: auto;

  color: var(--gray);

  line-height: 1.75;
}

.community-note {
  margin-bottom: 28px;
}

.community-section .button {
  max-width: 300px;
}


/* =========================================================
   13. SOBRE
========================================================= */

.about-section {
  width:
    min(
      980px,
      calc(100% - 36px)
    );

  margin: 0 auto 60px;
  padding: 46px 28px;

  border-left:
    2px solid var(--gold);

  background:
    linear-gradient(
      90deg,
      rgba(216, 168, 79, 0.08),
      transparent 75%
    );
}

.about-content {
  max-width: 760px;
}

.about-section h2 {
  color: var(--cream);
}

.about-section p:not(.section-eyebrow) {
  color: var(--gray);

  line-height: 1.8;
}


/* =========================================================
   14. FAQ
========================================================= */

.faq-list {
  border-bottom:
    1px solid var(--line-soft);
}

.faq-item {
  border-top:
    1px solid var(--line-soft);
}

.faq-item summary {
  position: relative;

  padding:
    20px 42px 20px 0;

  cursor: pointer;

  list-style: none;

  color: var(--cream);

  font-family:
    "Cormorant Garamond",
    serif;

  font-size: 1.42rem;
  line-height: 1.2;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: "+";

  position: absolute;
  top: 50%;
  right: 5px;

  color: var(--gold-light);

  font-family:
    "Jost",
    sans-serif;

  font-size: 1.5rem;

  transform: translateY(-50%);
}

.faq-item[open] summary::after {
  content: "−";
}

.faq-item p {
  max-width: 760px;

  margin-bottom: 22px;

  color: var(--gray);

  line-height: 1.75;
}


/* =========================================================
   15. CONTATO
========================================================= */

.contact-section {
  width:
    min(
      980px,
      calc(100% - 36px)
    );

  margin: 20px auto 72px;
  padding: 58px 28px;

  border:
    1px solid var(--line);
  border-radius: var(--radius-large);

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(216, 168, 79, 0.12),
      transparent 44%
    ),
    rgba(4, 18, 30, 0.9);

  box-shadow: var(--shadow);

  text-align: center;
}

.contact-section h2 {
  max-width: 680px;

  margin-right: auto;
  margin-left: auto;

  color: var(--gold-light);
}

.contact-section > p:not(.section-eyebrow) {
  max-width: 560px;

  margin-right: auto;
  margin-bottom: 28px;
  margin-left: auto;

  color: var(--gray);

  line-height: 1.75;
}

.contact-actions {
  max-width: 420px;

  display: grid;
  gap: 12px;

  margin: 0 auto;
}


/* =========================================================
   16. RODAPÉ
========================================================= */

.site-footer {
  position: relative;
  z-index: 2;

  width: min(1180px, 100%);

  margin: 0 auto;
  padding:
    52px 24px
    calc(
      var(--mobile-navigation-height)
      + 44px
    );

  border-top:
    1px solid rgba(216, 168, 79, 0.18);

  text-align: center;
}

.footer-brand {
  display: block;

  width: 260px;
  max-width: 75vw;

  margin: 0 auto 22px;
}

.footer-description {
  max-width: 560px;

  margin:
    0 auto 22px;

  color: var(--gray);

  line-height: 1.7;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;

  margin-bottom: 22px;

  color: var(--gold-light);
}

.footer-copy {
  margin-bottom: 12px;

  color: var(--gray-dark);

  font-size: 0.78rem;
}

.footer-legal {
  display: flex;
  justify-content: center;
  gap: 8px;

  color: var(--gray-dark);

  font-size: 0.74rem;
}


/* =========================================================
   17. AURORA FLUTUANTE
========================================================= */

.aurora-floating-button {
  position: fixed;
  right: 16px;
  bottom:
    calc(
      var(--mobile-navigation-height)
      + 14px
    );

  z-index: 110;

  width: 76px;
  height: 76px;

  padding: 4px;

  border:
    1px solid var(--gold);
  border-radius: 50%;

  background: #031423;

  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.54);

  cursor: pointer;
}

.aurora-floating-button img {
  position: relative;
  z-index: 2;

  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 50%;
}

.aurora-floating-glow {
  position: absolute;
  inset: -7px;

  border:
    1px solid rgba(78, 177, 230, 0.35);
  border-radius: 50%;

  animation:
    auroraPulse 2.6s ease-in-out infinite;
}

.aurora-floating-chat {
  position: absolute;
  right: -4px;
  bottom: -3px;

  z-index: 3;

  width: 28px;
  height: 28px;

  display: grid;
  place-items: center;

  border:
    2px solid var(--background);
  border-radius: 50%;

  color: #06121d;

  background: var(--gold-light);

  font-size: 0.9rem;
}

@keyframes auroraPulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.96);
  }

  50% {
    opacity: 1;
    transform: scale(1.09);
  }
}


/* =========================================================
   18. NAVEGAÇÃO INFERIOR MOBILE
========================================================= */

.mobile-navigation {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 100;

  height:
    var(--mobile-navigation-height);

  display: grid;
  grid-template-columns:
    repeat(5, 1fr);

  padding-bottom:
    env(safe-area-inset-bottom);

  border-top:
    1px solid var(--line);

  background:
    rgba(2, 10, 18, 0.95);

  backdrop-filter: blur(16px);
}

.mobile-navigation-item {
  min-width: 0;

  display: grid;
  place-content: center;
  gap: 2px;

  padding: 0;

  border: 0;

  color: var(--gray);

  background: none;

  cursor: pointer;

  text-align: center;
}

.mobile-navigation-item span:last-child {
  font-size: 0.62rem;
}

.mobile-navigation-icon {
  color: var(--gold-light);

  font-size: 1.2rem;
  line-height: 1;
}


/* =========================================================
   19. DIALOGS
========================================================= */

.site-dialog {
  position: relative;

  width:
    min(
      520px,
      calc(100% - 28px)
    );

  max-height:
    calc(100svh - 32px);

  overflow-y: auto;

  padding: 32px 24px;

  border:
    1px solid var(--line);
  border-radius: 28px;

  color: var(--cream);

  background:
    linear-gradient(
      150deg,
      #071f32,
      #03101b
    );

  box-shadow: var(--shadow);
}

.site-dialog::backdrop {
  background:
    rgba(0, 0, 0, 0.74);

  backdrop-filter: blur(6px);
}

.dialog-close {
  position: absolute;
  top: 10px;
  right: 15px;

  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  padding: 0;

  border: 0;

  color: var(--cream);

  background: none;

  cursor: pointer;

  font-size: 2rem;
}

.dialog-aurora-avatar img {
  width: 105px;
  height: 105px;

  margin-bottom: 20px;

  object-fit: cover;

  border-radius: 50%;

  box-shadow:
    0 0 36px rgba(55, 154, 218, 0.38);
}

.site-dialog h2 {
  margin-bottom: 12px;

  color: var(--gold-light);

  font-size: 2.8rem;
  line-height: 0.95;
}

.dialog-introduction,
.dialog-note {
  color: var(--gray);

  line-height: 1.7;
}

.aurora-options {
  display: grid;
  gap: 10px;

  margin: 22px 0;
}

.aurora-options button {
  padding: 15px;

  border:
    1px solid rgba(216, 168, 79, 0.24);
  border-radius: 14px;

  color: var(--cream);

  background:
    rgba(255, 255, 255, 0.03);

  cursor: pointer;

  text-align: left;
}

.aurora-options button:hover {
  border-color: var(--gold);
}

.dialog-note {
  margin-bottom: 0;

  font-size: 0.8rem;
}

#orientationForm {
  display: grid;
  gap: 10px;

  margin-top: 24px;
}

.quiz-option {
  display: flex;
  align-items: flex-start;
  gap: 11px;

  padding: 15px;

  border:
    1px solid rgba(216, 168, 79, 0.24);
  border-radius: 14px;

  color: var(--cream);

  background:
    rgba(255, 255, 255, 0.03);

  cursor: pointer;
}

.quiz-option:has(input:checked) {
  border-color: var(--gold-light);

  background:
    rgba(216, 168, 79, 0.1);
}

.quiz-option input {
  margin-top: 4px;

  accent-color: var(--gold);
}

.quiz-submit {
  margin-top: 8px;
}

.quiz-result {
  display: none;

  margin-top: 22px;
  padding: 18px;

  border:
    1px solid var(--line);
  border-radius: 16px;

  color: var(--cream);

  background:
    rgba(216, 168, 79, 0.08);

  line-height: 1.7;
}

.quiz-result.is-visible {
  display: block;
}

.quiz-result strong {
  color: var(--gold-light);
}


/* =========================================================
   20. ANIMAÇÕES DE ENTRADA
========================================================= */

.section-reveal {
  opacity: 0;
  transform: translateY(24px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}


/* =========================================================
   21. RESPONSIVO — TABLET
========================================================= */

@media (min-width: 700px) {

  .header-container {
    padding-right: 32px;
    padding-left: 32px;
  }

  .hero-content {
    padding-right: 6vw;
    padding-left: 6vw;
  }

  .hero-image {
    background-position: 73% 18%;
  }

  .hero-message {
    max-width: 430px;
  }

  .hero-actions {
    grid-template-columns:
      1fr 1fr;

    max-width: 650px;
  }

  .orientation-section {
    grid-template-columns:
      minmax(0, 1fr) 180px;

    padding: 42px;
  }

  .orientation-symbol {
    width: 180px;
    height: 210px;
  }

  .ring-one,
  .ring-two,
  .ring-three {
    height: 200px;
  }

  .ring-one,
  .ring-two {
    width: 120px;
  }

  .ring-three {
    width: 64px;
  }

  .orientation-star {
    font-size: 4.7rem;
  }

  .experience-list {
    grid-auto-columns:
      minmax(280px, 42vw);
  }

  .library-list {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .library-card-placeholder {
    grid-column: 1 / -1;
  }

  .contact-actions {
    grid-template-columns:
      1fr 1fr;

    max-width: 700px;
  }
}


/* =========================================================
   22. RESPONSIVO — DESKTOP
========================================================= */

@media (min-width: 980px) {

  :root {
    --header-height: 96px;
  }

  .menu-toggle {
    display: none;
  }

  .site-header {
    display: flex;
    align-items: center;
  }

  .header-container {
    width: auto;

    margin-left: max(
      24px,
      calc((100vw - 1180px) / 2)
    );

    padding: 0;
  }

  .brand {
    width: 280px;
  }

  .main-menu {
    position: static;

    width: auto;

    display: flex;
    align-items: center;
    gap: 4px;

    margin-right: max(
      24px,
      calc((100vw - 1180px) / 2)
    );
    margin-left: auto;
    padding: 0;

    border: 0;

    background: none;

    box-shadow: none;

    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .main-menu a {
    padding: 12px 10px;

    border: 0;

    font-size: 0.8rem;
  }

  .hero-section {
    min-height: 760px;
  }

  .hero-content {
    padding-bottom: 85px;
  }

  .hero-image {
    background-position: 76% 22%;
  }

  .aurora-introduction {
    grid-template-columns:
      130px 1fr;

    padding: 24px;
  }

  .aurora-introduction-image img {
    width: 130px;
    height: 130px;
  }

  .experience-list {
    grid-auto-flow: initial;
    grid-auto-columns: initial;
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    overflow: visible;
  }

  .library-list {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .library-card-placeholder {
    grid-column: auto;
  }

  .desktop-library-link {
    display: inline-flex;
  }

  .mobile-library-link {
    display: none;
  }

  .mobile-navigation {
    display: none;
  }

  .aurora-floating-button {
    right: 28px;
    bottom: 28px;
  }

  .site-footer {
    padding-bottom: 60px;
  }
}


/* =========================================================
   23. AJUSTES PARA CELULARES PEQUENOS
========================================================= */

@media (max-width: 420px) {

  .hero-content {
    padding-right: 20px;
    padding-left: 20px;
  }

  .hero-title {
    font-size: 4.15rem;
  }

  .hero-image {
    background-position: 63% top;
  }

  .aurora-introduction {
    grid-template-columns:
      86px 1fr;

    gap: 14px;

    padding: 15px;
  }

  .aurora-introduction-image img {
    width: 86px;
    height: 86px;
  }

  .aurora-introduction-content h2 {
    font-size: 1.4rem;
  }

  .aurora-introduction-content p {
    font-size: 0.82rem;
  }

  .orientation-section {
    grid-template-columns:
      minmax(0, 1fr) 72px;

    padding: 26px 20px;
  }

  .orientation-symbol {
    width: 72px;
  }

  .ring-one,
  .ring-two {
    width: 62px;
  }

  .ring-three {
    width: 33px;
  }

  .library-card {
    grid-template-columns:
      105px minmax(0, 1fr);
  }

  .library-content {
    padding: 16px;
  }

  .library-content h3 {
    font-size: 1.35rem;
  }

  .aurora-message {
    grid-template-columns:
      84px minmax(0, 1fr);
  }

  .aurora-message-avatar img {
    width: 84px;
    height: 84px;
  }
}


/* =========================================================
   24. ACESSIBILIDADE
========================================================= */

@media (
  prefers-reduced-motion: reduce
) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;

    scroll-behavior: auto !important;
  }
}
