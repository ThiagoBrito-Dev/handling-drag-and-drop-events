const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", onDragStart);
  card.addEventListener("dragend", onDragEnd);
});

function onDragStart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("is-dragging");
}

function onDragEnd() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging");
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", onDragOver);
  dropzone.addEventListener("dragleave", onDragLeave);
});

function onDragOver() {
  this.classList.add("is-over");
  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
}

function onDragLeave() {
  this.classList.remove("is-over");
}
