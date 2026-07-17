/* =========================================================
   RARI FAVARO — ECOSSISTEMA DIGITAL
   ARQUIVO PRINCIPAL DE INTERAÇÕES
========================================================= */

"use strict";

/* =========================================================
   1. ELEMENTOS PRINCIPAIS
========================================================= */

const body = document.body;

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

const auroraDialog = document.getElementById("auroraDialog");
const quizDialog = document.getElementById("quizDialog");

const auroraOpenButtons = document.querySelectorAll(
  "[data-open-aurora]"
);

const quizOpenButtons = document.querySelectorAll(
  "[data-open-quiz]"
);

const dialogCloseButtons = document.querySelectorAll(
  "[data-close-dialog]"
);

const menuLinks = document.querySelectorAll(
  "#mainMenu a"
);

const revealSections = document.querySelectorAll(
  ".section-reveal"
);

const mobileNavigationItems = document.querySelectorAll(
  ".mobile-navigation-item"
);

const currentYearElement = document.getElementById(
  "currentYear"
);

/* =========================================================
   2. FUNÇÕES AUXILIARES
========================================================= */

function isDialogOpen(dialog) {
  return Boolean(
    dialog &&
    dialog.hasAttribute("open")
  );
}

function lockPageScroll() {
  const hasOpenDialog =
    isDialogOpen(auroraDialog) ||
    isDialogOpen(quizDialog);

  body.classList.toggle(
    "dialog-open",
    hasOpenDialog
  );
}

function openDialog(dialog) {
  if (!dialog) {
    return;
  }

  closeMenu();

  if (
    typeof dialog.showModal === "function" &&
    !dialog.open
  ) {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  lockPageScroll();
}

function closeDialog(dialog) {
  if (!dialog) {
    return;
  }

  if (
    typeof dialog.close === "function" &&
    dialog.open
  ) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }

  lockPageScroll();
}

function closeAllDialogs() {
  closeDialog(auroraDialog);
  closeDialog(quizDialog);
}

/* =========================================================
   3. MENU PRINCIPAL
========================================================= */

function openMenu() {
  if (!menuToggle || !mainMenu) {
    return;
  }

  mainMenu.classList.add("is-open");
  menuToggle.classList.add("is-active");

  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  menuToggle.setAttribute(
    "aria-label",
    "Fechar menu"
  );
}

function closeMenu() {
  if (!menuToggle || !mainMenu) {
    return;
  }

  mainMenu.classList.remove("is-open");
  menuToggle.classList.remove("is-active");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  menuToggle.setAttribute(
    "aria-label",
    "Abrir menu"
  );
}

function toggleMenu() {
  if (!mainMenu) {
    return;
  }

  const menuIsOpen =
    mainMenu.classList.contains("is-open");

  if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (menuToggle) {
  menuToggle.addEventListener(
    "click",
    toggleMenu
  );
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!mainMenu || !menuToggle) {
    return;
  }

  const clickedInsideMenu =
    mainMenu.contains(event.target);

  const clickedMenuButton =
    menuToggle.contains(event.target);

  if (
    !clickedInsideMenu &&
    !clickedMenuButton
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 980) {
    closeMenu();
  }
});

/* =========================================================
   4. ABERTURA DOS DIALOGS
========================================================= */

auroraOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openDialog(auroraDialog);
  });
});

quizOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openDialog(quizDialog);
  });
});

dialogCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");

    closeDialog(dialog);
  });
});

/* =========================================================
   5. FECHAR DIALOG AO CLICAR FORA
========================================================= */

function closeDialogFromBackdrop(event) {
  const dialog = event.currentTarget;

  if (event.target !== dialog) {
    return;
  }

  const rectangle =
    dialog.getBoundingClientRect();

  const clickedInsideDialog =
    event.clientX >= rectangle.left &&
    event.clientX <= rectangle.right &&
    event.clientY >= rectangle.top &&
    event.clientY <= rectangle.bottom;

  if (!clickedInsideDialog) {
    closeDialog(dialog);
  }
}

if (auroraDialog) {
  auroraDialog.addEventListener(
    "click",
    closeDialogFromBackdrop
  );

  auroraDialog.addEventListener(
    "close",
    lockPageScroll
  );
}

if (quizDialog) {
  quizDialog.addEventListener(
    "click",
    closeDialogFromBackdrop
  );

  quizDialog.addEventListener(
    "close",
    lockPageScroll
  );
}

/* =========================================================
   6. TECLA ESC
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  closeMenu();

  if (isDialogOpen(auroraDialog)) {
    closeDialog(auroraDialog);
  }

  if (isDialogOpen(quizDialog)) {
    closeDialog(quizDialog);
  }
});

/* =========================================================
   7. ANIMAÇÕES AO ROLAR
========================================================= */

function revealVisibleSections() {
  revealSections.forEach((section) => {
    const sectionPosition =
      section.getBoundingClientRect();

    const isVisible =
      sectionPosition.top <
      window.innerHeight * 0.9;

    if (isVisible) {
      section.classList.add(
        "is-visible"
      );
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "is-visible"
          );

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });
} else {
  revealVisibleSections();

  window.addEventListener(
    "scroll",
    revealVisibleSections,
    {
      passive: true
    }
  );
}

/* =========================================================
   8. ANO AUTOMÁTICO DO RODAPÉ
========================================================= */

if (currentYearElement) {
  currentYearElement.textContent =
    new Date().getFullYear();
}

/* =========================================================
   9. FAQ — UMA PERGUNTA ABERTA POR VEZ
========================================================= */

const faqItems = document.querySelectorAll(
  ".faq-item"
);

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.open
      ) {
        otherItem.removeAttribute(
          "open"
        );
      }
    });
  });
});
/* =========================================================
   10. AURORA — ELEMENTOS
========================================================= */

const auroraOptionButtons =
  document.querySelectorAll(
    "[data-aurora-option]"
  );

const auroraResponse =
  document.getElementById(
    "auroraResponse"
  );

/* =========================================================
   11. AURORA — CONTEÚDOS
========================================================= */

const auroraAnswers = {
  consulta: {
    title: "Vamos encontrar uma experiência.",
    text:
      "Se você está buscando clareza sobre uma situação específica, a Leitura de Tarot pode ser um bom começo. Para investigar padrões mais profundos, o Mapa da Alma ou a Jornada Terapêutica podem fazer mais sentido.",
    actionText: "Ver consultas e experiências",
    actionTarget: "#experiencias"
  },

  biblioteca: {
    title: "Você pode começar no seu ritmo.",
    text:
      "A biblioteca reúne materiais para reflexão, estudo e autoconhecimento. É uma boa porta de entrada para quem deseja compreender melhor alguns temas antes de escolher uma consulta.",
    actionText: "Explorar a biblioteca",
    actionTarget: "#biblioteca"
  },

  comunidade: {
    title: "Talvez Sementes seja o seu caminho.",
    text:
      "Sementes é um espaço de continuidade, partilha e desenvolvimento. A proposta é caminhar além de uma experiência pontual, com conteúdos, práticas e encontros.",
    actionText: "Conhecer a comunidade",
    actionTarget: "#sementes"
  },

  confuso: {
    title: "Você não precisa ter tudo organizado agora.",
    text:
      "Quando existe confusão, o primeiro passo pode ser apenas reconhecer o que está pedindo atenção. O questionário rápido pode ajudar a organizar seu momento e apresentar uma recomendação inicial.",
    actionText: "Responder ao questionário",
    actionTarget: "quiz"
  }
};

/* =========================================================
   12. AURORA — EXIBIR RESPOSTA
========================================================= */

function createAuroraResponse(answer) {
  if (!auroraResponse || !answer) {
    return;
  }

  auroraResponse.innerHTML = "";

  const title =
    document.createElement("h3");

  const text =
    document.createElement("p");

  const action =
    document.createElement("button");

  title.textContent = answer.title;
  text.textContent = answer.text;

  action.type = "button";
  action.className =
    "button button-primary";

  action.textContent =
    answer.actionText;

  action.dataset.auroraTarget =
    answer.actionTarget;

  auroraResponse.append(
    title,
    text,
    action
  );

  auroraResponse.classList.add(
    "is-visible"
  );

  action.addEventListener(
    "click",
    handleAuroraAction
  );

  auroraResponse.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

/* =========================================================
   13. AURORA — BOTÕES DE ESCOLHA
========================================================= */

auroraOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedOption =
      button.dataset.auroraOption;

    const selectedAnswer =
      auroraAnswers[selectedOption];

    auroraOptionButtons.forEach(
      (otherButton) => {
        otherButton.classList.remove(
          "is-selected"
        );
      }
    );

    button.classList.add(
      "is-selected"
    );

    createAuroraResponse(
      selectedAnswer
    );
  });
});

/* =========================================================
   14. AURORA — AÇÕES
========================================================= */

function handleAuroraAction(event) {
  const target =
    event.currentTarget.dataset
      .auroraTarget;

  if (!target) {
    return;
  }

  if (target === "quiz") {
    closeDialog(auroraDialog);

    window.setTimeout(() => {
      openDialog(quizDialog);
    }, 220);

    return;
  }

  const destination =
    document.querySelector(target);

  closeDialog(auroraDialog);

  if (!destination) {
    return;
  }

  window.setTimeout(() => {
    destination.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 220);
}

/* =========================================================
   15. LIMPAR AURORA AO FECHAR
========================================================= */

function resetAuroraDialog() {
  auroraOptionButtons.forEach(
    (button) => {
      button.classList.remove(
        "is-selected"
      );
    }
  );

  if (!auroraResponse) {
    return;
  }

  auroraResponse.classList.remove(
    "is-visible"
  );

  auroraResponse.innerHTML = "";
}

if (auroraDialog) {
  auroraDialog.addEventListener(
    "close",
    resetAuroraDialog
  );
}

/* =========================================================
   16. LINKS INTERNOS COM ROLAGEM SUAVE
========================================================= */

const internalLinks =
  document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
  );

internalLinks.forEach((link) => {
  link.addEventListener(
    "click",
    (event) => {
      const targetId =
        link.getAttribute("href");

      const targetSection =
        document.querySelector(
          targetId
        );

      if (!targetSection) {
        return;
      }

      event.preventDefault();

      closeMenu();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      window.history.replaceState(
        null,
        "",
        targetId
      );
    }
  );
});

/* =========================================================
   17. CABEÇALHO AO ROLAR
========================================================= */

const siteHeader =
  document.querySelector(
    ".site-header"
  );

function updateHeaderOnScroll() {
  if (!siteHeader) {
    return;
  }

  const pageHasScrolled =
    window.scrollY > 24;

  siteHeader.classList.toggle(
    "is-scrolled",
    pageHasScrolled
  );
}

updateHeaderOnScroll();

window.addEventListener(
  "scroll",
  updateHeaderOnScroll,
  {
    passive: true
  }
);

/* =========================================================
   18. FECHAR MENU AO ROLAR
========================================================= */

let previousScrollPosition =
  window.scrollY;

function closeMenuWhileScrolling() {
  const currentScrollPosition =
    window.scrollY;

  const scrollDifference =
    Math.abs(
      currentScrollPosition -
      previousScrollPosition
    );

  if (scrollDifference > 24) {
    closeMenu();
  }

  previousScrollPosition =
    currentScrollPosition;
}

window.addEventListener(
  "scroll",
  closeMenuWhileScrolling,
  {
    passive: true
  }
);
/* =========================================================
   19. QUESTIONÁRIO
========================================================= */

const orientationForm =
  document.getElementById(
    "orientationForm"
  );

const quizResult =
  document.getElementById(
    "quizResult"
  );

const quizRecommendations = {
  tarot: {
    title: "Leitura de Tarot",
    text:
      "Pelas suas respostas, a Leitura de Tarot parece ser a melhor porta de entrada neste momento. Ela pode ajudar a compreender o cenário atual e ampliar sua percepção sobre as possibilidades."
  },

  mapa: {
    title: "Mapa da Alma",
    text:
      "Você demonstrou interesse em compreender padrões mais profundos. O Mapa da Alma reúne diferentes ferramentas para investigar potenciais, desafios e movimentos da sua jornada."
  },

  reiki: {
    title: "Reiki & Harmonização",
    text:
      "Talvez seu momento peça primeiro equilíbrio e reorganização energética. O Reiki pode ser um excelente ponto de partida antes de processos mais investigativos."
  },

  jornada: {
    title: "Jornada Terapêutica",
    text:
      "Você parece buscar um acompanhamento contínuo. A Jornada Terapêutica foi pensada para quem deseja investigar padrões e sustentar mudanças ao longo do tempo."
  },

  biblioteca: {
    title: "Biblioteca",
    text:
      "Você pode começar estudando no seu próprio ritmo. Os materiais da Biblioteca oferecem uma base sólida antes de escolher qualquer experiência."
  }
};

/* =========================================================
   20. RESULTADO DO QUESTIONÁRIO
========================================================= */

function showQuizResult(answer) {
  if (!quizResult || !answer) {
    return;
  }

  quizResult.innerHTML = `
    <h3>${answer.title}</h3>
    <p>${answer.text}</p>

    <button
      class="button button-primary"
      id="quizActionButton"
      type="button"
    >
      Continuar
    </button>
  `;

  quizResult.classList.add("is-visible");

  const actionButton =
    document.getElementById(
      "quizActionButton"
    );

  actionButton.addEventListener(
    "click",
    () => {
      closeDialog(quizDialog);

      document
        .querySelector("#contato")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    }
  );
}

if (orientationForm) {
  orientationForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const selectedOption =
        orientationForm.orientation.value;

      if (!selectedOption) {
        alert(
          "Escolha uma opção antes de continuar."
        );
        return;
      }

      const recommendation =
        quizRecommendations[
          selectedOption
        ];

      showQuizResult(
        recommendation
      );
    }
  );
}

/* =========================================================
   21. LIMPAR QUESTIONÁRIO
========================================================= */

function resetQuiz() {
  if (orientationForm) {
    orientationForm.reset();
  }

  if (quizResult) {
    quizResult.innerHTML = "";
    quizResult.classList.remove(
      "is-visible"
    );
  }
}

if (quizDialog) {
  quizDialog.addEventListener(
    "close",
    resetQuiz
  );
}

/* =========================================================
   22. NAVEGAÇÃO ATIVA
========================================================= */

const observedSections =
  document.querySelectorAll(
    "main section[id]"
  );

const navigationLinks =
  document.querySelectorAll(
    '.main-menu a[href^="#"], .mobile-navigation a[href^="#"]'
  );

function activateNavigation(id) {
  navigationLinks.forEach(
    (link) => {
      const active =
        link.getAttribute("href") ===
        `#${id}`;

      link.classList.toggle(
        "is-active",
        active
      );
    }
  );
}

if ("IntersectionObserver" in window) {
  const navigationObserver =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              !entry.isIntersecting
            ) {
              return;
            }

            activateNavigation(
              entry.target.id
            );
          }
        );
      },
      {
        threshold: 0.45
      }
    );

  observedSections.forEach(
    (section) => {
      navigationObserver.observe(
        section
      );
    }
  );
}

/* =========================================================
   23. INICIALIZAÇÃO
========================================================= */

window.addEventListener(
  "load",
  () => {
    revealVisibleSections();
    updateHeaderOnScroll();

    if (
      window.location.hash
    ) {
      const section =
        document.querySelector(
          window.location.hash
        );

      section?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
);

/* =========================================================
   FIM DO ARQUIVO
========================================================= */
