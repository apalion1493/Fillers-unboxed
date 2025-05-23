window.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded Scripts')

	if (document.querySelector('.splide')) {
		new Splide('.splide', {
			perPage: 4,
			focus: 0,
			omitEnd: true,
			gap: 20,
			perMove: 1,
			arrows: true,
			pagination: true,
			breakpoints: {
				1200: {
					perPage: 3,
				},
				1023: {
					perPage: 2,
				},
				640: {
					perPage: 1,
					pagination: false,
				},
			},
			classes: {
				pagination: 'splide__pagination your-class-pagination',
				page: 'splide__pagination__page your-class-page',
			},
		}).mount()
	}
})

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  function deactivateAllTabs() {
    buttons.forEach(btn => {
      btn.classList.remove("text-dark-green", "font-semibold", "bg-border-color-4");
      btn.classList.add("text-gray-600", "border-transparent");
    });
    contents.forEach(content => content.classList.add("hidden"));
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      deactivateAllTabs();

      button.classList.remove("text-gray-600", "border-transparent");
      button.classList.add("text-dark-green", "font-semibold", "bg-border-color-4");

      // Показываем соответствующий контент
      document.getElementById(tabId).classList.remove("hidden");
    });
  });

  buttons[0].click();
});


const modal = document.getElementById('modal')
const openModalBtn = document.getElementById('openModal')
const closeModalElements = document.querySelectorAll('.close-modal')

if (modal && openModalBtn && closeModalElements) {
	const openModal = () => {
		modal.classList.remove('hidden')
	}

	const closeModal = () => {
		modal.classList.add('hidden')
	}

	openModalBtn.addEventListener('click', openModal)

	closeModalElements.forEach(el => {
		el.addEventListener('click', closeModal)
	})

	window.addEventListener('click', event => {
		if (event.target === modal) {
			closeModal()
		}
	})
} else {
	console.log('test')
}

document.addEventListener('DOMContentLoaded', function () {
	const wishlistButtonOpen = document.querySelector('#wishlist-open')
	const wishlistBlock = document.querySelector('#wishlist')
	const wishlistCloseBtn = document.querySelector('#wishlist-close')
	const wishlistBg = document.querySelector('#wishlist-bg')

	wishlistButtonOpen.addEventListener('click', () => {
		wishlistBlock.classList.add('active')
		wishlistBg.classList.remove('hidden')
		document.body.classList.add('overflow-hidden')
	})

	wishlistCloseBtn.addEventListener('click', () => {
		wishlistBlock.classList.remove('active')
		wishlistBg.classList.add('hidden')
		document.body.classList.remove('overflow-hidden')
	})

	wishlistBg.addEventListener('click', () => {
		wishlistBlock.classList.remove('active')
		wishlistBg.classList.add('hidden')
		document.body.classList.remove('overflow-hidden')
	})
})

// JavaScript to toggle the mega menu
const toggles = document.querySelectorAll('button[data-menu-target]')
let currentMenu = null
let currentButton = null

toggles.forEach(toggle => {
	toggle.addEventListener('click', function (event) {
		event.stopPropagation()
		const targetId = toggle.getAttribute('data-menu-target')
		const targetMenu = document.getElementById(targetId)

		if (currentMenu && currentMenu !== targetMenu) {
			currentMenu.classList.add('hidden')
			currentButton.classList.remove('active')
		}

		if (targetMenu.classList.contains('hidden')) {
			targetMenu.classList.remove('hidden')
			toggle.classList.add('active')
			currentMenu = targetMenu
			currentButton = toggle
		} else {
			targetMenu.classList.add('hidden')
			toggle.classList.remove('active')
			currentMenu = null
			currentButton = null
		}
	})
})

// Close the mega menu if clicking outside of it
document.addEventListener('click', function (event) {
	if (currentMenu && !currentMenu.contains(event.target)) {
		currentMenu.classList.add('hidden')
		if (currentButton) {
			currentButton.classList.remove('active')
		}
		currentMenu = null
		currentButton = null
	}
})

// Prevent menu closing when clicking inside the mega menu
document.querySelectorAll('.mega-menu').forEach(menu => {
	menu.addEventListener('click', function (event) {
		event.stopPropagation()
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.getElementById('burger-button')
	const mobileMenu = document.getElementById('mobile-menu')

	burgerButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		document.body.classList.toggle('overflow-hidden')
	})
})

document.querySelectorAll('.menu-btn').forEach(button => {
	button.addEventListener('click', () => {
		const submenu = button.nextElementSibling

		// Переключаем видимость подменю
		button.classList.toggle('open-menu')
		submenu.classList.toggle('hidden')

		// Закрываем другие подменю, если они открыты
		document.querySelectorAll('.submenu').forEach(menu => {
			if (menu !== submenu) {
				menu.classList.add('hidden')
			}
		})
	})
})

// Закрываем подменю при клике вне меню
document.addEventListener('click', event => {
	const isClickInsideMenu = event.target.closest('nav')
	if (!isClickInsideMenu) {
		document.querySelectorAll('.submenu').forEach(submenu => {
			submenu.classList.add('hidden')
		})
	}
})

document.querySelectorAll('.product-card--favorites').forEach(icon => {
	icon.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем переход по ссылке
		event.stopPropagation() // Предотвращаем всплытие события клика к ссылке

		const productId = this.getAttribute('data-product-id')
		const productElement = document.getElementById(productId)

		if (productElement.classList.contains('active')) {
			productElement.classList.remove('active')
			this.classList.remove('active')
		} else {
			productElement.classList.add('active')
			this.classList.add('active')
		}
	})
})

window.addEventListener('load', () => {
	const selectElements = document.querySelectorAll('.small-select')

	if (selectElements.length > 0) {
		selectElements.forEach(selectElement => {
			selectElement.addEventListener('mousedown', event => {
				event.stopPropagation()
				selectElement.classList.add('open')
			})

			selectElement.addEventListener('blur', () => {
				selectElement.classList.remove('open')
			})

			selectElement.addEventListener('change', () => {
				selectElement.classList.remove('open')
			})
		})

		document.addEventListener('click', () => {
			selectElements.forEach(selectElement => {
				selectElement.classList.remove('open')
			})
		})
	} else {
		console.warn('Элементы с классом .small-select не найдены в DOM.')
	}
})

document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header')

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const content = header.nextElementSibling
      const icon = header.querySelector('.accordion-icon')
      const container = header.closest('.accordion-product')

      if (content.classList.contains('show')) {
        content.style.maxHeight = content.scrollHeight + 'px'
        setTimeout(() => {
          content.style.maxHeight = '0'
        }, 10)
        content.classList.remove('show')
        icon.classList.remove('active')

        container.classList.add('bg-border-color-4')
      } else {
        document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== content) {
            item.style.maxHeight = '0'
            item.classList.remove('show')
            item.previousElementSibling
              .querySelector('.accordion-icon')
              .classList.remove('active')
            item.closest('.flex').classList.add('bg-border-color-4')
          }
        })

        content.classList.add('show')
        content.style.maxHeight = content.scrollHeight + 'px'
        icon.classList.add('active')

        container.classList.remove('bg-border-color-4')
      }
    })
  })
})

document.addEventListener('DOMContentLoaded', () => {
	const customSelect = document.querySelector('.custom-select')
	const selectBtn = document.querySelector('.select-button')
	const selectedValue = document.querySelector('.selected-value')
	const optionsList = document.querySelectorAll('.select-dropdown li')

	if (optionsList.length > 0) {
		selectedValue.textContent =
			optionsList[0].querySelector('label').textContent

		optionsList[0].querySelector('input').checked = true
	}

	if (selectBtn) {
		selectBtn.addEventListener('click', () => {
			customSelect.classList.toggle('active')

			selectBtn.setAttribute(
				'aria-expanded',
				selectBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
			)

			const dropdown = customSelect.querySelector('.select-dropdown')
			if (customSelect.classList.contains('active')) {
				dropdown.classList.remove('scale-y-0', 'opacity-0', 'invisible')
				dropdown.classList.add('scale-y-100', 'opacity-100', 'visible')
				selectBtn.querySelector('.arrow').classList.add('rotate-180')
			} else {
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}
		})
	}

	optionsList.forEach(option => {
		function handler(e) {
			if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
				selectedValue.textContent = option.querySelector('label').textContent
				customSelect.classList.remove('active')

				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}

			if (e.key === 'Enter') {
				selectedValue.textContent = option.querySelector('label').textContent
				customSelect.classList.remove('active')

				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}
		}

		option.addEventListener('keyup', handler)
		option.addEventListener('click', handler)
	})

	document.addEventListener('click', event => {
		if (customSelect) {
			if (
				!customSelect.contains(event.target) &&
				customSelect.classList.contains('active')
			) {
				customSelect.classList.remove('active')
				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
				selectBtn.setAttribute('aria-expanded', 'false')
			}
		}
	})
})


document.addEventListener('DOMContentLoaded', () => {
	const buttonSearch = document.querySelector('#search-button')
	const searchContainer = document.querySelector('.searchContainer')

	buttonSearch.addEventListener('click', (e) => {
		e.stopPropagation(); // Остановить всплытие события, чтобы не сработал обработчик на document
		searchContainer.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!searchContainer.contains(e.target)) { // Если клик не внутри searchContainer
			searchContainer.classList.remove('active'); // Убрать класс active
		}
	});
})
