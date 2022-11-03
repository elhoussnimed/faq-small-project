const questionsContainer = document.querySelectorAll(".question");

questionsContainer.forEach((question) => {
  const questionOpen = question.querySelector(".arrow");
  const questionClose = question.querySelector(".xmark");

  questionOpen.addEventListener("click", () => {
    question.classList.remove("close");
    console.log("remove");
  });

  questionClose.addEventListener("click", () => {
    question.classList.add("close");
    console.log("add");
  });
});
