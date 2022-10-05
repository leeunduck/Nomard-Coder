const quotes = [
  {
    quote: "흘린땀은 자기자신을 배신하지 않는다.",
    author: "이현석",
  },
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence, then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Gail Winfrey",
  },
  {
    quote: "Believe in yourself.",
    author: "Anonymous",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
