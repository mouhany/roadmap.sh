document.addEventListener("DOMContentLoaded", () => {
  const textareaContainer = document.querySelector("#textarea-container");
  const textareaInput = document.querySelector("#textarea-input");
  const textareaCounter = document.querySelector("#textarea-counter");
  const maxLength = textareaInput.getAttribute("maxlength");

  textareaInput.addEventListener("input", () => {
    const charLength = textareaInput.value.length;
    const charLeft = maxLength - charLength;

    textareaCounter.textContent = `${charLength} / ${charLeft}`;

    if (charLength >= maxLength) {
      textareaContainer.classList.add("limit-border");
      textareaInput.classList.add("limit-text");
      textareaCounter.classList.add("limit-text");
    } else {
      textareaContainer.classList.remove("limit-border");
      textareaInput.classList.remove("limit-text");
      textareaCounter.classList.remove("limit-text");
    }
  });
});
