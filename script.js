
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const secret = document.getElementById("secret");

const secretBtn = document.getElementById("secretBtn");
const secretText = document.getElementById("secretText");

const messages = [
  "Semoga setiap langkahmu di Mesir selalu ditemani kemudahan, orang-orang baik, dan ilmu yang bermanfaat. 💜",

  "Kalau suatu hari kamu merasa jauh dari semuanya, semoga kamu ingat bahwa ada banyak doa baik yang berjalan bersamamu. 🌙",

  "Aku mungkin akan merindukan kehadiranmu, tapi aku juga ingin melihatmu tumbuh dan berhasil meraih impianmu. 🪻",

  "Jangan lupa menjaga kesehatan, makan teratur, dan istirahat. Mengejar mimpi itu penting, tetapi dirimu juga berharga. 🤍",

  "Semoga jarak tidak menghapus cerita baik yang pernah kita punya. Tetaplah menjadi kamu yang kukenal. ♡",

  "Pergilah untuk belajar, pulanglah membawa ilmu dan cerita. Semoga Allah selalu menjagamu, di mana pun kamu berada. 💜",

  "Ada pertemuan yang menjadi kenangan, ada jarak yang mengajarkan ketulusan, dan ada doa yang tetap tinggal meski seseorang pergi jauh."
];

let lastIndex = -1;

openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
  secret.classList.remove("hidden");

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
});

secretBtn.addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * messages.length);
  } while (index === lastIndex && messages.length > 1);

  lastIndex = index;
  secretText.textContent = messages[index];

  secretText.animate(
    [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 450,
      easing: "ease-out"
    }
  );
});
