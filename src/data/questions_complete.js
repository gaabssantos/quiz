const data = [
    {
      category: "HTML",
      questions: [
        {
          id: 1,
          question: "Qual tag cria um parágrafo?",
          options: ["<p>", "<h1>", "<text>", "<ul>"],
          answer: "<p>",
          tip: "É uma tag de uma letra apenas",
        },
        {
          id: 2,
          question: "Qual atributo adiciona um link para a tag a?",
          options: ["alt", "href", "src", "link"],
          answer: "href",
          tip: "Hyperlink Reference",
        },
        {
          id: 3,
          question: "As listas não ordenadas tem a tag de:",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          answer: "<ul>",
        },
        {
          id: 4,
          question: "Qual atributo deixa o input obrigatório?",
          options: ["placeholder", "value", "required", "maxlength"],
          answer: "required",
        },
        {
          id: 5,
          question: "A tag semântica indicada para rodapés é a:",
          options: ["div", "main", "section", "footer"],
          answer: "footer",
        },
      ],
    },
    {
      category: "CSS",
      questions: [
        {
          id: 6,
          question: "Qual regra altera a cor de um elemento?",
          options: ["color", "background-color", "font-size", "transition"],
          answer: "color",
          tip: "Cor em inglês",
        },
        {
          id: 7,
          question: "Para aumentar a fonte de um elemento utilizamos:",
          options: ["font", "text-transform", "font-size", "hover"],
          answer: "font-size",
        },
        {
          id: 8,
          question: "A posição que deixa um elemento fixo é a:",
          options: ["static", "absolute", "fixed", "relative"],
          answer: "fixed",
        },
      ],
    },
    {
      category: "JavaScript",
      questions: [
        {
          id: 9,
          question: "O que é Vanilla JavaScript?",
          options: [
            "JavaScript puro",
            "Uma biblioteca JavaScript",
            "Um framework JavaScript",
            "Um compilador de JavaScript",
          ],
          answer: "JavaScript puro",
        },
        {
          id: 10,
          question: "Com qual instrução declaramos uma constante em JavaScript?",
          options: ["const", "let", "var", "define"],
          answer: "const",
        },
        {
          id: 11,
          question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
          options: ["string", "number", "boolean", "float"],
          answer: "float",
        },
        {
          id: 12,
          question: "Qual dos métodos a seguir seleciona um elemento?",
          options: ["querySelector", "parseInt", "sort", "reduce"],
          answer: "querySelector",
        },
        {id: 13,
          question:
            "Qual destas propriedades da a quantidade de elementos de um array?",
          options: ["qty", "length", "items", "index"],
          answer: "length",
        },
      ],
    },
  ];
  
  export default data;