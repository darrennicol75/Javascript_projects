/* let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];
val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src'); //app.js third link on the html page

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

// DOM SELECTION 
/*
// document.getElementById() 
console.log(document.getElementById('task-title'));

//Get things from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling 
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";


// change content 

document.getElementById('task-title').textContent = 'Task List'; 
document.getElementById('task-title').innerText = 'My Tasks'; 
document.getElementById('task-title').innerHTML = '<span style="color:red">My Tasks</span>'; 
*/

// document.queryselector()
/*
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; //single element selector
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'Hello';
*/
// get elements by class name
/*
const items = document.getElementsByClassName('collection-item'); 
console.log(items); 
console.log(items[0]);
items[0].style.color = 'red'; 
items[3].textContent = 'Hello'; 

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); 
*/
// get elements by tag name 
/*
let lis = document.getElementsByTagName('li'); 
console.log(lis); 
console.log(lis[0]);
lis[0].style.color = 'red'; 
lis[3].textContent = 'Hello'; 

// Covert html colllection into array
lis = Array.from(lis);

lis.reverse(); 

lis.forEach(function(li){
  console.log(li);
  li.textContent = '${index}: Hello';
});

console.log(lis);
*/

// QUERY SELECTOR ALL
/*
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
*/

// Traversing the DOM (moving up or down) 
/*
let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list; 

// get child nodes- in console the text lines are breaks. 
val = list.childNodes; 
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

//types 
//1 - Element
//2 - Attribute (deprecated)
//3 - Text node 
//8 - Comment
//9 - Document itself 
//10 - Doctype


// get children element nodes 
val = list.children[1].textContent = 'Hello';
//children of children 
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// get parent node 
val = listItem.parentNode; 
val = listItem.parentElement; 
val = listItem.parentElement.parentElement; 

// get next sibling
val = listItem.previousSibling;
val = listItem.nextElementSibling.nextElementSibling;

console.log(val); 
*/

// WEDNESDAY 10/03/21 
// GIT TEST


























