document.addEventListener('DOMContentLoaded', function () {
	// Основной аккордеон
	const mainHeaders = document.querySelectorAll('.accordion-header');
	mainHeaders.forEach((header) => {
		header.addEventListener('click', function () {
			const content = this.nextElementSibling;
			// Закрыть другие основные
			mainHeaders.forEach((otherHeader) => {
				if (otherHeader !== header) {
					otherHeader.nextElementSibling.classList.remove('active');
				}
			});
			content.classList.toggle('active');
		});
	});

	// Вложенный аккордеон
	const subHeaders = document.querySelectorAll('.sub-accordion-header');
	subHeaders.forEach((header) => {
		header.addEventListener('click', function (e) {
			e.stopPropagation(); // не допустить всплытия до основного
			const content = this.nextElementSibling;
			// Закрыть другие вложенные внутри того же подаккордеона
			const parentSubAccordion = this.closest('.sub-accordion');
			if (parentSubAccordion) {
				const siblings = parentSubAccordion.querySelectorAll(
					'.sub-accordion-header',
				);
				siblings.forEach((sib) => {
					if (sib !== header) {
						sib.nextElementSibling.classList.remove('active');
					}
				});
			}
			content.classList.toggle('active');
		});
	});

	// Кнопки PDF
	const pdfButtons = document.querySelectorAll('.pdf-btn');
	pdfButtons.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			e.stopPropagation();
			const url = this.dataset.url;
			if (url) window.open(url, '_blank');
		});
	});
});
