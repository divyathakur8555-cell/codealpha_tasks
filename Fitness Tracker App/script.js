const STORAGE_KEY = "fitTrackSimpleData";

const defaultData = {
  workouts: [],
  steps: {},
  goals: {
    steps: 10000,
    calories: 500,
    workout: 60
  }
};

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultData);

  const data = JSON.parse(saved);
  return {
    ...structuredClone(defaultData),
    ...data,
    goals: {
      ...defaultData.goals,
      ...(data.goals || {})
    }
  };
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getDateKey(date = new Date()) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000)
    .toISOString()
    .split("T")[0];
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-IN");
}

function formatDate(dateKey) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(`${dateKey}T00:00:00`));
}

function getTodaySummary() {
  const data = loadData();
  const today = getDateKey();

  const workouts = data.workouts.filter(w => w.date === today);

  return {
    steps: Number(data.steps[today] || 0),
    calories: workouts.reduce((t, w) => t + Number(w.calories), 0),
    workoutMinutes: workouts.reduce((t, w) => t + Number(w.duration), 0)
  };
}

function updateProgress(valueId, barId, percentId, value, goal) {
  const percentage = Math.min((value / goal) * 100, 100);
  document.getElementById(valueId).textContent = formatNumber(value);
  document.getElementById(barId).style.width = percentage + "%";
  document.getElementById(percentId).textContent = Math.round(percentage) + "%";
}

function renderDashboard() {
  const data = loadData();
  const summary = getTodaySummary();

  updateProgress("dash-steps", "steps-progress", "steps-percent",
    summary.steps, data.goals.steps);

  updateProgress("dash-calories", "calories-progress", "calories-percent",
    summary.calories, data.goals.calories);

  updateProgress("dash-workout", "workout-progress", "workout-percent",
    summary.workoutMinutes, data.goals.workout);

  document.getElementById("goal-steps-label").textContent = formatNumber(data.goals.steps);
  document.getElementById("goal-calories-label").textContent = formatNumber(data.goals.calories);
  document.getElementById("goal-workout-label").textContent = formatNumber(data.goals.workout);

  renderRecent();
}

function renderRecent() {
  const container = document.getElementById("recent-feed");
  const data = loadData();

  const workouts = [...data.workouts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  if (!workouts.length) {
    container.innerHTML = `
      <div class="activity-item">
        <strong>No workouts yet</strong>
        <span>Log your first workout to see it here.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = workouts
    .map(w => `
      <div class="activity-item">
        <strong>${w.type}</strong>
        <span>${formatDate(w.date)} · ${w.duration} min · ${w.calories} kcal</span>
        ${w.notes ? `<small>${w.notes}</small>` : ""}
      </div>
    `)
    .join("");
}

function renderStepsPage() {
  const data = loadData();
  const summary = getTodaySummary();

  const percentage = Math.min((summary.steps / data.goals.steps) * 100, 100);

  document.getElementById("steps-display").textContent = formatNumber(summary.steps);
  document.getElementById("steps-bar-fill").style.width = percentage + "%";
  document.getElementById("steps-bar-percent").textContent = Math.round(percentage) + "%";
}

function saveWorkout(e) {
  e.preventDefault();

  const type = document.getElementById("exercise-type").value;
  const duration = Number(document.getElementById("duration").value);
  const calories = Number(document.getElementById("calories").value);
  const notes = document.getElementById("notes").value.trim();

  if (!type || duration <= 0 || calories <= 0) {
    showToast("Please enter valid workout details.", "error");
    return;
  }

  const data = loadData();
  data.workouts.push({
    id: crypto.randomUUID(),
    type,
    duration,
    calories,
    notes,
    date: getDateKey(),
    createdAt: new Date().toISOString()
  });
  saveData(data);

  e.target.reset();
  renderDashboard();
  renderHistory();
  renderStepsPage();
  showToast("Workout saved. Great job!", "success");
  switchTab("dashboard");
}

function addSteps(amount) {
  if (!amount || amount <= 0) {
    showToast("Enter a valid step count.", "error");
    return;
  }

  const data = loadData();
  const today = getDateKey();
  data.steps[today] = (data.steps[today] || 0) + Number(amount);
  saveData(data);

  renderDashboard();
  renderStepsPage();
  showToast(`${formatNumber(amount)} steps added.`, "success");
}

function saveSteps(e) {
  e.preventDefault();
  const input = document.getElementById("steps-input");
  addSteps(Number(input.value));
  input.value = "";
}

function renderHistory() {
  const list = document.getElementById("history-list");
  const data = loadData();

  const workouts = [...data.workouts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!workouts.length) {
    list.innerHTML = `
      <div class="history-item">
        <strong>No workouts yet</strong>
        <span>Your journey will appear here once you log workouts.</span>
      </div>
    `;
    return;
  }

  list.innerHTML = workouts
    .map(w => `
      <div class="history-item">
        <strong>${w.type}</strong>
        <span>${formatDate(w.date)} · ${w.duration} min · ${w.calories} kcal</span>
        ${w.notes ? `<small>${w.notes}</small>` : ""}
      </div>
    `)
    .join("");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = "toast";
  }, 2200);
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.id === tabId);
  });

  if (tabId === "dashboard") renderDashboard();
  if (tabId === "steps") renderStepsPage();
  if (tabId === "history") renderHistory();
}

function setupEvents() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("workout-form").addEventListener("submit", saveWorkout);
  document.getElementById("steps-form").addEventListener("submit", saveSteps);

  document.querySelectorAll(".quick-btn").forEach(btn => {
    btn.addEventListener("click", () => addSteps(Number(btn.dataset.steps)));
  });
}

function init() {
  setupEvents();
  renderDashboard();
  renderStepsPage();
  renderHistory();
}

init();