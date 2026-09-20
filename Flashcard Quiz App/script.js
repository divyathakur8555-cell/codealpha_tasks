const STORAGE_KEY = "flashcard-quiz";

const questionBank = [
  {
    id: 1,
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"]
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "HomeText Markup Language"
    ]
  },
  {
    id: 3,
    question: "What is 9 × 7?",
    answer: "63",
    options: ["56", "63", "72", "81"]
  },
  {
    id: 4,
    question: "Which language is used to style web pages?",
    answer: "CSS",
    options: ["HTML", "CSS", "Java", "Python"]
  },
  {
    id: 5,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: ["Venus", "Jupiter", "Mars", "Mercury"]
  },
  {
    id: 6,
    question: "What is the chemical symbol for water?",
    answer: "H₂O",
    options: ["CO₂", "O₂", "H₂O", "NaCl"]
  },
  {
    id: 7,
    question: "Which is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean"
    ]
  },
  {
    id: 8,
    question: "What is the value of 12²?",
    answer: "144",
    options: ["124", "132", "144", "154"]
  },
  {
    id: 9,
    question: "Which HTML tag creates a hyperlink?",
    answer: "<a>",
    options: ["<a>", "<link>", "<href>", "<url>"]
  },
  {
    id: 10,
    question: "What is the boiling point of water at sea level?",
    answer: "100°C",
    options: ["50°C", "90°C", "100°C", "120°C"]
  },
  {
    id: 11,
    question: "Who wrote Romeo and Juliet?",
    answer: "William Shakespeare",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen"
    ]
  },
  {
    id: 12,
    question: "Which data type stores true or false?",
    answer: "Boolean",
    options: ["String", "Number", "Boolean", "Array"]
  },
  {
    id: 13,
    question: "What is the largest continent?",
    answer: "Asia",
    options: ["Africa", "Asia", "Europe", "North America"]
  },
  {
    id: 14,
    question: "How many sides does a triangle have?",
    answer: "3",
    options: ["2", "3", "4", "5"]
  },
  {
    id: 15,
    question: "Which organ pumps blood around the body?",
    answer: "Heart",
    options: ["Liver", "Lungs", "Heart", "Kidney"]
  },
  {
    id: 16,
    question: "What is the square root of 81?",
    answer: "9",
    options: ["7", "8", "9", "10"]
  },
  {
    id: 17,
    question: "Which gas do humans need to breathe?",
    answer: "Oxygen",
    options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"]
  },
  {
    id: 18,
    question: "Which device is used to enter text into a computer?",
    answer: "Keyboard",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"]
  },
  {
    id: 19,
    question: "What is the opposite of ancient?",
    answer: "Modern",
    options: ["Old", "Modern", "Historic", "Early"]
  },
  {
    id: 20,
    question: "Which language adds interactivity to web pages?",
    answer: "JavaScript",
    options: ["HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    id: 21,
    question: "How many days are there in a leap year?",
    answer: "366",
    options: ["364", "365", "366", "367"]
  },
  {
    id: 22,
    question: "What is 15 + 27?",
    answer: "42",
    options: ["32", "40", "42", "52"]
  },
  {
    id: 23,
    question: "Which animal is known as the king of the jungle?",
    answer: "Lion",
    options: ["Tiger", "Lion", "Elephant", "Leopard"]
  },
  {
    id: 24,
    question: "What is the first month of the year?",
    answer: "January",
    options: ["December", "January", "March", "February"]
  },
  {
    id: 25,
    question: "Which instrument has black and white keys?",
    answer: "Piano",
    options: ["Guitar", "Piano", "Flute", "Drum"]
  },
  {
    id: 26,
    question: "What is the freezing point of water?",
    answer: "0°C",
    options: ["0°C", "10°C", "32°C", "100°C"]
  },
  {
    id: 27,
    question: "Which country is famous for the pyramids of Giza?",
    answer: "Egypt",
    options: ["Greece", "Egypt", "Mexico", "India"]
  },
  {
    id: 28,
    question: "What is 100 divided by 4?",
    answer: "25",
    options: ["20", "25", "30", "40"]
  },
  {
    id: 29,
    question: "Which part of a plant absorbs water from the soil?",
    answer: "Roots",
    options: ["Leaves", "Flowers", "Roots", "Stem"]
  },
  {
    id: 30,
    question: "What is the plural of mouse?",
    answer: "Mice",
    options: ["Mouses", "Mice", "Mousees", "Meese"]
  },
  {
    id: 31,
    question: "Which HTML element is used for the largest heading?",
    answer: "<h1>",
    options: ["<h1>", "<h2>", "<heading>", "<title>"]
  },
  {
    id: 32,
    question: "What does CSS primarily control?",
    answer: "Web page styling",
    options: [
      "Database storage",
      "Web page styling",
      "Server security",
      "File compression"
    ]
  },
  {
    id: 33,
    question: "Which symbol begins a single-line comment in JavaScript?",
    answer: "//",
    options: ["<!--", "//", "#", "/*"]
  },
  {
    id: 34,
    question: "Which method converts JSON text into a JavaScript object?",
    answer: "JSON.parse()",
    options: [
      "JSON.convert()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.read()"
    ]
  },
  {
    id: 35,
    question: "Which browser storage API saves data across sessions?",
    answer: "localStorage",
    options: [
      "temporaryStorage",
      "localStorage",
      "pageStorage",
      "sessionOnly"
    ]
  },
  {
    id: 36,
    question: "Which keyword declares a constant in JavaScript?",
    answer: "const",
    options: ["constant", "let", "const", "fixed"]
  },
  {
    id: 37,
    question: "Which keyword declares a changeable block-scoped variable?",
    answer: "let",
    options: ["varies", "let", "change", "mutable"]
  },
  {
    id: 38,
    question: "Which HTML attribute provides alternative text for an image?",
    answer: "alt",
    options: ["src", "title", "alt", "text"]
  },
  {
    id: 39,
    question: "Which CSS property changes text color?",
    answer: "color",
    options: ["font-color", "text-color", "color", "foreground"]
  },
  {
    id: 40,
    question: "Which CSS property changes the background color?",
    answer: "background-color",
    options: [
      "color-background",
      "background-color",
      "bg-color",
      "fill"
    ]
  },
  {
    id: 41,
    question: "What is the result of 2 + 2 × 3?",
    answer: "8",
    options: ["10", "8", "12", "6"]
  },
  {
    id: 42,
    question: "How many minutes are in one hour?",
    answer: "60",
    options: ["30", "45", "60", "90"]
  },
  {
    id: 43,
    question: "Which shape has four equal sides?",
    answer: "Square",
    options: ["Triangle", "Rectangle", "Square", "Circle"]
  },
  {
    id: 44,
    question: "Which sense organ is used for seeing?",
    answer: "Eyes",
    options: ["Ears", "Eyes", "Nose", "Skin"]
  },
  {
    id: 45,
    question: "Which star is closest to Earth?",
    answer: "The Sun",
    options: ["Sirius", "Polaris", "The Sun", "Betelgeuse"]
  },
  {
    id: 46,
    question: "What is the main language spoken in Brazil?",
    answer: "Portuguese",
    options: ["Spanish", "Portuguese", "French", "English"]
  },
  {
    id: 47,
    question: "Which metal is liquid at room temperature?",
    answer: "Mercury",
    options: ["Iron", "Gold", "Mercury", "Copper"]
  },
  {
    id: 48,
    question: "What process allows plants to make food?",
    answer: "Photosynthesis",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Fermentation"
    ]
  },
  {
    id: 49,
    question: "Which blood cells help fight infection?",
    answer: "White blood cells",
    options: [
      "Red blood cells",
      "White blood cells",
      "Platelets",
      "Plasma cells"
    ]
  },
  {
    id: 50,
    question: "Which number is a prime number?",
    answer: "17",
    options: ["15", "17", "21", "27"]
  }
];

function isValidCard(card) {
  return (
    card &&
    typeof card.question === "string" &&
    typeof card.answer === "string" &&
    Array.isArray(card.options) &&
    card.options.length === 4 &&
    card.question.trim() !== "" &&
    card.answer.trim() !== "" &&
    card.options.every(
      option =>
        typeof option === "string" &&
        option.trim() !== ""
    )
  );
}

const validQuestionBank = questionBank.filter(isValidCard);

let cards = loadCards();
let deck = [];
let currentIndex = 0;
let showingAnswer = false;
let hasCheckedAnswer = false;
let selectedAnswer = null;
let score = 0;
let answeredCount = 0;
let editingCardId = null;

const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score-text");
const message = document.getElementById("message");
const cardSide = document.getElementById("card-side");
const cardContent = document.getElementById("card-content");
const answerOptions = document.getElementById("answer-options");

const showAnswerButton = document.getElementById("show-answer-button");
const checkAnswerButton = document.getElementById("check-answer-button");
const tryAgainButton = document.getElementById("try-again-button");

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const shuffleButton = document.getElementById("shuffle-button");

const addCardButton = document.getElementById("add-card-button");
const editCardButton = document.getElementById("edit-card-button");
const deleteCardButton = document.getElementById("delete-card-button");
const resetButton = document.getElementById("reset-button");
const resetScoreButton = document.getElementById("reset-score-button");

const cardDialog = document.getElementById("card-dialog");
const cardForm = document.getElementById("card-form");
const dialogTitle = document.getElementById("dialog-title");

const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");
const optionTwoInput = document.getElementById("option-two-input");
const optionThreeInput = document.getElementById("option-three-input");
const optionFourInput = document.getElementById("option-four-input");

const closeDialogButton = document.getElementById("close-dialog-button");
const cancelButton = document.getElementById("cancel-button");

function loadCards() {
  const savedCards = localStorage.getItem(STORAGE_KEY);

  if (!savedCards) {
    return [...validQuestionBank];
  }

  try {
    const parsedCards = JSON.parse(savedCards);

    const validSavedCards = parsedCards.filter(isValidCard);

    if (validSavedCards.length > 0) {
      return validSavedCards;
    }
  } catch (error) {
    console.error("Could not load saved cards:", error);
  }

  localStorage.removeItem(STORAGE_KEY);
  return [...validQuestionBank];
}

function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index]
    ];
  }

  return shuffled;
}

function startRandomSession() {
  if (cards.length === 0) {
    cards = [...validQuestionBank];
  }

  deck = shuffleArray(cards);
  currentIndex = 0;
  resetQuestionState();
  renderCard();
}

function getCurrentCard() {
  return deck[currentIndex];
}

function setMessage(text = "", type = "") {
  message.textContent = text;
  message.className = `message ${type}`;
}

function resetQuestionState() {
  showingAnswer = false;
  hasCheckedAnswer = false;
  selectedAnswer = null;
  setMessage("");
}

function renderOptions(card, showFeedback = false) {
  answerOptions.innerHTML = "";

  const options = shuffleArray(card.options);

  options.forEach(option => {
    const label = document.createElement("label");
    label.className = "answer-option";

    if (showFeedback && option === card.answer) {
      label.classList.add("correct");
    }

    if (
      showFeedback &&
      option === selectedAnswer &&
      option !== card.answer
    ) {
      label.classList.add("incorrect");
    }

    const input = document.createElement("input");

    input.type = "radio";
    input.name = "answer";
    input.value = option;
    input.checked = option === selectedAnswer;
    input.disabled = showFeedback;

    input.addEventListener("change", () => {
      selectedAnswer = option;
      checkAnswerButton.disabled = false;
    });

    const text = document.createElement("span");
    text.textContent = option;

    label.appendChild(input);
    label.appendChild(text);
    answerOptions.appendChild(label);
  });
}

function renderCard() {
  const currentCard = getCurrentCard();

  if (!currentCard) {
    progressText.textContent = "No cards";
    cardSide.textContent = "Empty deck";
    cardContent.textContent = "Add a flashcard to begin.";
    answerOptions.innerHTML = "";

    showAnswerButton.classList.add("hidden");
    checkAnswerButton.classList.add("hidden");
    tryAgainButton.classList.add("hidden");

    return;
  }

  progressText.textContent =
    `Question ${currentIndex + 1} of ${deck.length}`;

  scoreText.textContent = `Score: ${score} / ${answeredCount}`;

  cardSide.textContent = showingAnswer ? "Answer" : "Question";

  cardContent.textContent = showingAnswer
    ? currentCard.answer
    : currentCard.question;

  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === deck.length - 1;

  if (showingAnswer) {
    answerOptions.innerHTML = "";
    showAnswerButton.classList.add("hidden");
    checkAnswerButton.classList.add("hidden");
    tryAgainButton.classList.add("hidden");
    return;
  }

  if (hasCheckedAnswer) {
    showAnswerButton.classList.add("hidden");
    checkAnswerButton.classList.add("hidden");
    tryAgainButton.classList.remove("hidden");
    renderOptions(currentCard, true);
    return;
  }

  showAnswerButton.classList.remove("hidden");
  checkAnswerButton.classList.remove("hidden");
  checkAnswerButton.disabled = selectedAnswer === null;
  tryAgainButton.classList.add("hidden");

  renderOptions(currentCard);
}

function showAnswer() {
  showingAnswer = true;
  renderCard();
}

function checkAnswer() {
  const currentCard = getCurrentCard();

  if (!selectedAnswer) {
    setMessage(
      "Please choose one of the four answers.",
      "incorrect"
    );
    return;
  }

  hasCheckedAnswer = true;
  answeredCount += 1;

  if (selectedAnswer === currentCard.answer) {
    score += 1;
    setMessage("Correct! Well done.", "correct");
  } else {
    setMessage(
      `Incorrect. Correct answer: ${currentCard.answer}`,
      "incorrect"
    );
  }

  renderCard();
}

function tryAgain() {
  resetQuestionState();
  renderCard();
}

function openAddDialog() {
  editingCardId = null;
  dialogTitle.textContent = "Add Flashcard";

  questionInput.value = "";
  answerInput.value = "";
  optionTwoInput.value = "";
  optionThreeInput.value = "";
  optionFourInput.value = "";

  cardDialog.showModal();
  questionInput.focus();
}

function openEditDialog() {
  const currentCard = getCurrentCard();

  if (!currentCard) {
    return;
  }

  editingCardId = currentCard.id;
  dialogTitle.textContent = "Edit Flashcard";

  questionInput.value = currentCard.question;
  answerInput.value = currentCard.answer;

  const wrongOptions = currentCard.options.filter(
    option => option !== currentCard.answer
  );

  optionTwoInput.value = wrongOptions[0] || "";
  optionThreeInput.value = wrongOptions[1] || "";
  optionFourInput.value = wrongOptions[2] || "";

  cardDialog.showModal();
  questionInput.focus();
}

function closeDialog() {
  cardDialog.close();
  cardForm.reset();
}

function saveCard(event) {
  event.preventDefault();

  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  const options = [
    answer,
    optionTwoInput.value.trim(),
    optionThreeInput.value.trim(),
    optionFourInput.value.trim()
  ];

  if (
    question === "" ||
    options.some(option => option === "")
  ) {
    alert(
      "Please enter a question and all four answer options."
    );
    return;
  }

  const normalizedOptions = options.map(option =>
    option.toLowerCase()
  );

  if (new Set(normalizedOptions).size !== 4) {
    alert("All four answer options must be different.");
    return;
  }

  const newCard = {
    id: editingCardId || Date.now(),
    question,
    answer,
    options
  };

  if (editingCardId === null) {
    cards = [...cards, newCard];
  } else {
    cards = cards.map(card =>
      card.id === editingCardId ? newCard : card
    );
  }

  saveCards();
  closeDialog();
  startRandomSession();
}

function deleteCurrentCard() {
  const currentCard = getCurrentCard();

  if (!currentCard) {
    return;
  }

  const confirmed = confirm(
    "Are you sure you want to delete this flashcard?"
  );

  if (!confirmed) {
    return;
  }

  cards = cards.filter(card => card.id !== currentCard.id);

  saveCards();
  startRandomSession();
}

showAnswerButton.addEventListener("click", showAnswer);
checkAnswerButton.addEventListener("click", checkAnswer);
tryAgainButton.addEventListener("click", tryAgain);

previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    resetQuestionState();
    renderCard();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < deck.length - 1) {
    currentIndex += 1;
    resetQuestionState();
    renderCard();
  }
});

shuffleButton.addEventListener("click", startRandomSession);
resetButton.addEventListener("click", startRandomSession);

resetScoreButton.addEventListener("click", () => {
  score = 0;
  answeredCount = 0;
  resetQuestionState();
  renderCard();
});

addCardButton.addEventListener("click", openAddDialog);
editCardButton.addEventListener("click", openEditDialog);
deleteCardButton.addEventListener("click", deleteCurrentCard);

cardForm.addEventListener("submit", saveCard);
closeDialogButton.addEventListener("click", closeDialog);
cancelButton.addEventListener("click", closeDialog);

cardDialog.addEventListener("click", event => {
  if (event.target === cardDialog) {
    closeDialog();
  }
});

startRandomSession();