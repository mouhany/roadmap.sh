document.addEventListener("DOMContentLoaded", () => {
  const textareaContainer = document.querySelector("#textarea-container");
  const textareaInput = document.querySelector("#textarea-input");
  const textareaCounter = document.querySelector("#textarea-counter");
  const maxLength = textareaInput.getAttribute("maxlength");

  textareaInput.value =
    "You are required to create a textarea that tracks and displays the number of characters typed by the user, along with a maximum character limit. As the user types, the character count will update dynamically. Once the limit is reached, the textarea";

  textareaCounter.textContent = `${textareaInput.value.length} / ${maxLength - textareaInput.value.length}`;

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
