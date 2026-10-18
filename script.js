
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const extraMessage = document.getElementById("extraMessage");

const anotherBtn = document.getElementById("anotherBtn");
const secretQuote = document.getElementById("secretQuote");

const secretMessages = [
  "Istirahat boleh, menyerah jangan. Gelar sarjana itu sedang menunggu Kakak! 🎓💚",

  "Satu revisi lagi, satu langkah lebih dekat menuju toga. Semangat, Kak! 🦖",

  "Kakak nggak harus sempurna, cukup terus berusaha dan jangan berhenti percaya pada diri sendiri. 🌱",

  "Semoga halaman skripsi segera selesai, revisi segera disetujui, dan senyum bahagia segera menghiasi hari Kakak. 🌷",

  "Kalau hari ini terasa berat, istirahatlah sebentar. Besok kita lanjutkan perjuangannya lagi. You got this! 💚",

  "Bayangkan hari ketika Kakak memakai toga dan berkata, 'Akhirnya semua perjuangan ini terbayar!' Keep going! 🎓",

  "Semoga Allah memudahkan setiap urusan Kakak, melancarkan proses skripsinya, dan memberikan hasil terbaik. Aamiin. 🤍",

  "Dear Kak Adyinn.., jangan bandingkan prosesmu dengan orang lain. Setiap orang punya waktunya sendiri. Pelan-pelan, ya! 🍃"
];

let lastIndex = -1;

// Tombol untuk membuka surat
openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
  extraMessage.classList.remove("hidden");

  letter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Tombol untuk mengganti pesan rahasia
anotherBtn.addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(
      Math.random() * secretMessages.length
    );
  } while (
    randomIndex === lastIndex &&
    secretMessages.length > 1
  );

  lastIndex = randomIndex;

  secretQuote.textContent = secretMessages[randomIndex];

  secretQuote.animate(
    [
      {
        opacity: 0,
        transform: "translateY(8px)"
      },
      {
        opacity: 1,
        transform: "translateY(0)"
      }
    ],
    {
      duration: 400,
      easing: "ease-out"
    }
  );
});
