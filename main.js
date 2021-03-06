import {holidays} from './holidays.js';

(() => {
  const $main = document.querySelector("main");
  const theDate = new Date();
  const holiday = holidays.filter(x => x.month === (theDate.getMonth() + 1) && x.day === theDate.getDate());

  const goHomeMessages = [
    "<img src='/images/casterdrei.jpg'>What are you sleeping here?",
    "<img src='/images/casterdrei.jpg'>Did you bring a tent?",
    "<img src='/images/casterdrei.jpg'>You gonna take down the cot?",
    "<img src='/images/casterdrei.jpg'>Aren't you going to put away the sleeping bag?",
    "<img src='/images/casterdrei.jpg'>Working after 5 PM? Fake news.",
    "<img src='/images/joef_face.png'>What are you sleeping here?",
    "<img src='/images/joef_face.png'>Did you bring a tent?",
    "<img src='/images/joef_face.png'>Nice camping setup you got there.",
    "<img src='/images/joef_face.png'>You got a sleeping bag under your desk?",
    "<img src='/images/joef_face.png'>WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    "<img src='/images/joef_face.png'>waysh",
    "<img src='/images/teledrei.png'>get off your puters people, get some sun",
  ];

  const focusMessages = [
    "<img src='/images/lyindrei.png'>Salad is not a soup, please focus on work.",
    "<img src='/images/lyindrei.png'>Please focus on actually working and not slacking.",
    "<img src='/images/teledrei.png'>slack <img src='/images/snowflake.png'>",
    "<img src='/images/lyindrei.png'>Slack === slacking",
    "<img src='/images/teledrei.png'>too much dank, not enough codez",
    "<img src='/images/lyindrei.png'>stfu - Jan 3rd, 2019 10:39:48 AM",
    "<img src='/images/joef_face.png'>You must be buffalo sports, because you’re constantly disappointing me",
    "<img src='/images/joef_official.PNG'>stop me if i’m git-splain’in… but",
    "<img src='/images/teledrei.png'>ha, so cool",
    "<img src='/images/teledrei.png'>quick question though, what were doing deep in a twitter thread at 3:36 PM?",
    "<img src='/images/vinny.png'>tbh I just said buzzwords in every sentence of my interview and I was gold"
  ];
  
  const weekendMessages = [
    "<img src='/images/vinny.png'>got tired of not having a pool this weekend so I built one",
    "<img src='/images/casterdrei.jpg'>It's the weekend, mute Slack."
  ]

  const getMessages = (messageArray) => messageArray[Math.floor(Math.random() * messageArray.length)];
  const checkHoliday = (type, hour) => (type === "h" && hour  >= 12) || type === "f"
  const buildMessage = (waysh, message) => {
    if (waysh) $main.classList.add("warning");

    $main.innerHTML = /*html*/`
      <p>${message}</p>
    `;
  };

  if (holiday.length > 0) {
    if (checkHoliday(holiday[0].type, theDate.getHours())) {
      buildMessage(true, `<img src='/images/teledrei.png'>get off your puters people, get some sun</p><p>it's ${holiday[0].title}`)
      return;
    }
  }

  if (theDate.getDay() === 0 || theDate.getDay() === 6) {
    buildMessage(true, getMessages(weekendMessages))
    return;
  }

  if (theDate.getHours() >= 17) {
    buildMessage(true, getMessages(goHomeMessages));
    return;
  }

  buildMessage(false,`${getMessages(focusMessages)}`);
})();
