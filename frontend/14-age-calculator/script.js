document.addEventListener("DOMContentLoaded", () => {
  const inputDate = document.querySelector("#input-date");
  const submitDate = document.querySelector("#submit-date");
  const showResult = document.querySelector("#calculator-result");

  inputDate.addEventListener("click", () => {
    showResult.style.visibility = "hidden";
    let picker = datepicker(inputDate, {
      formatter: (input, date) => {
        const formattedDate = date.toISOString(); //2024-12-31T17:00:00.000Z
        input.value = formattedDate.split("T")[0];
      },
    });
    picker.show();
  });

  submitDate.addEventListener("click", () => {
    if (!inputDate.value.trim()) {
      showResult.textContent = "Please enter your birth date.";
      showResult.style.visibility = "visible";
      return;
    }

    const birthDateISO = luxon.DateTime.fromISO(inputDate.value);
    const todayISO = luxon.DateTime.now();

    if (birthDateISO <= todayISO) {
      const diff = todayISO
        .diff(birthDateISO, ["years", "months", "days"])
        .toObject();
      showResult.textContent = `You are
        ${Math.floor(diff.years)} years, 
        ${Math.floor(diff.months)} months, and 
        ${Math.floor(diff.days)} days old.`;
    } else {
      showResult.textContent = "Invalid date. Please try again.";
    }
    showResult.style.visibility = "visible";
  });
});
