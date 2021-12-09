//basic js for scrolling to form section
class PageController {
  constructor(formSection, triggerButtons, currentDate) {
    this.formSection = formSection;
    this.triggerButtons = triggerButtons;
    this.currentDate = currentDate;
  }

  getFormSection() {
    const form = document.querySelector("form");
    return (this.formSection = form);
  }

  getButtons() {
    const buttons = [...document.querySelectorAll(".trigger-button")];
    return (this.triggerButtons = buttons);
  }

  scrollToSection() {
    this.triggerButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.formSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
  setDate() {
    const date = new Date();
    const year = date.getFullYear();
    return (this.currentDate = year);
  }

  showDate() {
    const display = document.querySelector("#current-year-display");
    display.textContent = this.currentDate;
  }
}

const Page = new PageController();

(function () {
  (() => {
    Page.getFormSection();
    Page.getButtons();
    Page.scrollToSection();
    Page.setDate();
    Page.showDate();
  })();
})();
