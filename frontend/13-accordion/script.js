document.addEventListener("DOMContentLoaded", () => {
  const accordionTitles = document.querySelectorAll(".accordion-title");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionTitles.forEach((activeTitle) => {
    const activeContent = document.querySelector(
      `#${activeTitle.dataset.content}`
    );

    activeTitle.addEventListener("click", () => {
      accordionContents.forEach((content) => {
        if (content !== activeContent) {
          content.classList.remove("active-content");
        }
      });
      activeContent.classList.toggle("active-content");
    });
  });
});
