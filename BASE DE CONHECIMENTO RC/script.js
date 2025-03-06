document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", function () {
      let content = this.querySelector(".faq-item-content");
      let icon = this.querySelector(".faq-icon");

      if (content.style.display === "block") {
          content.style.display = "none";
          icon.textContent = "+";
      } else {
          document.querySelectorAll(".faq-item-content").forEach(el => el.style.display = "none");
          document.querySelectorAll(".faq-icon").forEach(el => el.textContent = "+");

          content.style.display = "block";
          icon.textContent = "−";
      }
  });
});

document.querySelector(".icon").addEventListener("click", function() {
  document.querySelector(".search-box").classList.toggle("active");
});


