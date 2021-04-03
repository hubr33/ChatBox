const frontForm = document.querySelector(".first");
const nicknameInput = document.querySelector(".typename");
const pError = document.querySelector(".error");
const btnJoin = document.querySelector(".join");
const shadow = document.querySelector(".shadow");
const mainCard = document.querySelector(".wrapper");
const textArea = document.querySelector(".textarea");
const btnSend = document.querySelector(".send");
const messageInput = document.querySelector(".textinput");
const btnClear = document.querySelector(".clear");
const btnQuestion = document.querySelector(".fa-question");
const backgroundIcons = document.querySelector(".rgba");
const questionExplain = document.querySelector(".howItWorks");
const closeQuestionBtn = document.querySelector(".closeHowItWorks");
const warningMessage = document.querySelector(".warningMessage");
const changeColorBtn = document.querySelector(".change");
const findNewStranger = document.querySelector(".findNew");
const historyMessages = document.querySelector(".historyMessages");
const historyPanel = document.querySelector(".historyPanel");
const closeHistoryPanelBtn = document.querySelector(".closeHistory");
const showHistoryBtn = document.querySelector(".showHistoryI");
const deleteHistoryBtn = document.querySelector(".deleteHistory");
let nick;

let numberOfCharacters = 2;
let nickname;
let myText;
let date;
let number = 0;
let historyNumber = 0;
const colors = ["red", "green", "yellow", "orange", "blue", "brown"];

const strangerNickname = "Stranger";
const strangerTexts = [
  "Hej! Mam na imię Stranger. Co u Ciebie słychać?",
  "Jestem wirtualnym robotem, porozamawiaj ze mną.",
  "Wiadomosć tekstowa bota nr. 3",
  "Dalej nie jest optymalizowane",
];

let hours;
let minutes;
let seconds;

const dateCounter = () => {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
};

setInterval(dateCounter, 100);

const createNickname = () => {
  nickname = nicknameInput.value;
};

const writtenText = () => {
  myText = messageInput.value;
};

const closeFront = () => {
  if (nicknameInput.value.length <= 2) {
    pError.classList.add("active");
  } else {
    pError.classList.remove("active");
    frontForm.classList.add("close");
    shadow.classList.add("light");
    mainCard.classList.add("show");
    setInterval(enterToApp, 2000);
  }
};

const checkValue = () => {
  pError.classList.remove("active");
};

const enterToApp = () => {
  shadow.classList.add("close");
};

const sendMessage = () => {
  if (messageInput.value <= 0) {
    return;
  } else {
    const newText = document.createElement("div");
    textArea.appendChild(newText);
    newText.innerHTML = `<div class="my-message">
  <p id="yo" class="nickname">${nickname}</p>
  <p class="text">${myText}</p>
  <div class="date">
    <p class="hours">${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`
    }</p>
    <p class="days">${
      date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`
    }.${
      date.getUTCDay() > 9 ? date.getUTCDay() : `0${date.getUTCDay()}`
    }.${date.getUTCFullYear()}</p>
  </div>`;
    sendMessageHistory();
    myText = "";
    messageInput.value = "";
    warningMessage.classList.add("close");
    nick = document.getElementById("yo");
    setTimeout(strangerMessage, 2000);
  }
};

const sendMessageHistory = () => {
  const newText = document.createElement("div");
  historyMessages.appendChild(newText);
  newText.innerHTML = `<div class="my-messageHistory">
<p class="nicknameHistory">${nickname}</p>
<p class="text">${myText}</p>
<div class="date">
  <p class="hours">${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }</p>
  <p class="days">${
    date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`
  }.${
    date.getUTCDay() > 9 ? date.getUTCDay() : `0${date.getUTCDay()}`
  }.${date.getUTCFullYear()}</p>
</div>`;
};

const strangerMessage = () => {
  const newText = document.createElement("div");
  textArea.appendChild(newText);
  newText.style.backgroundColor = "rgba(200, 200, 200, 0.2)";
  newText.innerHTML = `<div class="stranger-message">
  <p class="stranger-nickname">${strangerNickname}</p>
  <p class="stranger-text">${strangerTexts[number]}</p>
  <div class="date">
    <p class="hours">${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }</p>
    <p class="days">${
      date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`
    }.${
    date.getUTCDay() > 9 ? date.getUTCDay() : `0${date.getUTCDay()}`
  }.${date.getUTCFullYear()}</p>
  </div>`;
  myText = "";
  messageInput.value = "";
  number++;
  let txt = document.getElementById("txt");
  txt.scrollTop = txt.scrollHeight;
  strangerMessageHistory();
};

const strangerMessageHistory = () => {
  const newText = document.createElement("div");
  historyMessages.appendChild(newText);
  newText.style.backgroundColor = "rgba(200, 200, 200, 0.2)";
  newText.innerHTML = `<div class="stranger-messageHistory">
  <p class="stranger-nicknameHistory">${strangerNickname}</p>
  <p class="stranger-text">${strangerTexts[number]}</p>
  <div class="date">
    <p class="hours">${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }</p>
    <p class="days">${
      date.getUTCDate() > 9 ? date.getUTCDate() : `0${date.getUTCDate()}`
    }.${
    date.getUTCDay() > 9 ? date.getUTCDay() : `0${date.getUTCDay()}`
  }.${date.getUTCFullYear()}</p>
  </div>`;
  historyNumber++;
};

const clearMessage = () => {
  messageInput.value = "";
  myText = "";
};

const showQuestionMessage = () => {
  backgroundIcons.classList.add("active");
  questionExplain.classList.add("active");
};

const closeQuestion = () => {
  backgroundIcons.classList.remove("active");
  questionExplain.classList.remove("active");
};

const changeColor = () => {
  if (number === 0) {
    return;
  } else {
    const index = Math.floor(Math.random() * colors.length);
    console.log(index);
    nick.style.color = `${colors[index]}`;
  }
};

const newStranger = () => {
  for (let i = 0; i < number; i++) {
    const myNotes = document.querySelector(".my-message");
    const strangerNotes = document.querySelector(".stranger-message");
    myNotes.remove();
    strangerNotes.remove();
  }
  number = 0;
};

const showHistoryPanel = () => {
  historyPanel.classList.add("active");
};

const hideHistoryPanel = () => {
  historyPanel.classList.remove("active");
};

const deleteAllHistory = () => {
  if (historyNumber === 0) {
    return;
  } else {
    for (let i = 0; i < historyNumber; i++) {
      const myNotesHistory = document.querySelector(".my-messageHistory");
      const strangerNotesHistory = document.querySelector(
        ".stranger-messageHistory"
      );
      myNotesHistory.remove();
      strangerNotesHistory.remove();
    }
  }
  historyNumber = 0;
};

closeQuestionBtn.addEventListener("click", closeQuestion);
btnQuestion.addEventListener("click", showQuestionMessage);
btnClear.addEventListener("click", clearMessage);
messageInput.addEventListener("keyup", writtenText);
nicknameInput.addEventListener("keyup", createNickname);
btnSend.addEventListener("click", sendMessage);
document.addEventListener("keydown", checkValue);
btnJoin.addEventListener("click", closeFront);
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    closeFront();
    sendMessage();
  }
});
changeColorBtn.addEventListener("click", changeColor);
findNewStranger.addEventListener("click", newStranger);
closeHistoryPanelBtn.addEventListener("click", hideHistoryPanel);
showHistoryBtn.addEventListener("click", showHistoryPanel);
deleteHistoryBtn.addEventListener("click", deleteAllHistory);
