/* Поиск книги */
let search = document.querySelector('.search_input'); //инпут поиска
let titles = document.querySelectorAll('.book_title'); //все заголовки книг
let books = document.querySelectorAll('.book'); //все теги .book 
let booksBody = document.querySelector('.books_body'); //тело книг
let noBooksText;

search.addEventListener("keyup", function (e) {
	let searchText = search.value; //тектовое значение инпута

	//если нажали в поле input на enter, то...
	if (e.code === 'Enter') {
		let count = 0;
		titles.forEach((title) => {
			let titleText = title.textContent;

			//если введенный текст совпадает с каким-нибудь названием книги
			if (titleText == searchText) {
				count++;
				books.forEach((elem) => { //показываем все книги (на случай, если они были удалены, иначе не к чему будет добавлять класс found)
					booksBody.append(elem);
				});
				noBooksText.remove(); //удаляем текст "нет книг"
				let book = title.closest('.book'); //блок книги
				//добавляем класс found к искомым книгам
				async function bookAddClass() {
					book.classList.add('found');
				}
				//удаляем лишние книги, остаются только искомые с классом found
				bookAddClass().then(() => {
					books.forEach((elem) => {
						if (!elem.classList.contains('found')) {
							elem.remove();
						}
					});

				});
			}
		});

		// если книги не существует, скрываем все книги и выводим, что книг нет
		if (count == 0 && !document.querySelector(".no_books")) {

			books.forEach((elem) => {
				elem.remove();
			});

			noBooksText = document.createElement('div');
			noBooksText.innerHTML = "Нет книг";
			noBooksText.classList.add('no_books');
			booksBody.prepend(noBooksText);
		}

	}

	//если поле полностью стерли
	else if (e.code === 'Backspace' && searchText.length == 0) {
		//удаляем у всех элементов классы found
		books.forEach((elem) => {
			elem.classList.remove('found');
		});
		//показываем все книги
		books.forEach((elem) => {
			booksBody.append(elem);
		});
		noBooksText.remove(); //удаляем текст "нет книг"
	}

	e.preventDefault();
});




/* Сортировка по цене */

let sortBtn = document.querySelector('.sort');
let pricesSpans = document.querySelectorAll('.price_value'); //коллекция span-ов
let booksSort = []; //массив книг для сортировки в прямом порядке
let booksReverse = []; //массив книг для сортировки в обратном порядке
let pricesSpansArray = Array.prototype.slice.call(pricesSpans); //массив span-ов (из коллекции)

function compareNumeric(a, b) { //Функция сравнения цен
	return (Number(a.textContent)) - (Number(b.textContent))
}

let click = 0;

sortBtn.addEventListener('click', function (e) {
	click++;
	books.forEach((elem) => {
		elem.remove();
	});

	if (click % 2 == 0) { //обратный порядок
		let pricesSpanReverse = pricesSpansArray.reverse(compareNumeric); //отсортированный массив со span-ми (прямой порядок)
		for (let priceSpanReverse of pricesSpanReverse) {
			booksReverse.push(priceSpanReverse.closest('.book')); //отсортировали книги в обратном порядке
		}
		console.log('Обратный порядок');
		//показываем все книги в обратном порядке
		booksReverse.forEach((elem) => {
			booksBody.append(elem);
		});
	} else if (click % 2 != 0) { //прямой порядок
		let pricesSpanSort = pricesSpansArray.sort(compareNumeric); //отсортированный массив со span-ми (прямой порядок)

		for (let priceSpanSort of pricesSpanSort) {
			booksSort.push(priceSpanSort.closest('.book')); //отсортировали книги 
		}
		//показываем все книги в прямом порядке
		booksSort.forEach((elem) => {
			booksBody.append(elem);
		});
	}

});



/* Сортировка по категориям */

let design = document.querySelector('.design');
let management = document.querySelector('.management');
let development = document.querySelector('.development');
let test = document.querySelector('.test');

design.addEventListener('click', function () {
	//показываем все книги
	books.forEach((elem) => {
		booksBody.append(elem);
	});
	//удаляем у всех элементов классы found
	books.forEach((elem) => {
		elem.classList.remove('found');
	});

	books.forEach((book) => {
		if (book.getAttribute('data-categoryId') == '1') {
			async function bookAddClass() {
				book.classList.add('found');
			}
			//удаляем лишние книги, остаются только искомые с классом found
			bookAddClass().then(() => {
				books.forEach((elem) => {
					if (!elem.classList.contains('found')) {
						elem.remove();
					}
				});

			});
		}
	});
});

management.addEventListener('click', function () {
	//показываем все книги
	books.forEach((elem) => {
		booksBody.append(elem);
	});
	//удаляем у всех элементов классы found
	books.forEach((elem) => {
		elem.classList.remove('found');
	});

	books.forEach((book) => {
		if (book.getAttribute('data-categoryId') == '2') {
			async function bookAddClass() {
				book.classList.add('found');
			}
			//удаляем лишние книги, остаются только искомые с классом found
			bookAddClass().then(() => {
				books.forEach((elem) => {
					if (!elem.classList.contains('found')) {
						elem.remove();
					}
				});
			});
		}
	});
});

development.addEventListener('click', function () {
	//показываем все книги
	books.forEach((elem) => {
		booksBody.append(elem);
	});
	//удаляем у всех элементов классы found
	books.forEach((elem) => {
		elem.classList.remove('found');
	});

	books.forEach((book) => {
		if (book.getAttribute('data-categoryId') == '3') {
			async function bookAddClass() {
				book.classList.add('found');
			}
			//удаляем лишние книги, остаются только искомые с классом found
			bookAddClass().then(() => {
				books.forEach((elem) => {
					if (!elem.classList.contains('found')) {
						elem.remove();
					}
				});
			});
		}
	});
});

test.addEventListener('click', function () {
	//показываем все книги
	books.forEach((elem) => {
		booksBody.append(elem);
	});
	//удаляем у всех элементов классы found
	books.forEach((elem) => {
		elem.classList.remove('found');
	});

	books.forEach((book) => {
		if (book.getAttribute('data-categoryId') == '4') {
			async function bookAddClass() {
				book.classList.add('found');
			}
			//удаляем лишние книги, остаются только искомые с классом found
			bookAddClass().then(() => {
				books.forEach((elem) => {
					if (!elem.classList.contains('found')) {
						elem.remove();
					}
				});
			});
		}
	});
});


/* Добавление в корзину */

let buttons = document.querySelectorAll('button');
let basketText = document.querySelector('.basket__text');
let basketBody = document.querySelector('.basket__body');



booksBody.addEventListener('click', function (e) {
	if (document.querySelector('.basket__text')) {
		basketText.remove();
	}
	let takenBook = document.createElement('div');
	takenBook.classList.add('takenBook');
	buttons.forEach((button) => {

		if (button == e.target) {

			let info = button.closest('.info');
			let title = info.firstElementChild; //название книги
			let titleBook = title.cloneNode(true); //название книги клон
			let price = button.previousElementSibling; //цена книги
			let priceBook = price.cloneNode(true); //цена книги клон

			takenBook.prepend(titleBook, priceBook);
			console.log(takenBook);
			basketBody.append(takenBook);
		}


	});

});






