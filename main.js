(() => {
  let $main = document.querySelector("main");
  const theDate = new Date();

  const goHomeMessages = [
    "What are you sleeping here?",
    "Did you bring a tent?",
    "You gonna take down the cot?",
    "Aren't you going to put away the sleeping bag?",
    "Working after 5 PM? Fake news.",
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
      <p><img src='/images/casterdrei.jpg'>${getMessages(goHomeMessages)}</p>
    `;
    return;
  }

  $main.innerHTML = /*html*/`
    <p><img src='/images/lyindrei.png'>${getMessages(focusMessages)}</p>
  `;
})();
