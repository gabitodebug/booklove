const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
const goCollageBtn = document.getElementById("goCollageBtn");

let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    page.className = "page";

    const distance = index - currentPage;

    if (distance === 0) {
      page.classList.add("active");
    } else if (distance === -1) {
      page.classList.add("prev-1");
    } else if (distance === -2) {
      page.classList.add("prev-2");
    } else if (distance === 1) {
      page.classList.add("next-1");
    } else if (distance === 2) {
      page.classList.add("next-2");
    } else if (distance < -2) {
      page.classList.add("hidden-left");
    } else {
      page.classList.add("hidden-right");
    }
  });

  pageIndicator.textContent = `${currentPage + 1} / ${pages.length}`;

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;

  if (currentPage === pages.length - 1) {
    goCollageBtn.style.display = "inline-block";
  } else {
    goCollageBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }

  if (event.key === "ArrowLeft" && currentPage > 0) {
    currentPage--;
    updateBook();
  }
});

updateBook();
