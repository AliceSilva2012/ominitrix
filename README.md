# Omnitrix Web 👽

<img width="1440" height="900" alt="omnitrix-preview" src="https://github.com/user-attachments/assets/coloque-o-link-da-sua-imagem-aqui">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma aplicação web interativa inspirada no clássico Omnitrix do Ben 10, utilizando manipulação do DOM e animações CSS para simular a transformação holográfica em diferentes alienígenas.

> [!NOTE]
> **🚧 Projeto em Desenvolvimento:** Esta não é a versão final do projeto. Novas funcionalidades, melhorias de design (como efeitos sonoros e controles pelo teclado) estão sendo implementados continuamente. 

--- 

## 💻 Sobre o Projeto

O **Omnitrix Web** é um projeto front-end que simula o funcionamento do relógio icônico do desenho Ben 10. A aplicação renderiza dinamicamente projeções de alienígenas utilizando JavaScript Vanilla, permitindo que o usuário interaja com o visor do relógio para alternar entre os heróis.

Um grande destaque do desenvolvimento foi a decisão arquitetural de migrar de uma API externa instável para o consumo de **assets locais (imagens PNG sem fundo)** estruturados em Objetos JavaScript. Isso garantiu que o projeto se tornasse robusto, com carregamento instantâneo e funcionamento 100% offline, sem depender de servidores de terceiros.

---

## ⚙️ Funcionalidades

- **Renderização Dinâmica:** Troca instantânea da imagem do alienígena e do painel digital com o nome correspondente utilizando um Array de Objetos no JavaScript.
- **Animações CSS Avançadas (Holograma):** Efeito de flutuação suave (`@keyframes`) aplicado aos alienígenas para simular uma projeção holográfica em 3D.
- **Brilho Pulsante Otimizado:** Uso de filtros CSS (`drop-shadow`) combinados com propriedades de otimização de renderização (`will-change` e `transform: translateZ(0)`) para criar a aura verde de energia do núcleo sem bugs visuais durante interações com o mouse.
- **Estrutura Offline:** Gerenciamento de arquivos locais com tratamento de imagens em transparência (Alpha Channel) para sobreposição perfeita no visor do relógio.

---

## 👽 Catálogo de Alienígenas

> Uma seleção dos aliens clássicos já implementados e estruturados no código da aplicação.

| Alienígena | Espécie / Poder Principal |
| :--- | :--- |
| **Chama** | Pirocinético (Manipulação de Fogo) |
| **Quatro Braços** | Tetramando (Super Força) |
| **Besta** | Vulpimancer (Sentidos Aguçados) |
| **Diamante** | Petrosapien (Cristalização) |
| **XLR8** | Kineceleran (Super Velocidade) |
| **Fantasmático** | Ectonurita (Intangibilidade) |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do contêiner principal, visor do relógio e painel digital de informações.
- **CSS3:** 
  - Estilização visual com Flexbox (`flex-direction: column`, `gap`).
  - Posicionamento absoluto (`position: absolute`) para centralizar os elementos perfeitamente no eixo X e Y.
  - Efeitos visuais de Neon (`text-shadow`) e tipografia digital (`monospace`).
- **JavaScript (ES6+):**
  - **Manipulação do DOM:** Atualização em tempo real das propriedades `src` e `innerText` dos elementos HTML.
  - **Estruturas de Dados:** Uso de Arrays e Objetos (`{ nome: "Chama", imagem: "./img/chama.png" }`) para organizar as informações vincul
