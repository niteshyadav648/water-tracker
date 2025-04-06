alert("JS loaded!");
let waterGoal = 0;
let currentIntake = 0;

function calculateWater() {
  const weight = parseInt(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value);
  const name = document.getElementById("name").value;

  if (!weight || !age || !name) {
    alert("Please fill all fields.");
    return;
  }

  waterGoal = weight * 35;
  currentIntake = 0;
  updateProgress();
  alert(`Hi ${name}, your daily water need is ${waterGoal} ml.`);
}

function addIntake() {
  if (waterGoal === 0) {
    alert("Please calculate your water need first!");
    return;
  }
  currentIntake += 250;
  if (currentIntake > waterGoal) currentIntake = waterGoal;
  updateProgress();
}

function updateProgress() {
  const percent = (currentIntake / waterGoal) * 100;
  document.getElementById("progress").style.width = `${percent}%`;
  document.getElementById("progress-info").innerText = `${currentIntake} ml / ${waterGoal} ml`;
}

function startReminder() {
  setInterval(() => {
    document.getElementById("reminderSound").play();
    alert("Time to drink water!");
  }, 60 * 60 * 1000); // 1 hour
}
function startReminder() {
    const audio = document.getElementById("reminderSound");
  
    // First play to unlock audio context
    audio.play().then(() => {
      alert("Reminder started! You'll get alerts every hour.");
      
      setInterval(() => {
        audio.play();
        alert("Time to drink water!");
      }, 60 * 60 * 1000); // Every 1 hour
  
    }).catch((e) => {
      alert("Sound playback blocked! Please click 'Start Reminder' again.");
    });
  }
  