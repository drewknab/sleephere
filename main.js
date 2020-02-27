(() => {
  let $main = document.querySelector("main");
  const theDate = new Date();

  if (theDate.getHours() >= 17)
  {
    $main.classList.add("warning");
    $main.innerHTML = /*html*/`
      <p>What are you sleeping here? Go home.</p>
    `;
  }
  else {
    $main.innerHTML = /*html*/`
      <p>Keep Working.</p>
    `;
  }
})();