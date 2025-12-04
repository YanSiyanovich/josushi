const lessons = [
  {
    id: 1,
    title: "本（ほん）",
    explanation: "You would use this counter word to count something long and narrow. Like a pen. Or an umbrella! Hover your mouse over the question icon to see the readings.",
    color: "#cc5385",
    images: ["/Assets/pen.jpg", "/Assets/umbrella.jpg"],
    readings: [
      { number: 1, reading: "いっぽん", highlight: true },
      { number: 2, reading: "にほん" },
      { number: 3, reading: "さんぼん", highlight: true },
      { number: 4, reading: "よんほん" },
      { number: 5, reading: "ごほん" },
      { number: 6, reading: "ろっぽん", highlight: true },
      { number: 7, reading: "ななほん" },
      { number: 8, reading: "はっぽん", highlight: true },
      { number: 9, reading: "きゅうほん" },
      { number: 10, reading: "じゅっぽん", highlight: true }
    ],
    questions: [
      { prompt: "How do you read 10本？", answer: "じゅっぽん" },
      { prompt: "How do you read 3本？", answer: "さんぼん" },
      { prompt: "How do you read 1本？", answer: "いっぽん" },
      { prompt: "How do you read 9本？", answer: "きゅうほん" },
      { prompt: "How do you read 8本？", answer: "はっぽん" },
      { prompt: "How do you read 4本？", answer: "よんほん" },
      { prompt: "How do you read 6本？", answer: "ろっぽん" }
    ]
  },
  {
    id: 2,
    title: "枚（まい）",
    explanation: "This counter word is used for something flat and narrow. Think plate, towel or your movie tickets. Hover your mouse over the question icon to see the readings!",
    color: "#ff8210",
    images: ["/Assets/plate.jpg", "/Assets/tickets.jpg"],
    readings: [
      { number: 1, reading: "いちまい" },
      { number: 2, reading: "にまい" },
      { number: 3, reading: "さんまい" },
      { number: 4, reading: "よんまい" },
      { number: 5, reading: "ごまい" },
      { number: 6, reading: "ろくまい" },
      { number: 7, reading: "ななまい" },
      { number: 8, reading: "はちまい" },
      { number: 9, reading: "きゅうまい" },
      { number: 10, reading: "じゅうまい" }
    ],
    questions: [
      { prompt: "How do you read 3枚？", answer: "さんまい" },
      { prompt: "How do you read 4枚？", answer: "よんまい" },
      { prompt: "How do you read 8枚？", answer: "はちまい" },
      { prompt: "How do you read 10枚？", answer: "じゅうまい" },
      { prompt: "How do you read 7枚？", answer: "ななまい" }
    ]
  },
  {
    id: 3,
    title: "個（こ）",
    explanation: "This one is a bit trickier. It can be used for counting smaller things like cookies or buns. You can also count planets or phone apps with 個. Confusing, right? Don't worry, we will be looking at these examples in more detail later. Hover your mouse over the question icon to see the readings!",
    color: "#5c0601",
    images: ["/Assets/bun.jpg", "/Assets/planet.jpg"],
    readings: [
      { number: 1, reading: "いっこ", highlight: true  },
      { number: 2, reading: "にこ" },
      { number: 3, reading: "さんこ" },
      { number: 4, reading: "よんこ" },
      { number: 5, reading: "ごこ" },
      { number: 6, reading: "ろっこ", highlight: true  },
      { number: 7, reading: "ななこ" },
      { number: 8, reading: "はっこ" , highlight: true },
      { number: 9, reading: "きゅうこ" },
      { number: 10, reading: "じゅっこ" , highlight: true }
    ],
    questions: [
      { prompt: "How do you read 1個？", answer: "いっこ" },
    { prompt: "How do you read 6個？", answer: "ろっこ" },
    { prompt: "How do you read 5個？", answer: "ごこ" },
    { prompt: "How do you read 8個？", answer: "はっこ" },
    { prompt: "How do you read 3個？", answer: "さんこ" },
    { prompt: "How do you read 7個？", answer: "ななこ" },                
      { prompt: "How do you read 10個？", answer: "じゅっこ" }
    ]
  }
];

document.querySelector(".button1").addEventListener("click", () => {
  window.location.href = "lesson.html?id=1";
});

document.querySelector(".button2").addEventListener("click", () => {
  window.location.href = "lesson.html?id=2";
});

document.querySelector(".button3").addEventListener("click", () => {
  window.location.href = "lesson.html?id=3";
});

