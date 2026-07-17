<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <meta
    name="description"
    content="Rari Favaro — Educador e Facilitador Holístico. Tarot, Mapa da Alma, Arquétipos, Reiki e experiências de autoconhecimento."
  >

  <title>Rari Favaro | Aurora</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  >

  <style>
    :root {
      --fundo: #020b13;
      --azul: #061827;
      --azul-claro: #0d3853;
      --dourado: #d8a84f;
      --dourado-claro: #f4d385;
      --texto: #f5efe6;
      --texto-suave: #b9c2c8;
      --borda: rgba(216, 168, 79, 0.38);
      --vidro: rgba(5, 25, 40, 0.82);
    }
.
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      color: var(--texto);
      font-family: "Jost", sans-serif;
      background:
        radial-gradient(
          circle at 75% 10%,
          rgba(20, 100, 150, 0.38),
          transparent 35%
        ),
        radial-gradient(
          circle at 15% 55%,
          rgba(216, 168, 79, 0.10),
          transparent 25%
        ),
        linear-gradient(
          180deg,
          #01080e,
          #061827 48%,
          #020b13
        );
      overflow-x: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -1;
      opacity: 0.25;
      background-image:
        radial-gradient(circle, white 1px, transparent 1px),
        radial-gradient(circle, white 1px, transparent 1px);
      background-size: 90px 90px, 145px 145px;
      background-position: 0 0, 40px 60px;
      animation: estrelas 90s linear infinite;
    }

    @keyframes estrelas {
      to {
        transform: translate3d(-80px, 70px, 0);
      }
    }

    h1,
    h2,
    h3 {
      margin-top: 0;
      font-family: "Cormorant Garamond", serif;
      font-weight: 500;
    }

    p {
      line-height: 1.7;
      color: var(--texto-suave);
    }

    a {
      color: inherit;
    }

    button,
    a {
      -webkit-tap-highlight-color: transparent;
    }

    .topo {
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 16px 5vw;
      border-bottom: 1px solid rgba(216, 168, 79, 0.18);
      background: rgba(2, 11, 19, 0.78);
      backdrop-filter: blur(18px);
    }

    .marca {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .simbolo {
      width: 55px;
      height: 55px;
      display: grid;
      place-items: center;
      border: 1px solid var(--dourado);
      border-radius: 50%;
      color: var(--dourado-claro);
      font-size: 25px;
      box-shadow:
        inset 0 0 20px rgba(216, 168, 79, 0.13),
        0 0 20px rgba(216, 168, 79, 0.10);
    }

    .marca strong {
      display: block;
      color: var(--dourado-claro);
      font-family: "Cormorant Garamond", serif;
      font-size: 21px;
      letter-spacing: 0.10em;
      text-transform: uppercase;
    }

    .marca small {
      display: block;
      margin-top: 2px;
      color: var(--dourado);
      font-size: 9px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .menu a {
      color: #eef1f3;
      font-size: 14px;
      text-decoration: none;
    }

    .menu a:hover {
      color: var(--dourado-claro);
    }

    .botao-menu {
      display: none;
      border: 0;
      color: white;
      background: transparent;
      font-size: 25px;
    }

    .botao {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 13px 21px;
      border: 1px solid transparent;
      border-radius: 13px;
      font-family: "Jost", sans-serif;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
    }

    .botao:hover {
      transform: translateY(-3px);
    }

    .botao-dourado {
      color: #16222c;
      background: linear-gradient(
        135deg,
        var(--dourado-claro),
        #c68d35
      );
      box-shadow: 0 10px 28px rgba(216, 168, 79, 0.24);
    }

    .botao-contorno {
      color: var(--texto);
      border-color: var(--borda);
      background: rgba(3, 17, 29, 0.55);
    }

    .secao {
      padding: 85px 5vw;
    }

    .hero {
      position: relative;
      min-height: 720px;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      align-items: center;
      gap: 35px;
      padding-top: 55px;
    }

    .mini-titulo {
      color: var(--dourado-claro);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.20em;
      text-transform: uppercase;
    }

    .hero h1 {
      margin-bottom: 28px;
      color: var(--texto);
      font-size: clamp(70px, 10vw, 135px);
      line-height: 0.72;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .hero h1 span {
      color: var(--dourado-claro);
    }

    .cargo {
      margin-bottom: 24px;
      color: var(--dourado-claro);
      font-size: 15px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .frase {
      max-width: 510px;
      color: #e7e0d5;
      font-family: "Cormorant Garamond", serif;
      font-size: 25px;
    }

    .frase em {
      color: var(--dourado-claro);
    }

    .botoes {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }

    .visual {
      position: relative;
      min-height: 590px;
      display: flex;
      align-items: end;
      justify-content: center;
    }

    .rari {
      position: relative;
      z-index: 3;
      width: min(420px, 82%);
      height: 560px;
      display: flex;
      align-items: end;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(216, 168, 79, 0.22);
      border-radius: 48% 48% 24% 24% / 25% 25% 10% 10%;
      background:
        radial-gradient(
          circle at 50% 30%,
          rgba(70, 150, 200, 0.35),
          transparent 27%
        ),
        linear-gradient(
          180deg,
          #163f5d,
          #09243a 48%,
          #03111d
        );
      box-shadow:
        0 30px 70px rgba(0, 0, 0, 0.42),
        0 0 70px rgba(40, 125, 180, 0.20);
    }

    .rari::before {
      content: "RARI";
      margin-bottom: 72px;
      color: rgba(244, 211, 133, 0.82);
      font-family: "Cormorant Garamond", serif;
      font-size: 80px;
      letter-spacing: 0.10em;
    }

    .rari::after {
      content: "Sua fotografia será adicionada aqui";
      position: absolute;
      bottom: 24px;
      color: var(--texto-suave);
      font-size: 12px;
    }

    .aurora-ser {
      position: absolute;
      z-index: 2;
      top: 15px;
      right: -10px;
      width: 330px;
      height: 470px;
      animation: respirar 6s ease-in-out infinite;
      filter: drop-shadow(0 0 28px rgba(75, 180, 235, 0.42));
    }

    @keyframes respirar {
      50% {
        transform: translateY(-9px) scale(1.015);
      }
    }

    .aurora-rosto {
      position: absolute;
      top: 72px;
      left: 124px;
      width: 80px;
      height: 110px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(210, 246, 255, 0.80);
      border-radius: 50%;
      color: white;
      font-size: 27px;
      background:
        linear-gradient(
          135deg,
          rgba(220, 250, 255, 0.94),
          rgba(50, 135, 190, 0.35)
        );
      box-shadow:
        inset 0 0 30px #79cfff,
        0 0 45px #3799ce;
    }

    .asa {
      position: absolute;
      top: 65px;
      width: 180px;
      height: 330px;
      border: 1px solid rgba(180, 232, 255, 0.65);
      background:
        linear-gradient(
          135deg,
          rgba(65, 165, 220, 0.08),
          rgba(210, 245, 255, 0.34)
        );
      clip-path: polygon(
        50% 0,
        100% 25%,
        76% 100%,
        0 66%
      );
      filter: drop-shadow(0 0 15px #54afe0);
    }

    .asa-esquerda {
      left: 0;
      transform: rotate(-18deg);
    }

    .asa-direita {
      right: 0;
      transform: scaleX(-1) rotate(-18deg);
    }

    .vidro {
      border: 1px solid var(--borda);
      background:
        linear-gradient(
          145deg,
          rgba(9, 38, 57, 0.88),
          rgba(3, 17, 29, 0.78)
        );
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.28);
      backdrop-filter: blur(15px);
    }

    .chamada-aurora {
      position: absolute;
      z-index: 6;
      right: 0;
      bottom: 34px;
      width: 330px;
      display: flex;
      gap: 14px;
      padding: 18px;
      border-radius: 22px;
    }

    .avatar-aurora {
      flex: 0 0 57px;
      width: 57px;
      height: 57px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      color: white;
      font-size: 24px;
      background:
        radial-gradient(
          circle,
          #c9f6ff,
          #287cac 47%,
          #061827 72%
        );
      box-shadow: 0 0 28px rgba(94, 211, 255, 0.46);
    }

    .chamada-aurora strong {
      display: block;
      margin-bottom: 3px;
    }

    .chamada-aurora p {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 1.45;
    }

    .link-aurora {
      padding: 0;
      border: 0;
      color: var(--dourado-claro);
      background: transparent;
      cursor: pointer;
    }

    .questionario {
      margin: 0 5vw;
      padding: 34px;
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .questionario h2 {
      margin-bottom: 8px;
      color: var(--dourado-claro);
      font-size: 40px;
    }

    .questionario p {
      max-width: 720px;
    }

    .vantagens {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      color: #e2e8eb;
      font-size: 13px;
    }

    .cabecalho-secao {
      margin-bottom: 40px;
      text-align: center;
    }

    .cabecalho-secao h2 {
      color: #f2e6d2;
      font-size: clamp(40px, 5vw, 65px);
    }

    .cards {
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 19px;
    }

    .card {
      min-height: 345px;
      display: flex;
      flex-direction: column;
      padding: 27px 23px;
      overflow: hidden;
      border: 1px solid var(--borda);
      border-radius: 22px;
      background:
        radial-gradient(
          circle at 25% 0,
          rgba(216, 168, 79, 0.16),
          transparent 28%
        ),
        linear-gradient(
          180deg,
          rgba(13, 47, 70, 0.92),
          rgba(3, 17, 29, 0.94)
        );
      transition: 0.35s;
    }

    .card:hover {
      transform: translateY(-7px);
      border-color: var(--dourado);
      box-shadow:
        0 22px 45px rgba(0, 0, 0, 0.38),
        0 0 28px rgba(45, 145, 195, 0.15);
    }

    .icone-card {
      height: 85px;
      display: grid;
      place-items: center;
      color: var(--dourado-claro);
      font-size: 48px;
      text-shadow: 0 0 25px rgba(216, 168, 79, 0.60);
    }

    .card h3 {
      margin-bottom: 7px;
      text-align: center;
      font-size: 28px;
    }

    .card p {
      margin-top: 0;
      text-align: center;
      font-size: 14px;
    }

    .preco {
      margin: auto 0 17px;
      color: var(--dourado-claro);
      text-align: center;
      font-size: 14px;
      font-weight: 500;
    }

    .card a {
      padding: 10px;
      border: 1px solid var(--dourado);
      border-radius: 999px;
      text-align: center;
      text-decoration: none;
    }

    .card a:hover {
      background: rgba(216, 168, 79, 0.12);
    }

    .duas-colunas {
      max-width: 1150px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 65px;
      align-items: center;
    }

    .painel-reiki {
      padding: 28px;
      border-radius: 24px;
    }

    .linha {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      padding: 13px 0;
      border-bottom: 1px solid rgba(216, 168, 79, 0.18);
    }

    .linha span {
      color: var(--dourado-claro);
    }

    .biblioteca {
      max-width: 1150px;
      margin: auto;
      display: grid;
      grid-template-columns: 1.45fr 1fr 1fr;
      gap: 19px;
    }

    .livro {
      min-height: 285px;
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 28px;
      border: 1px solid var(--borda);
      border-radius: 23px;
      background:
        linear-gradient(
          145deg,
          #0c2f46,
          #041421
        );
    }

    .livro:first-child {
      background:
        radial-gradient(
          circle at 20% 10%,
          rgba(216, 168, 79, 0.25),
          transparent 34%
        ),
        linear-gradient(
          145deg,
          #123f5b,
          #061522
        );
    }

    .livro small {
      color: var(--dourado-claro);
      letter-spacing: 0.10em;
      text-transform: uppercase;
    }

    .livro h3 {
      margin: 10px 0 4px;
      font-size: 31px;
    }

    .sobre {
      max-width: 1050px;
      margin: auto;
    }

    .foto-sobre {
      min-height: 430px;
      display: grid;
      place-items: center;
      border: 1px solid var(--borda);
      border-radius: 27px;
      color: var(--dourado-claro);
      font-family: "Cormorant Garamond", serif;
      font-size: 50px;
      background:
        radial-gradient(
          circle at 50% 25%,
          rgba(60, 150, 205, 0.30),
          transparent 30%
        ),
        linear-gradient(
          145deg,
          #123e59,
          #04131f
        );
    }

    .faq {
      max-width: 900px;
      margin: auto;
    }

    details {
      padding: 18px 0;
      border-bottom: 1px solid var(--borda);
    }

    summary {
      color: #f3e7d4;
      font-family: "Cormorant Garamond", serif;
      font-size: 23px;
      cursor: pointer;
    }

    .contato {
      margin: 35px 5vw 80px;
      padding: 34px;
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    footer {
      padding: 32px 5vw;
      border-top: 1px solid rgba(216, 168, 79, 0.20);
      color: var(--texto-suave);
      text-align: center;
    }

    .aurora-flutuante {
      position: fixed;
      z-index: 45;
      right: 22px;
      bottom: 22px;
      width: 63px;
      height: 63px;
      border: 1px solid #a1e7ff;
      border-radius: 50%;
      color: white;
      font-size: 25px;
      cursor: pointer;
      background:
        radial-gradient(
          circle,
          #d2f8ff,
          #2b82b4 47%,
          #061827 72%
        );
      box-shadow: 0 0 30px rgba(75, 190, 235, 0.55);
    }

    dialog {
      width: min(680px, 92vw);
      max-height: 88vh;
      overflow-y: auto;
      padding: 30px;
      border: 1px solid var(--borda);
      border-radius: 24px;
      color: var(--texto);
      background: #061827;
      box-shadow: 0 30px 100px #000;
    }

    dialog::backdrop {
      background: rgba(0, 6, 11, 0.82);
      backdrop-filter: blur(5px);
    }

    .fechar {
      position: absolute;
      top: 13px;
      right: 17px;
      border: 0;
      color: white;
      background: transparent;
      font-size: 29px;
      cursor: pointer;
    }

    label {
      display: block;
      margin: 15px 0;
      color: #e6eaed;
    }

    select,
    .campo-chat {
      width: 100%;
      margin-top: 7px;
      padding: 13px;
      border: 1px solid var(--borda);
      border-radius: 12px;
      color: white;
      background: #03101b;
    }

    .resultado {
      margin-top: 20px;
      padding: 18px;
      border: 1px solid var(--borda);
      border-radius: 16px;
      background: rgba(216, 168, 79, 0.11);
    }

    .cabecalho-chat {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .cabecalho-chat small {
      display: block;
      color: var(--texto-suave);
    }

    .mensagens {
      height: 290px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      padding: 20px 0;
    }

    .mensagem {
      max-width: 82%;
      padding: 13px 16px;
      border-radius: 17px;
      line-height: 1.5;
    }

    .mensagem-aurora {
      align-self: flex-start;
      border: 1px solid rgba(100, 205, 245, 0.24);
      background: #0d344d;
    }

    .mensagem-usuario {
      align-self: flex-end;
      border: 1px solid var(--borda);
      background: rgba(216, 168, 79, 0.17);
    }

    .atalhos {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .atalhos button {
      padding: 8px 12px;
      border: 1px solid var(--borda);
      border-radius: 999px;
      color: white;
      background: transparent;
      cursor: pointer;
    }

    .form-chat {
      display: flex;
      gap: 8px;
      margin-top: 14px;
    }

    .form-chat .campo-chat {
      margin: 0;
    }

    .form-chat button {
      width: 50px;
      border: 0;
      border-radius: 12px;
      background: var(--dourado);
      cursor: pointer;
    }

    .aviso-chat {
      margin-bottom: 0;
      color: var(--texto-suave);
      font-size: 11px;
    }

    @media (max-width: 950px) {
      .botao-menu {
        display: block;
      }

      .menu {
        position: absolute;
        top: 87px;
        left: 4vw;
        right: 4vw;
        display: none;
        flex-direction: column;
        align-items: stretch;
        padding: 22px;
        border: 1px solid var(--borda);
        border-radius: 19px;
        background: #061827;
      }

      .menu.aberto {
        display: flex;
      }

      .hero {
        grid-template-columns: 1fr;
      }

      .chamada-aurora {
        position: relative;
        right: auto;
        bottom: auto;
        width: 100%;
      }

      .cards {
        grid-template-columns: repeat(2, 1fr);
      }

      .duas-colunas {
        grid-template-columns: 1fr;
      }

      .biblioteca {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 620px) {
      .topo {
        padding: 13px 17px;
      }

      .marca strong {
        font-size: 16px;
      }

      .marca small {
        font-size: 7px;
      }

      .simbolo {
        width: 45px;
        height: 45px;
      }

      .secao {
        padding: 65px 20px;
      }

      .hero {
        min-height: auto;
      }

      .hero h1 {
        font-size: 69px;
      }

      .visual {
        min-height: 480px;
      }

      .rari {
        height: 455px;
        width: 88%;
      }

      .rari::before {
        font-size: 61px;
      }

      .aurora-ser {
        right: -35px;
        width: 285px;
        transform: scale(0.85);
      }

      .questionario {
        margin: 25px 20px 0;
        flex-direction: column;
        align-items: flex-start;
      }

      .questionario h2 {
        font-size: 34px;
      }

      .cards {
        grid-template-columns: 1fr;
      }

      .contato {
        margin: 25px 20px 70px;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>

<body>
  <header class="topo">
    <a class="marca" href="#inicio">
      <div class="simbolo">◉</div>

      <div>
        <strong>Rari Favaro</strong>
        <small>Educador e Facilitador Holístico</small>
      </div>
    </a>

    <button
      class="botao-menu"
      id="botaoMenu"
      aria-label="Abrir menu"
    >
      ☰
    </button>

    <nav class="menu" id="menu">
      <a href="#inicio">Início</a>
      <a href="#experiencias">Experiências</a>
      <a href="#biblioteca">Biblioteca</a>
      <a href="#aurora">Aurora</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>

      <a
        class="botao botao-contorno"
        href="https://wa.me/5521975003419"
        target="_blank"
      >
        Agendar
      </a>
    </nav>
  </header>

  <main>
    <section class="secao hero" id="inicio">
      <div>
        <p class="mini-titulo">
          Transformação e consciência
        </p>

        <h1>
          Rari<br>
          <span>Favaro</span>
        </h1>

        <div class="cargo">
          Educador e Facilitador Holístico
        </div>

        <p class="frase">
          A transformação começa quando a consciência
          encontra espaço para <em>florescer.</em>
        </p>

        <div class="botoes">
          <button
            class="botao botao-dourado"
            data-abrir-questionario
          >
            Descobrir nossa experiência
          </button>

          <a
            class="botao botao-contorno"
            href="#experiencias"
          >
            Ver todas as consultas
          </a>
        </div>
      </div>

      <div class="visual">
        <div class="aurora-ser">
          <div class="asa asa-esquerda"></div>
          <div class="asa asa-direita"></div>
          <div class="aurora-rosto">✦</div>
        </div>

        <div class="rari"></div>

        <aside class="chamada-aurora vidro">
          <div class="avatar-aurora">✦</div>

          <div>
            <strong>Aurora está aqui</strong>

            <p>
              Para ouvir, orientar e conversar com você.
            </p>

            <button
              class="link-aurora"
              data-abrir-chat
            >
              Conversar com a Aurora →
            </button>
          </div>
        </aside>
      </div>
    </section>

    <section class="questionario vidro">
      <div>
        <p class="mini-titulo">
          Uma orientação rápida
        </p>

        <h2>Não sabe por onde começar?</h2>

        <p>
          Responda cinco perguntas rápidas e descubra
          qual experiência pode ser mais adequada para
          o momento que você está vivendo.
        </p>

        <div class="vantagens">
          <span>◷ Rápido</span>
          <span>✦ Personalizado</span>
          <span>◇ Seguro e acolhedor</span>
        </div>
      </div>

      <button
        class="botao botao-dourado"
        data-abrir-questionario
      >
        Começar agora →
      </button>
    </section>

    <section class="secao" id="experiencias">
      <div class="cabecalho-secao">
        <p class="mini-titulo">
          Escolha sua experiência
        </p>

        <h2>Nossas consultas e experiências</h2>
      </div>

      <div class="cards">
        <article class="card">
          <div class="icone-card">✦</div>

          <h3>Leitura de Tarot</h3>

          <p>
            Clareza para decisões, relações e momentos
            de transição.
          </p>

          <div class="preco">
            30 minutos • R$ 97<br>
            60 minutos • R$ 167
          </div>

          <a
            href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20agendar%20uma%20Leitura%20de%20Tarot."
            target="_blank"
          >
            Conhecer →
          </a>
        </article>

        <article class="card">
          <div class="icone-card">☉</div>

          <h3>Mapa da Alma</h3>

          <p>
            Astrologia Evolutiva, Numerologia e Registros
            integrados à sua jornada.
          </p>

          <div class="preco">
            R$ 267
          </div>

          <a
            href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20conhecer%20o%20Mapa%20da%20Alma."
            target="_blank"
          >
            Conhecer →
          </a>
        </article>

        <article class="card">
          <div class="icone-card">◉</div>

          <h3>Arquétipos</h3>

          <p>
            Compreenda seus arquétipos e quais desenvolver
            para alcançar seus objetivos.
          </p>

          <div class="preco">
            PDF exclusivo + áudio • R$ 197
          </div>

          <a
            href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20conhecer%20a%20experiência%20com%20Arquétipos."
            target="_blank"
          >
            Conhecer →
          </a>
        </article>

        <article class="card">
          <div class="icone-card">∞</div>

          <h3>Relacionamentos</h3>

          <p>
            Tarot e Numerologia Tântrica para compreender
            a dinâmica da conexão.
          </p>

          <div class="preco">
            Mapa da Conexão • R$ 197
          </div>

          <a
            href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20conhecer%20o%20Mapa%20da%20Conexão."
            target="_blank"
          >
            Conhecer →
          </a>
        </article>

        <article class="card">
          <div class="icone-card">✧</div>

          <h3>Reiki & Harmonização</h3>

          <p>
            Para pessoas, relações, ambientes, pets e
            pontos energéticos.
          </p>

          <div class="preco">
            Aplicação • R$ 50
          </div>

          <a href="#reiki">
            Conhecer →
          </a>
        </article>

        <article class="card">
          <div class="icone-card">△</div>

          <h3>Jornada Terapêutica</h3>

          <p>
            Um acompanhamento personalizado, integrando
            diferentes ferramentas.
          </p>

          <div class="preco">
            Sob consulta
          </div>

          <a
            href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20entender%20a%20Jornada%20Terapêutica."
            target="_blank"
          >
            Conhecer →
          </a>
        </article>
      </div>
    </section>

    <section class="secao duas-colunas" id="reiki">
      <div>
        <p class="mini-titulo">
          Reiki & Harmonização
        </p>

        <h2>Escolha o foco da aplicação</h2>

        <p>
          Cada envio é preparado de acordo com a
          necessidade apresentada.
        </p>
      </div>

      <div class="painel-reiki vidro">
        <div class="linha">
          <strong>Harmonização integral</strong>
          <span>R$ 50</span>
        </div>

        <div class="linha">
          <strong>Relacionamentos</strong>
          <span>R$ 50</span>
        </div>

        <div class="linha">
          <strong>Ambientes</strong>
          <span>R$ 50</span>
        </div>

        <div class="linha">
          <strong>Pets</strong>
          <span>R$ 50</span>
        </div>

        <div class="linha">
          <strong>Pacote 4 aplicações</strong>
          <span>R$ 180</span>
        </div>

        <div class="linha">
          <strong>Pacote 8 aplicações</strong>
          <span>R$ 340</span>
        </div>

        <div class="linha">
          <strong>Pacote 12 aplicações</strong>
          <span>R$ 480</span>
        </div>

        <br>

        <a
          class="botao botao-dourado"
          style="width:100%"
          href="https://wa.me/5521975003419?text=Olá%20Rari,%20quero%20agendar%20Reiki%20e%20Harmonização."
          target="_blank"
        >
          Agendar Reiki
        </a>
      </div>
    </section>

    <section class="secao" id="biblioteca">
      <div class="cabecalho-secao">
        <p class="mini-titulo">
          Biblioteca Aurora
        </p>

        <h2>
          Conhecimento para ampliar perspectivas
        </h2>
      </div>

      <div class="biblioteca">
        <article class="livro">
          <small>Disponível em breve</small>

          <h3>
            Arquétipos — O Código Oculto da Sua Alma
          </h3>

          <p>
            Uma introdução acessível à visão de Jung e à
            presença dos arquétipos em nossa experiência.
          </p>
        </article>

        <article class="livro">
          <small>Em desenvolvimento</small>

          <h3>
            O Princípio do Menor Esforço
          </h3>

          <p>
            Como agir com menos resistência sem confundir
            fluidez com passividade.
          </p>
        </article>

        <article class="livro">
          <small>Em desenvolvimento</small>

          <h3>
            Manual do Recém-Desperto
          </h3>

          <p>
            Um guia prático para manter os pés no chão
            durante grandes mudanças internas.
          </p>
        </article>
      </div>
    </section>

    <section class="secao duas-colunas" id="aurora">
      <div class="foto-sobre">AURORA</div>

      <div>
        <p class="mini-titulo">
          Conheça Aurora
        </p>

        <h2>
          Uma presença serena para acompanhar perguntas
          e processos.
        </h2>

        <p>
          Aurora acolhe diferentes visões de mundo,
          conversa com profundidade e ajuda a organizar
          ideias sem impor respostas prontas.
        </p>

        <button
          class="botao botao-dourado"
          data-abrir-chat
        >
          Conversar com Aurora
        </button>
      </div>
    </section>

    <section class="secao duas-colunas sobre" id="sobre">
      <div class="foto-sobre">RARI</div>

      <div>
        <p class="mini-titulo">Sobre</p>

        <h2>Olá, eu sou Rari Favaro.</h2>

        <p>
          Educador e Facilitador Holístico. Integro Tarot,
          Astrologia Evolutiva, Numerologia, Arquétipos,
          Reiki, Registros e processos terapêuticos em
          experiências personalizadas.
        </p>

        <p>
          Não acredito em respostas prontas. Acredito em
          perguntas capazes de ampliar a percepção e
          favorecer escolhas mais conscientes.
        </p>
      </div>
    </section>

    <section class="secao faq">
      <div class="cabecalho-secao">
        <p class="mini-titulo">
          Dúvidas frequentes
        </p>

        <h2>Antes de começar</h2>
      </div>

      <details>
        <summary>
          Como funciona uma experiência?
        </summary>

        <p>
          Após o contato e a confirmação, você recebe as
          orientações específicas da modalidade escolhida.
          Os atendimentos e entregas acontecem online.
        </p>
      </details>

      <details>
        <summary>
          Preciso ter alguma crença específica?
        </summary>

        <p>
          Não. Cada conversa respeita sua forma de
          compreender a vida, sem impor crenças.
        </p>
      </details>

      <details>
        <summary>
          Como recebo PDFs e áudios?
        </summary>

        <p>
          Digitalmente, pelo WhatsApp ou e-mail.
        </p>
      </details>

      <details>
        <summary>
          Qual é o horário de atendimento?
        </summary>

        <p>
          De segunda a sexta, das 11h às 21h.
        </p>
      </details>

      <details>
        <summary>
          A Aurora substitui o atendimento com o Rari?
        </summary>

        <p>
          Não. Ela orienta, esclarece dúvidas e acompanha
          conversas. As experiências personalizadas são
          conduzidas pelo Rari.
        </p>
      </details>
    </section>

    <section class="contato vidro" id="contato">
      <div>
        <p class="mini-titulo">Contato</p>

        <h2>Vamos conversar?</h2>

        <p>
          Atendimento de segunda a sexta,
          das 11h às 21h.
        </p>
      </div>

      <div class="botoes">
        <a
          class="botao botao-dourado"
          href="https://wa.me/5521975003419"
          target="_blank"
        >
          WhatsApp
        </a>

        <a
          class="botao botao-contorno"
          href="https://instagram.com/rarifavaro.co"
          target="_blank"
        >
          @rarifavaro.co
        </a>
      </div>
    </section>
  </main>

  <footer>
    © 2026 Rari Favaro —
    Conhecimento. Experiência. Transformação.
  </footer>

  <button
    class="aurora-flutuante"
    data-abrir-chat
    aria-label="Conversar com Aurora"
  >
    ✦
  </button>

  <dialog id="questionarioModal">
    <button class="fechar" data-fechar>
      ×
    </button>

    <form id="formQuestionario">
      <p class="mini -titulo">
        Descobrir minha experiência
      </p>

      <h2>Cinco perguntas rápidas</h2>

      <label>
        1. O que você busca compreender?

        <select name="pergunta1">
          <option>
            Uma decisão ou situação atual
          </option>

          <option>
            Quem sou e meus padrões
          </option>

          <option>
            Um relacionamento
          </option>

          <option>
            Equilíbrio energético
          </option>
        </select>
      </label>

      <label>
        2. Você prefere algo ao vivo ou preparado?

        <select name="pergunta2">
          <option>Ao vivo</option>

          <option>
            Preparado em PDF e áudio
          </option>

          <option>Não sei</option>
        </select>
      </label>

      <label>
        3. Qual profundidade deseja?

        <select name="pergunta3">
          <option>Uma questão objetiva</option>
          <option>Uma análise profunda</option>
          <option>Um acompanhamento</option>
        </select>
      </label>

      <label>
        4. Seu foco é mais:

        <select name="pergunta4">
          <option>Clareza</option>
          <option>Autoconhecimento</option>
          <option>Relacionamentos</option>
          <option>Harmonização</option>
        </select>
      </label>

      <label>
        5. Você já sabe qual técnica procura?

        <select name="pergunta5">
          <option>Tarot</option>
          <option>Mapa da Alma</option>
          <option>Arquétipos</option>
          <option>Reiki</option>
          <option>Não sei</option>
        </select>
      </label>

      <button
        class="botao botao-dourado"
        type="submit"
      >
        Ver sugestão
      </button>

      <div
        class="resultado"
        id="resultadoQuestionario"
        hidden
      ></div>
    </form>
  </dialog>

  <dialog id="chatModal">
    <button class="fechar" data-fechar>
      ×
    </button>

    <div class="cabecalho-chat">
      <div class="avatar-aurora">✦</div>

      <div>
        <strong>Aurora</strong>
        <small>presença digital</small>
      </div>
    </div>

    <div class="mensagens" id="mensagens">
      <div class="mensagem mensagem-aurora">
        Olá. Que bom receber você por aqui.
        Sobre o que vamos conversar hoje?
      </div>
    </div>

    <div class="atalhos">
      <button
        data-mensagem="Quero conhecer as experiências"
      >
        Conhecer experiências
      </button>

      <button
        data-mensagem="Não sei por onde começar"
      >
        Não sei por onde começar
      </button>

      <button
        data-mensagem="Quero conversar livremente"
      >
        Conversar livremente
      </button>
    </div>

    <form class="form-chat" id="formChat">
      <input
        class="campo-chat"
        id="campoChat"
        type="text"
        placeholder="Escreva para a Aurora..."
        autocomplete="off"
      >

      <button type="submit">
        ➜
      </button>
    </form>

    <p class="aviso-chat">
      Esta é uma demonstração inicial. A inteligência
      completa da Aurora será integrada posteriormente.
    </p>
  </dialog>

  <script>
    const botaoMenu = document.getElementById("botaoMenu");
    const menu = document.getElementById("menu");

    botaoMenu.addEventListener("click", function () {
      menu.classList.toggle("aberto");
    });

    document.querySelectorAll(".menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("aberto");
      });
    });

    const questionarioModal =
      document.getElementById("questionarioModal");

    const chatModal =
      document.getElementById("chatModal");

    document
      .querySelectorAll("[data-abrir-questionario]")
      .forEach(function (botao) {
        botao.addEventListener("click", function () {
          questionarioModal.showModal();
        });
      });

    document
      .querySelectorAll("[data-abrir-chat]")
      .forEach(function (botao) {
        botao.addEventListener("click", function () {
          chatModal.showModal();
        });
      });

    document
      .querySelectorAll("[data-fechar]")
      .forEach(function (botao) {
        botao.addEventListener("click", function () {
          botao.closest("dialog").close();
        });
      });

    const formQuestionario =
      document.getElementById("formQuestionario");

    const resultadoQuestionario =
      document.getElementById("resultadoQuestionario");

    formQuestionario.addEventListener(
      "submit",
      function (evento) {
        evento.preventDefault();

        const dados = new FormData(formQuestionario);

        const respostas =
          Array.from(dados.values())
            .join(" ")
            .toLowerCase();

        let experiencia = "Leitura de Tarot";

        let explicacao =
          "para ampliar sua clareza sobre uma situação atual.";

        if (
          respostas.includes("relacionamento")
        ) {
          experiencia = "Mapa da Conexão";

          explicacao =
            "para compreender a dinâmica, a comunicação e os padrões entre duas pessoas.";
        } else if (
          respostas.includes("harmonização") ||
          respostas.includes("reiki")
        ) {
          experiencia = "Reiki & Harmonização";

          explicacao =
            "para trabalhar equilíbrio energético de forma personalizada.";
        } else if (
          respostas.includes("arquétipos") ||
          respostas.includes("quem sou")
        ) {
          experiencia =
            "Experiência com Arquétipos";

          explicacao =
            "para reconhecer padrões atuais e desenvolver qualidades relacionadas aos seus objetivos.";
        } else if (
          respostas.includes("análise profunda") ||
          respostas.includes("mapa da alma")
        ) {
          experiencia = "Mapa da Alma";

          explicacao =
            "para uma leitura evolutiva integrada da sua trajetória.";
        }

        const textoWhatsapp =
          encodeURIComponent(
            "Olá Rari, respondi ao questionário e a sugestão foi: " +
            experiencia
          );

        resultadoQuestionario.hidden = false;

        resultadoQuestionario.innerHTML =
          "<strong>Sugestão: " +
          experiencia +
          "</strong>" +
          "<p>Ela pode ser uma boa porta de entrada " +
          explicacao +
          "</p>" +
          '<a class="botao botao-dourado" ' +
          'target="_blank" ' +
          'href="https://wa.me/5521975003419?text=' +
          textoWhatsapp +
          '">' +
          "Falar com Rari" +
          "</a>";
      }
    );

    const mensagens =
      document.getElementById("mensagens");

    const formChat =
      document.getElementById("formChat");

    const campoChat =
      document.getElementById("campoChat");

    function adicionarMensagem(texto, tipo) {
      const elemento =
        document.createElement("div");

      elemento.className =
        "mensagem " +
        (
          tipo === "usuario"
            ? "mensagem-usuario"
            : "mensagem-aurora"
        );

      elemento.textContent = texto;

      mensagens.appendChild(elemento);

      mensagens.scrollTop =
        mensagens.scrollHeight;
    }

    function respostaAurora(texto) {
      const mensagem = texto.toLowerCase();

      if (mensagem.includes("tarot")) {
        return (
          "A Leitura de Tarot pode ser feita em " +
          "30 minutos por R$ 97 ou em 60 minutos " +
          "por R$ 167. Você deseja clareza sobre " +
          "uma questão específica ou aprofundar um tema?"
        );
      }

      if (mensagem.includes("arquét")) {
        return (
          "A experiência com Arquétipos identifica " +
          "forças presentes no seu momento e quais " +
          "podem ser desenvolvidas para apoiar seus " +
          "objetivos. A entrega inclui PDF exclusivo " +
          "e áudio explicativo, por R$ 197."
        );
      }

      if (mensagem.includes("reiki")) {
        return (
          "Há aplicações para harmonização integral, " +
          "relacionamentos, ambientes e pets. Cada " +
          "aplicação custa R$ 50 e também existem pacotes."
        );
      }

      if (mensagem.includes("relacion")) {
        return (
          "O Mapa da Conexão integra Tarot e " +
          "Numerologia Tântrica para compreender a " +
          "dinâmica entre duas pessoas. O investimento " +
          "é de R$ 197."
        );
      }

      if (mensagem.includes("mapa")) {
        return (
          "O Mapa da Alma integra Astrologia Evolutiva, " +
          "Numerologia e Registros em uma leitura " +
          "objetiva da trajetória da pessoa. O " +
          "investimento é de R$ 267."
        );
      }

      if (
        mensagem.includes("não sei") ||
        mensagem.includes("perd") ||
        mensagem.includes("confus")
      ) {
        return (
          "Podemos começar sem pressa. O que está " +
          "pesando mais agora: uma decisão, uma relação, " +
          "a necessidade de se compreender ou a busca " +
          "por equilíbrio?"
        );
      }

      if (
        mensagem.includes("livremente") ||
        mensagem.includes("conversar")
      ) {
        return (
          "Claro. Não precisamos transformar toda " +
          "conversa em uma escolha ou compra. O que " +
          "trouxe você até aqui hoje?"
        );
      }

      return (
        "Entendo. Antes de buscar uma resposta pronta, " +
        "vale organizar melhor a pergunta. O que você " +
        "gostaria de enxergar com mais clareza neste momento?"
      );
    }

    function enviarMensagem(texto) {
      if (!texto.trim()) {
        return;
      }

      adicionarMensagem(texto, "usuario");

      setTimeout(function () {
        adicionarMensagem(
          respostaAurora(texto),
          "aurora"
        );
      }, 600);
    }

    formChat.addEventListener(
      "submit",
      function (evento) {
        evento.preventDefault();

        enviarMensagem(campoChat.value);

        campoChat.value = "";
      }
    );

    document
      .querySelectorAll("[data-mensagem]")
      .forEach(function (botao) {
        botao.addEventListener("click", function () {
          enviarMensagem(
            botao.getAttribute("data-mensagem")
          );
        });
      });
  </script>
</body>
</html>