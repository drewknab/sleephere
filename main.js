(() => {
  let $main = document.querySelector("main");
  const theDate = new Date();

  const goHomeMessages = [
    "What are you sleeping here?",
    "Did you bring a tent?",
    "You gonna take down the cot?",
    "Aren't you going to put away the sleeping bag?",
    "Slack === slacking",
  ];

  const focusMessages = [
    "Salad is not a soup, please focus on work.",
    "Please focus on actually working and not slacking.",
    "slack <img src='/images/snowflake.png'>"
  ];

  const getMessages = (messageArray) => messageArray[Math.floor(Math.random() * messageArray.length)];

  if (theDate.getHours() >= 17)
  {
    $main.classList.add("warning");
    $main.innerHTML = /*html*/`
      <p>${getMessages(goHomeMessages)}</p>
    `;
  }
  else {
    $main.innerHTML = /*html*/`
      <p><img src='/images/lyindrei.png'>${getMessages(focusMessages)}</p>
    `;
  }
})();