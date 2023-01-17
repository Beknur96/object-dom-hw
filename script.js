// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.

// const getFirstLink = () => {
//   return document.querySelector("a").innerText;
// };
// console.log(getFirstLink());

// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
   
// const getLinks = () => {
//   let arr = document.querySelectorAll("a")
//   let newArr = [];
//   for(i =0;i < arr.length; i++){
//     newArr = [...newArr,arr[i].innerText]
//   }
//   return newArr
//   }


// console.log(getLinks());

// Task 3
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом nav__link__item

// const getNavLinks = () => {
//   let arr = Array.from(document.querySelectorAll(".nav__link__item"))
//   return arr.map((el)=> {
//     return el.innerText
//   })
// }
// console.log(getNavLinks());

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом nav__link__item

// const getArr = () => {
//   let arr = Array.from(document.querySelectorAll(".nav__link__item")
//   return arr.map((el) => {
//     return el.className
//   })
  
// }
// console.log(getArr());


// Task 5
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link.

  // const getData = () => {
  //   let arr = Array.from(document.querySelectorAll(".nav__link"))
  //   return arr.map((el) => {
  //     return el.dataset.link
  //   })
  // }
  // console.log(getData());


// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.
// Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.


// const getNumber = () => {
//   let arr = Array.from(document.querySelectorAll(".nav__link"))
//   return arr.map((el) => {
//     let str = el.className.split(" ")[1]
//     let text = el.innerText;
//     if(str === text){
//       return el
//     }else {
//       return el.innerText = str
//     }


//   })

// }
// console.log(getNumber());


// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть `${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {

// })

// const getNumber = () => {
//   let arr = Array.from(document.querySelectorAll(".nav__link"))
//   return arr.map((el) => {
//     let str = el.className.split(" "[1])
//     let text = el.innerText
//     let dataLink = el.dataset.link
//     if(str === text) {
//       el.innerText = dataLink + el.innerText
//       return el
//     }else{
//       el.innerText = dataLink + str
//       return el
//     }
//   })
// }
// console.log(getNumber());


// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// yourElementsArray.forEach((element) => {

// })

// let array = document.querySelectorAll(".nav__link") 
// array.forEach((el) => {
//   let str = el.className.split(" ")[1]
//   let text = el.innerText
//   if(str !== text){
//     el.remove()
//   }
// })

// console.log(array);


// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// const createElement = () => {
//   let appendDiv = document.querySelector("#append-div")
//   let newElement = document.createElement("div")
//   newElement.id = "#just-text"
//   newElement.innerText = "Hello"
//   appendDiv.appendChild(newElement)
//   return appendDiv
// }
// console.log(createElement());



// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть айди #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10
// Используйте:
// document.createElement(tagName).
// element.appendChild(element2).
// и другие...

// const createElement = () => {
//     let appendUl = document.querySelector("#append-div")
//     let newElement = document.createElement("ul")
//     let li = document.createElement("li")
//     newElement.id = "#list"
  
//     appendUl.appendChild(newElement)
//     let child = newElement.appendChild(li)
    

//     return appendUl;
//   }
//   console.log(createElement());
