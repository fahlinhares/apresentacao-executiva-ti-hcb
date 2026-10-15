"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.getElementById("print-button");

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  console.info("Apresentação Executiva de TI do HCB carregada.");
});
