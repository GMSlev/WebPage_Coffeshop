# WebPage_Coffeshop

☕ Originne

Site institucional fictício de uma marca de cafés especiais, desenvolvido com o objetivo de praticar JavaScript na web e, principalmente, aprofundar o estudo de responsividade.

O projeto simula uma página única (one page) com apresentação da marca, diferenciais, produtos e galeria de fotos, adaptando-se a telas de computador, tablet e celular.

🎯 Objetivos de aprendizado
Praticar JavaScript puro na manipulação do DOM e no tratamento de eventos.
Construir layouts responsivos sem depender de frameworks.
Aplicar boas práticas de acessibilidade e desempenho em uma página real.
Organizar um projeto front-end simples e legível.

🛠️ Tecnologias utilizadas
Tecnologia	Uso no projeto
HTML5	Estrutura semântica da página (header, nav, main, section, article, figure, footer)
CSS3	Estilização, layout e responsividade
JavaScript (Vanilla)	Lógica do carrossel de imagens
Google Fonts	Tipografia com as fontes Montserrat e Raleway

Nenhum framework ou biblioteca externa de JavaScript ou CSS é utilizado.

📱 Responsividade

O foco principal do projeto. Os recursos aplicados foram:

Meta viewport para o correto dimensionamento em dispositivos móveis.
Media queries (max-width) com pontos de quebra em 900px e 768px.
CSS Grid com auto-fit e minmax() nos cards de diferenciais e de produtos, que se reorganizam sozinhos conforme a largura disponível.
Flexbox no cabeçalho, na seção inicial e no rodapé, com flex-wrap para quebra de linha em telas menores.
aspect-ratio no carrossel, mantendo a proporção das fotos em qualquer tela.
Imagens fluidas (max-width: 100% e height: auto) com object-fit para evitar distorção.
Variáveis CSS (:root) para cores e para a altura do cabeçalho, ajustada por breakpoint.
Cabeçalho fixo (position: sticky) com scroll-padding-top, para que as âncoras não fiquem escondidas atrás dele.
Área de toque adequada nos botões do carrossel para uso no celular.
Gesto de deslizar (swipe) no carrossel em telas sensíveis ao toque.

⚙️ JavaScript aplicado

O carrossel da seção "Nosso espaço" foi escrito do zero, exercitando:

Seleção de elementos com querySelector e querySelectorAll.
Eventos de click, mouseenter, mouseleave, focusin, focusout, touchstart e touchend.
Alternância de classes com classList.toggle.
Atualização de atributos de acessibilidade (aria-current).
Troca automática de slides com setInterval e clearInterval.
Pausa da troca automática ao passar o mouse, focar ou tocar no carrossel.
Respeito à preferência do sistema por menos animações, com matchMedia('(prefers-reduced-motion: reduce)').
Código isolado em uma função autoexecutável (IIFE), sem variáveis globais.

♿ Acessibilidade e desempenho
Textos alternativos descritivos em todas as imagens de conteúdo.
Link "Pular para o conteúdo" para navegação por teclado.
Indicador de foco visível em links e botões.
Atributos aria-label e aria-roledescription no carrossel.
Suporte a prefers-reduced-motion no CSS e no JavaScript.
Carregamento adiado das imagens abaixo da primeira dobra (loading="lazy").
Largura e altura declaradas nas imagens, evitando saltos de layout durante o carregamento.
Imagens otimizadas nos formatos JPG, PNG e WebP.

📌 Observações
A marca Originne e os produtos apresentados são fictícios e usados apenas para fins de estudo.
Os links das redes sociais no rodapé são de exemplo e podem ser substituídos pelos endereços reais.

👨‍💻 Autor

Desenvolvido por Gabriel Martinez como projeto de estudo em desenvolvimento web.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed7b559d-14c3-4444-a3d4-dd6132a6f583/deploy-status?branch=main)](https://app.netlify.com/projects/originne/deploys)
