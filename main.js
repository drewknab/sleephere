(() => {
  let $main = document.querySelector("main");
  const theDate = new Date();

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
    "<img src='/images/waysh_biatch'>That B, WAYSH",
  ];

  const focusMessages = [
    "Salad is not a soup, please focus on work.",
    "Please focus on actually working and not slacking.",
    "slack <img src='/images/snowflake.png'>",
    "Slack === slacking",
    "too much dank, not enough codez",
    "stfu - Jan 3rd, 2019 10:39:48 AM",
  ];

  const getMessages = (messageArray) => messageArray[Math.floor(Math.random() * messageArray.length)];

  if (theDate.getDay() === 0 || theDate.getDay() === 6) {
    $main.classList.add("warning");
    $main.innerHTML = /*html*/`
      <p><img src='/images/casterdrei.jpg'>It's the weekend, mute Slack.</p>
    `;
    return;
  }

  if (theDate.getHours() >= 17) {
    $main.classList.add("warning");
    $main.innerHTML = /*html*/`
      <p>${getMessages(goHomeMessages)}</p>
    `;
    return;
  }

  $main.innerHTML = /*html*/`
    <p><img src='/images/lyindrei.png'>${getMessages(focusMessages)}</p>
  `;
})();
