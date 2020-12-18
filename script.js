// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.
console.log('---The Task 1---')

function first(num1, num2, num3){
	result = (num1 - num2)/num3;
	return result;
}

let f = first(23, 2, 3); 
console.log(f);


// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

console.log('---The Task 2---')

function cube(a){
	square = Math.pow(a, 3) / a
	return square;
}
let s = cube(3)
console.log(s);


// 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.
console.log('---The Task 3---')

function min(a, b){
	if(a < b){ console.log('min ' + a) }
	else { console.log ('min ' + b) }
}
min(3, 8)

function max(a, b){
	if(a > b){ console.log('max ' + a) }
	else { console.log ('max ' + b) }
}
max(3, 8)


// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.
console.log('---The Task 4---')

function getArray(){
let length = +prompt ('введите число');
let array =[];
for (var i = 1; i <= length; i++){
		array.push(i);

	}
console.log(array);
}

getArray()


// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.
console.log('---The Task 5---')



// 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
console.log('---The Task 6---')



// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):

console.log('---The Task 7---')

// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

console.log('---The Task 8---')

// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

console.log('---The Task 9---')

// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

console.log('---The Task 10---')

// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

console.log('---The Task 11---')

// 12.Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

console.log('---The Task 12---')













/*
unction getName(){
	let name = prompt ('как вас зовут?');
	 alert(name);
}
// getName();


function getAge(){
	let age = prompt ('сколько вам лет?');
	alert(age);
}
// getAge();

let user = 'Иван';
function helloUser(){
	let defautUser ='Юзер';
	globalUser = 'Супер Юзер';

	user = 'Петя';
	let message = 'привет' + user;
	alert(message);
}

console.log(user); //иван
helloUser(); // привет петя 
console.log(user); // петя (переопределили имя переменной) область видимости 
// console.log(defautUser); // не найдет тк внутри функции
console.log(globalUser); // Супер Юзер тк без ключегого слово let, но до этого мы УЖЕ ВЫЗВАЛИ ФУКЦИЮ(ЭТО ВАЖНО )

// ОБЛАСТЬ ВИДИМОСТИ ФУНКЦИИ!!!!!!!!!


//

function showMesage(from, text){ //параметры в () мы придумываем сами
	// маша
	alert(from + ': ' + text); 
}

showMesage('Маша', 'Как дела?');
showMesage('Алекс', 'Привет!');
showMesage('Сергей', 'Привет всем!');
showMesage('Петя'); // забыли написать второй параметр, будет Петя undefined


//


function createArray(length){
	length = length || 10; // по умолчанию
	var array = [];
	for (var i = 1; i <= length; i++){
		array.push(i);

	}
console.log(array);
}

createArray(3);
createArray(20);
createArray(); // по умолчанию


//

function test(a, b, c){
	console.log('--------------')
	console.log(a, b, c);

	// arguments (это фтроенный невидимый массив в каждую функцию)
	console.log(arguments);

	if (arguments.length > 3){
		/*console.log(arguments[3]);
		console.log(arguments[4]);
		console.log(arguments[5]);*/
/*
		for (var i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
	}
}

test(4, 6, 2); // 4 6 2 
test(4, 6, 2, 8, 10, 12); // 4 6 2 
test(); // undefined

//

function checkAge(age){
	if (age >= 18){
		// console.log('добро пожаловать'); //  мы это напсиали после вывода фукции
		return true;
	} else{
		// console.log('доступа нет'); //  мы это напсиали после вывода фукции
		return false;
	}
}

var result = checkAge(12); 

// console.log(result); не нужно 
if (result == true) console.log('добро пожаловать');
else console.log('доступа нет');


function showMove(age){
	if(checkAge(age) == true){
		return 'приятного просмотра';
	} else {
		return 'фильм не для всех';
	}
}

console.log(showMove(10));
console.log(showMove(21));



//

function sum(a,b){
	return a + b;
}


var c = sum(5, 8); // 13
console.log(c);


var sum2 = sum;
console.log(sum(9,1));


//1 ВАРИАНТ СОЗДАНИЯ ФУНКЦИИ!!!
function hello(user){
	console.log('привет ' + user);
}
// 2 ВАРИАНТ СОЗДАНИЯ ФУНКЦИИ!!!
var hello = function (user){ 
	console.log('привет ' + user);
};

hello('ольга');


var hello2,
	user2 = prompt('ты кто?');

if (user2 != ''){
	hello2 = function(){ return 'привет ' + user2 };
}else{
		hello2 = function(){ return 'привет аноним'};
}

var result2 = hello2();
console.log(result2);


//

function ask(question, yes, no){
	if (confirm(question)) yes()
		else no();
}

ask(
	'вы согласны?',
	function(){ alert('вы согласились'); },
	function(){ alert('вы не согласны'); }
);

//

// вывод массива без цикла
// РЕКУРСИЯ функция вызывает саму себя  
function printArray(array){
	console.log(array[i]);
	i ++;
	if (i < array.length) printArray(array);


};
var i = 0;

printArray([1, 89, 2, -9, 6]); 

*/
