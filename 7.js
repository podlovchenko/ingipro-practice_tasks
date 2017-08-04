/* 7
Напишите фукнцию сортировки sortLibrary массива объектов.
Аргументы функции:
library - массив объектов
field_name - ключ, по которому нужно отсортировать
reverse - порядок сортировки. Если true - по убыванию, false - по возрастанию
initial - функция преобразования значения, соответствующего ключу. Если передана, сортировка будет по значению
initial(value)
*/

'use strict';

function sortLibrary(library, field_name, reverse, initial = (value) => value) {
  let sign = reverse ? -1: 1;
  
  if (typeof initial(library[0][field_name]) === "string") {
    library.sort((a, b) => (initial(a[field_name]).localeCompare(initial(b[field_name])) * sign));
  } else {
    library.sort((a, b) => (initial(a[field_name]) - initial(b[field_name])) * sign);
  }
}

const library = [
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }
];
sortLibrary(library, 'title', true);
console.log(library);
/*
    [
        {
           title: 'Steve Jobs',
           author: 'Walter Isaacson',
           libraryID: 4264
        },
        {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       },
       {
           title: 'Bill Gates',
           author: 'The Road Ahead',
           libraryID: 1254
       }
    ]
*/