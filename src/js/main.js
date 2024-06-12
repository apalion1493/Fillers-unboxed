window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

window.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы select и иконки
const selectElement = document.getElementById('custom-select');
const arrowIcon = document.getElementById('select-arrow');

// Обработчик события для переворачивания иконки
selectElement.addEventListener('change', () => {
    // Убираем классы "rotate-180" при изменении выбора (если было)
    arrowIcon.classList.remove('rotate-180');
});

selectElement.addEventListener('click', () => {
    // Переключаем класс "rotate-180" при клике
    arrowIcon.classList.toggle('rotate-180');
});

// Обработчик события фокуса для IE и Safari
selectElement.addEventListener('focus', () => {
    arrowIcon.classList.add('rotate-180');
});

// Обработчик события расфокуса
selectElement.addEventListener('blur', () => {
    arrowIcon.classList.remove('rotate-180');
});
});
  

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', function() {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');

        if (content.classList.contains('show')) {

          content.style.maxHeight = content.scrollHeight + 'px'; 
          setTimeout(() => {
            content.style.maxHeight = '0';
          }, 10);
          content.classList.remove('show');
          icon.classList.remove('active');
        } else {

          document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
              item.style.maxHeight = '0';
              item.classList.remove('show');
              item.previousElementSibling.querySelector('.accordion-icon').classList.remove('active');
            }
          });

          content.classList.add('show');
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.classList.add('active');
        }
      });
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".custom-select");
  const selectBtn = document.querySelector(".select-button");
  const selectedValue = document.querySelector(".selected-value");
  const optionsList = document.querySelectorAll(".select-dropdown li");


  if (optionsList.length > 0) {
      selectedValue.textContent = optionsList[0].querySelector("label").textContent;

      optionsList[0].querySelector("input").checked = true;
  }


  selectBtn.addEventListener("click", () => {

      customSelect.classList.toggle("active");

      selectBtn.setAttribute(
          "aria-expanded",
          selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );


      const dropdown = customSelect.querySelector(".select-dropdown");
      if (customSelect.classList.contains("active")) {
          dropdown.classList.remove("scale-y-0", "opacity-0", "invisible");
          dropdown.classList.add("scale-y-100", "opacity-100", "visible");
          selectBtn.querySelector(".arrow").classList.add("rotate-180");
      } else {
          dropdown.classList.remove("scale-y-100", "opacity-100", "visible");
          dropdown.classList.add("scale-y-0", "opacity-0", "invisible");
          selectBtn.querySelector(".arrow").classList.remove("rotate-180");
      }
  });

  optionsList.forEach((option) => {
      function handler(e) {
         
          if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
              selectedValue.textContent = option.querySelector("label").textContent;
              customSelect.classList.remove("active");

              const dropdown = customSelect.querySelector(".select-dropdown");
              dropdown.classList.remove("scale-y-100", "opacity-100", "visible");
              dropdown.classList.add("scale-y-0", "opacity-0", "invisible");
              selectBtn.querySelector(".arrow").classList.remove("rotate-180");
          }

          if (e.key === "Enter") {
              selectedValue.textContent = option.querySelector("label").textContent;
              customSelect.classList.remove("active");

              const dropdown = customSelect.querySelector(".select-dropdown");
              dropdown.classList.remove("scale-y-100", "opacity-100", "visible");
              dropdown.classList.add("scale-y-0", "opacity-0", "invisible");
              selectBtn.querySelector(".arrow").classList.remove("rotate-180");
          }
      }

      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
  });


  document.addEventListener("click", (event) => {
      if (!customSelect.contains(event.target) && customSelect.classList.contains("active")) {
          customSelect.classList.remove("active");
          const dropdown = customSelect.querySelector(".select-dropdown");
          dropdown.classList.remove("scale-y-100", "opacity-100", "visible");
          dropdown.classList.add("scale-y-0", "opacity-0", "invisible");
          selectBtn.querySelector(".arrow").classList.remove("rotate-180");
          selectBtn.setAttribute("aria-expanded", "false");
      }
  });
});