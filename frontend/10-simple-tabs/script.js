document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach((tab) => {
    const activeContent = document.querySelector(`#${tab.dataset.content}`);

    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      contents.forEach((content) => content.classList.remove("active-content"));
      activeContent.classList.add("active-content");
    });
  });
});
