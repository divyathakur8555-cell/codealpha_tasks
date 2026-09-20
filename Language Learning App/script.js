const STORAGE_KEY = "astrexData";

const defaultData = {
  currentLanguage: "spanish",
  xp: 0,
  streak: 0,
  lastLogin: null,
  lessonsCompleted: 0,
  wordsLearned: 0,
  quizzesTaken: 0,
  quizScores: [],
  progress: {
    vocabulary: 0,
    grammar: 0,
    phrases: 0,
    listening: 0
  },
  activity: [],
  achievements: []
};

const content = {
  spanish: {
    vocabulary: [
      { word: "Hello", translation: "Hola", type: "Greeting" },
      { word: "Goodbye", translation: "Adiós", type: "Greeting" },
      { word: "Thank you", translation: "Gracias", type: "Phrase" },
      { word: "Please", translation: "Por favor", type: "Phrase" },
      { word: "Yes", translation: "Sí", type: "Basic" },
      { word: "No", translation: "No", type: "Basic" },
      { word: "Water", translation: "Agua", type: "Food" },
      { word: "Food", translation: "Comida", type: "Food" },
      { word: "House", translation: "Casa", type: "Place" },
      { word: "School", translation: "Escuela", type: "Place" }
    ],
    grammar: [
      { word: "I am", translation: "Yo soy/estoy", type: "Verb" },
      { word: "You are", translation: "Tú eres/estás", type: "Verb" },
      { word: "He/She is", translation: "Él/Ella es/está", type: "Verb" },
      { word: "We are", translation: "Nosotros somos/estamos", type: "Verb" },
      { word: "They are", translation: "Ellos son/estánumber", type: "Verb" }
    ],
    phrases: [
      { word: "How are you?", translation: "¿Cómo estás?", type: "Question" },
      { word: "What's your name?", translation: "¿Cómo te llamas?", type: "Question" },
      { word: "I don't understand", translation: "No entiendo", type: "Statement" },
      { word: "Nice to meet you", translation: "Mucho gusto", type: "Greeting" },
      { word: "Excuse me", translation: "Disculpe", type: "Polite" }
    ]
  },
  french: {
    vocabulary: [
      { word: "Hello", translation: "Bonjour", type: "Greeting" },
      { word: "Goodbye", translation: "Au revoir", type: "Greeting" },
      { word: "Thank you", translation: "Merci", type: "Phrase" },
      { word: "Please", translation: "S'il vous plaît", type: "Phrase" },
      { word: "Yes", translation: "Oui", type: "Basic" },
      { word: "No", translation: "Non", type: "Basic" },
      { word: "Water", translation: "Eau", type: "Food" },
      { word: "Food", translation: "Nourriture", type: "Food" },
      { word: "House", translation: "Maison", type: "Place" },
      { word: "School", translation: "École", type: "Place" }
    ],
    grammar: [
      { word: "I am", translation: "Je suis", type: "Verb" },
      { word: "You are", translation: "Tu es", type: "Verb" },
      { word: "He/She is", translation: "Il/Elle est", type: "Verb" },
      { word: "We are", translation: "Nous sommes", type: "Verb" },
      { word: "They are", translation: "Ils/Elles sont", type: "Verb" }
    ],
    phrases: [
      { word: "How are you?", translation: "Comment ça va?", type: "Question" },
      { word: "What's your name?", translation: "Comment vous appelez-vous?", type: "Question" },
      { word: "I don't understand", translation: "Je ne comprends pas", type: "Statement" },
      { word: "Nice to meet you", translation: "Enchanté", type: "Greeting" },
      { word: "Excuse me", translation: "Excusez-moi", type: "Polite" }
    ]
  },
  german: {
    vocabulary: [
      { word: "Hello", translation: "Hallo", type: "Greeting" },
      { word: "Goodbye", translation: "Auf Wiedersehen", type: "Greeting" },
      { word: "Thank you", translation: "Danke", type: "Phrase" },
      { word: "Please", translation: "Bitte", type: "Phrase" },
      { word: "Yes", translation: "Ja", type: "Basic" },
      { word: "No", translation: "Nein", type: "Basic" },
      { word: "Water", translation: "Wasser", type: "Food" },
      { word: "Food", translation: "Essen", type: "Food" },
      { word: "House", translation: "Haus", type: "Place" },
      { word: "School", translation: "Schule", type: "Place" }
    ],
    grammar: [
      { word: "I am", translation: "Ich bin", type: "Verb" },
      { word: "You are", translation: "Du bist", type: "Verb" },
      { word: "He/She is", translation: "Er/Sie ist", type: "Verb" },
      { word: "We are", translation: "Wir sind", type: "Verb" },
      { word: "They are", translation: "Sie sind", type: "Verb" }
    ],
    phrases: [
      { word: "How are you?", translation: "Wie geht es dir?", type: "Question" },
      { word: "What's your name?", translation: "Wie heißt du?", type: "Question" },
      { word: "I don't understand", translation: "Ich verstehe nicht", type: "Statement" },
      { word: "Nice to meet you", translation: "Freut mich", type: "Greeting" },
      { word: "Excuse me", translation: "Entschuldigung", type: "Polite" }
    ]
  },
  japanese: {
    vocabulary: [
      { word: "Hello", translation: "こんにちは (Konnichiwa)", type: "Greeting" },
      { word: "Goodbye", translation: "さようなら (Sayōnara)", type: "Greeting" },
      { word: "Thank you", translation: "ありがとう (Arigatō)", type: "Phrase" },
      { word: "Please", translation: "お願いします (Onegaishimasu)", type: "Phrase" },
      { word: "Yes", translation: "はい (Hai)", type: "Basic" },
      { word: "No", translation: "いいえ (Iie)", type: "Basic" },
      { word: "Water", translation: "水 (Mizu)", type: "Food" },
      { word: "Food", translation: "食べ物 (Tabemono)", type: "Food" },
      { word: "House", translation: "家 (Ie)", type: "Place" },
      { word: "School", translation: "学校 (Gakkō)", type: "Place" }
    ],
    grammar: [
      { word: "I am", translation: "私は～です (Watashi wa... desu)", type: "Verb" },
      { word: "You are", translation: "あなたは～です (Anata wa... desu)", type: "Verb" },
      { word: "He/She is", translation: "彼/彼女は～です (Kare/Kanojo wa... desu)", type: "Verb" },
      { word: "We are", translation: "私たちは～です (Watashitachi wa... desu)", type: "Verb" },
      { word: "They are", translation: "彼らは～です (Karera wa... desu)", type: "Verb" }
    ],
    phrases: [
      { word: "How are you?", translation: "お元気ですか (Ogenki desu ka?)", type: "Question" },
      { word: "What's your name?", translation: "お名前は何ですか (Onamae wa nan desu ka?)", type: "Question" },
      { word: "I don't understand", translation: "わかりません (Wakarimasen)", type: "Statement" },
      { word: "Nice to meet you", translation: "はじめまして (Hajimemashite)", type: "Greeting" },
      { word: "Excuse me", translation: "すみません (Sumimasen)", type: "Polite" }
    ]
  }
};

let data;
let currentFlashcards = [];
let currentFlashcardIndex = 0;
let flashcardFlipped = false;
let currentQuiz = null;
let quizQuestionIndex = 0;
let quizScore = 0;
let quizTimer = null;
let quizSeconds = 0;

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultData);

  const loaded = JSON.parse(saved);
  return {
    ...structuredClone(defaultData),
    ...loaded,
    progress: { ...defaultData.progress, ...(loaded.progress || {}) }
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function init() {
  data = loadData();
  checkStreak();
  updateUI();
  setupEvents();
  loadDailyFocus();
}

function checkStreak() {
  const today = new Date().toDateString();
  if (data.lastLogin !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (data.lastLogin === yesterday.toDateString()) {
      data.streak++;
    } else if (data.lastLogin !== today) {
      data.streak = 1;
    }

    data.lastLogin = today;
    saveData();
  }
}

function updateUI() {
  document.getElementById("xp-display").textContent = `${data.xp} XP`;
  document.getElementById("streak-display").textContent = data.streak;
  document.getElementById("lessons-display").textContent = data.lessonsCompleted;
  document.getElementById("words-display").textContent = data.wordsLearned;

  const avg = data.quizScores.length > 0
    ? Math.round(data.quizScores.reduce((a, b) => a + b, 0) / data.quizScores.length)
    : 0;
  document.getElementById("avg-display").textContent = `${avg}%`;

  document.getElementById("language-select").value = data.currentLanguage;

  updateProgress();
  loadActivity();
  loadAchievements();
}

function updateProgress() {
  const total = Object.values(data.progress).reduce((a, b) => a + b, 0);
  const highest = Object.keys(data.progress).length * 100;
  const percent = Math.round((total / highest) * 100);

  document.getElementById("overall-progress").textContent = `${percent}%`;
  document.querySelector(".progress-ring-fill").setAttribute(
    "stroke-dasharray",
    `${percent}, 100`
  );

  document.getElementById("vocab-progress").style.width = `${data.progress.vocabulary}%`;
  document.getElementById("vocab-percent").textContent = `${data.progress.vocabulary}%`;

  document.getElementById("grammar-progress").style.width = `${data.progress.grammar}%`;
  document.getElementById("grammar-percent").textContent = `${data.progress.grammar}%`;

  document.getElementById("phrases-progress").style.width = `${data.progress.phrases}%`;
  document.getElementById("phrases-percent").textContent = `${data.progress.phrases}%`;
}

function loadActivity() {
  const container = document.getElementById("recent-activity");
  if (data.activity.length === 0) {
    container.innerHTML = "<p>No recent activity yet. Start learning!</p>";
    return;
  }

  container.innerHTML = data.activity.slice(0, 5).map(act => `
    <div style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
      <strong>${act.type}</strong>
      <p style="font-size: 0.85rem; color: #6b7280;">${act.details} - ${act.date}</p>
    </div>
  `).join("");
}

function loadDailyFocus() {
  const categories = ["Vocabulary", "Grammar", "Phrases"];
  const random = categories[Math.floor(Math.random() * categories.length)];
  document.getElementById("focus-category").textContent = random;
}

function loadAchievements() {
  const container = document.getElementById("achievements");
  const achievements = [
    { icon: "🌟", title: "First Steps", desc: "Complete your first lesson", unlocked: data.lessonsCompleted >= 1 },
    { icon: "🔥", title: "On Fire", desc: "Reach a 7-day streak", unlocked: data.streak >= 7 },
    { icon: "📚", title: "Scholar", desc: "Learn 50 words", unlocked: data.wordsLearned >= 50 },
    { icon: "🎯", title: "Quiz Master", desc: "Score 100% on a quiz", unlocked: data.quizScores.includes(100) },
    { icon: "💪", title: "Dedicated", desc: "Complete 10 lessons", unlocked: data.lessonsCompleted >= 10 },
    { icon: "🏆", title: "Champion", desc: "Earn 1000 XP", unlocked: data.xp >= 1000 }
  ];

  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card ${ach.unlocked ? '' : 'locked'}">
      <span class="achievement-icon">${ach.icon}</span>
      <h4>${ach.title}</h4>
      <p style="font-size: 0.85rem; color: #6b7280;">${ach.desc}</p>
    </div>
  `).join("");
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.id === tabId);
  });

  document.getElementById("page-title").textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1);
}

function setupEvents() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("language-select").addEventListener("change", (e) => {
    data.currentLanguage = e.target.value;
    saveData();
    showToast("Language changed!");
  });

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => loadLessons(btn.dataset.category));
  });
}

function loadLessons(category) {
  const container = document.getElementById("lessons-list");
  const lang = content[data.currentLanguage][category] || [];

  if (lang.length === 0) {
    container.innerHTML = "<p>No lessons available for this category yet.</p>";
    return;
  }

  container.innerHTML = lang.map((item, idx) => `
    <div class="lesson-item">
      <div class="lesson-info">
        <h4>${item.word}</h4>
        <p>${item.translation} • ${item.type}</p>
      </div>
      <button class="button button-primary" onclick="completeLesson('${category}', ${idx})">
        Complete
      </button>
    </div>
  `).join("");
}

function completeLesson(category, index) {
  data.lessonsCompleted++;
  data.wordsLearned++;
  data.xp += 10;
  data.progress[category] = Math.lowest(100, data.progress[category] + 10);

  data.activity.unshift({
    type: "Lesson Completed",
    details: `${category} - Lesson ${index + 1}`,
    date: new Date().toLocaleDateString()
  });

  saveData();
  updateUI();
  showToast("Lesson completed! +10 XP");
}

function startFlashcards() {
  const category = document.getElementById("flashcard-category").value;
  const lang = content[data.currentLanguage];

  currentFlashcards = [];

  if (category === "all") {
    Object.values(lang).forEach(elements => {
      currentFlashcards.push(...elements);
    });
  } else {
    currentFlashcards = lang[category] || [];
  }

  if (currentFlashcards.length === 0) {
    showToast("No flashcards available!");
    return;
  }

  currentFlashcardIndex = 0;
  flashcardFlipped = false;

  document.getElementById("flashcard-setup").style.display = "none";
  document.getElementById("flashcard-area").style.display = "block";

  showFlashcard();
}

function showFlashcard() {
  const card = currentFlashcards[currentFlashcardIndex];
  document.getElementById("fc-word").textContent = card.word;
  document.getElementById("fc-category").textContent = card.type;
  document.getElementById("fc-translation").textContent = card.translation;
  document.getElementById("fc-type").textContent = data.currentLanguage;

  document.getElementById("flashcard").classList.remove("flipped");
  flashcardFlipped = false;

  const percent = ((currentFlashcardIndex + 1) / currentFlashcards.length) * 100;
  document.getElementById("fc-progress").style.width = `${percent}%`;
  document.getElementById("fc-count").textContent = `${currentFlashcardIndex + 1} / ${currentFlashcards.length}`;
}

function flipFlashcard() {
  const card = document.getElementById("flashcard");
  flashcardFlipped = !flashcardFlipped;

  if (flashcardFlipped) {
    card.classList.add("flipped");
  } else {
    card.classList.remove("flipped");
  }
}

function nextFlashcard() {
  if (currentFlashcardIndex < currentFlashcards.length - 1) {
    currentFlashcardIndex++;
    showFlashcard();
  } else {
    showToast("You've completed all flashcards!");
    endFlashcards();
  }
}

function prevFlashcard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    showFlashcard();
  }
}

function speakWord() {
  const card = currentFlashcards[currentFlashcardIndex];
  const text = card.translation;

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);

    const langMap = {
      spanish: "es-ES",
      french: "fr-FR",
      german: "de-DE",
      japanese: "ja-JP"
    };

    utterance.lang = langMap[data.currentLanguage] || "en-US";
    speechSynthesis.speak(utterance);
  } else {
    showToast("Text-to-speech not supported");
  }
}

function endFlashcards() {
  document.getElementById("flashcard-area").style.display = "none";
  document.getElementById("flashcard-setup").style.display = "block";

  data.xp += 20;
  data.activity.unshift({
    type: "Flashcard Practice",
    details: `Completed ${currentFlashcards.length} cards`,
    date: new Date().toLocaleDateString()
  });

  saveData();
  updateUI();
  showToast("Practice complete! +20 XP");
}

function startQuiz() {
  const difficulty = document.getElementById("quiz-difficulty").value;
  const numQuestions = parseInt(document.getElementById("quiz-questions").value);

  const lang = content[data.currentLanguage];
  const allWords = [];
  Object.values(lang).forEach(elements => {
    allWords.push(...elements);
  });

  if (allWords.length < 4) {
    showToast("Not enough content for quiz!");
    return;
  }

  currentQuiz = {
    questions: [],
    index: 0,
    score: 0,
    total: Math.lowest(numQuestions, allWords.length)
  };

  const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, currentQuiz.total);

  shuffled.forEach(item => {
    const wrong = allWords
      .filter(w => w.word !== item.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.translation);

    const answers = [item.translation, ...wrong].sort(() => Math.random() - 0.5);

    currentQuiz.questions.push({
      word: item.word,
      correct: item.translation,
      answers: answers
    });
  });

  quizQuestionIndex = 0;
  quizScore = 0;
  quizSeconds = 0;

  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";
  document.getElementById("quiz-results").style.display = "none";

  showQuestion();
  startTimer();
}

function startTimer() {
  document.getElementById("quiz-timer").textContent = "00:00";
  quizTimer = setInterval(() => {
    quizSeconds++;
    const mins = Math.floor(quizSeconds / 60).toString().padStart(2, "0");
    const secs = (quizSeconds % 60).toString().padStart(2, "0");
    document.getElementById("quiz-timer").textContent = `${mins}:${secs}`;
  }, 1000);
}

function showQuestion() {
  const q = currentQuiz.questions[quizQuestionIndex];

  document.getElementById("quiz-qnum").textContent = `Question ${quizQuestionIndex + 1}/${currentQuiz.total}`;
  document.getElementById("quiz-score").textContent = `Score: ${quizScore}`;
  document.getElementById("question-text").textContent = `What is "${q.word}" in ${data.currentLanguage}?`;

  const container = document.getElementById("answers-grid");
  container.innerHTML = q.answers.map(answer => `
    <button class="answer-btn" onclick="answerQuiz('${answer}', '${q.correct}')">
      ${answer}
    </button>
  `).join("");

  document.getElementById("quiz-feedback").innerHTML = "";
}

function answerQuiz(selected, correct) {
  clearInterval(quizTimer);

  const feedback = document.getElementById("quiz-feedback");
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    quizScore++;
    feedback.innerHTML = '<div class="quiz-feedback correct">✓ Correct! Great job!</div>';
    data.xp += 10;
  } else {
    feedback.innerHTML = `<div class="quiz-feedback wrong">✗ Wrong! The correct answer was "${correct}"</div>`;
  }

  setTimeout(() => {
    quizQuestionIndex++;

    if (quizQuestionIndex < currentQuiz.total) {
      showQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  }, 1500);
}

function endQuiz() {
  clearInterval(quizTimer);

  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("quiz-results").style.display = "block";

  const percent = Math.round((quizScore / currentQuiz.total) * 100);
  const xpEarned = quizScore * 10;

  document.getElementById("final-score").textContent = `${quizScore}/${currentQuiz.total}`;
  document.getElementById("accuracy").textContent = `${percent}%`;
  document.getElementById("xp-earned").textContent = `+${xpEarned} XP`;

  data.xp += xpEarned;
  data.quizzesTaken++;
  data.quizScores.push(percent);

  data.activity.unshift({
    type: "Quiz Completed",
    details: `Score: ${quizScore}/${currentQuiz.total} (${percent}%)`,
    date: new Date().toLocaleDateString()
  });

  saveData();
  updateUI();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

init();