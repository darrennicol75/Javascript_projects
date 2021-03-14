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

// THURSDAY11/03/21- Lecture 27

// create element
/*
const li = document.createElement('li'); 

// add class 

li.className = 'collection-item';

// add id 
li.id = 'new-item'; 

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append 
li.appendChild(document.createTextNode('Hello again world'));

// create new link element
const link = document.createElement('a'); 
// add classes
link.className = 'delete-item secondary-content'; 
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li 

li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
*/

// LECTURE 28
// REMOVING AND REPLACING ELEMENTS 

// Replace H5 with H2 
/*
const newHeading = document.createElement('h2'); 
//add title
newHeading.id = 'task-title'; 
// new text node
newHeading.appendChild(document.createTextNode('Task List'));
// Get heading you want to replace
const oldHeading = document.getElementById('task-title');
// Find parent
const cardAction = document.querySelector('.card-action'); 
//Replace 
cardAction.replaceChild(newHeading, oldHeading); // add what you want to replace and what with

// REMOVE ELEMENT 

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul'); 

//Remove list item 
lis[0].remove();

// Remove child element 
list.removeChild(lis[3]);

// Classes and attributes 
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; 

let val; 
//CLASSES 
val = link.className; 
val = link.classList; 
val = link.classList[0];
link.classList.add('test'); 
link.classList.remove('test'); 
val = link; 

//ATTRIBUTES 
val = link.getAttribute('href'); 
val = link.setAttribute('href', 'https://www.google.co.uk/');

link.setAttribute('title', 'Google');

val = link.hasAttribute('title');
link.removeAttribute('title')
val = link

console.log(val);
*/

// LECTURE 29 
// EVENT LISTENERS AND THE EVENT OBJECT
// LISTEN FOR ANYTHIING ON THE DOM 
/*
document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World!')
  //e.preventDefault();
}); 

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val; 
  val = e; 

  // event target element 
  val = e.target;
  val = e.target.id;
  val = e.target.className; 
  val = e.target.classList;

  // e.target.innerText = 'Hello';

  // EVENT TYPE 

  val = e.type; 

  // TIMESTAMP 
  val = e.timestamp; 
  // Coords of event relative to window 
  val = e.clientY; //Where on the button its clicked y-axis
  //can also be x-axis

  // lots of different events
  console.log(val);
}

*/

// MOUSE EVENTS 
/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card'); 
const heading = document.querySelector('h5');

//Click

clearBtn.addEventListener('click', runEvent);
*/
// Double Click
//clearBtn.addEventListener('dblclick', runEvent);
//Mouse events
/*clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);

card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
*/ 
/*
card.addEventListener('mousemove', runEvent);

//Event handler 

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
*/
// keyboard events 
/*
const form = document.querySelector('form'); 
// if large application with more than one form use id or element
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = ''; // clear input

//form.addEventListener('submit', runEvent);

// keydown
//taskInput.addEventListener('keydown', runEvent);

// keyup
//taskInput.addEventListener('keyup', runEvent);

// keypress
//taskInput.addEventListener('keypress', runEvent);
//Focus
//taskInput.addEventListener('focus', runEvent);
//Blur
//taskInput.addEventListener('blur', runEvent);
//Cut
//taskInput.addEventListener('cut', runEvent);
//Paste
//taskInput.addEventListener('paste', runEvent);
//Input event 
//taskInput.addEventListener('input', runEvent); //  comment out line html line 8 
//change
select.addEventListener('change', runEvent); 



function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  // get input value
  //console.log(taskInput.value);
  //e.preventDefault();
  console.log(e.target.value);

  // heading.innerText = e.target.value;

}
*/

// LECTURE 32 
// BUBBLING (on child and bubbles up)
/*
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card.title'); 
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card'); 
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col'); 
});
*/
// DELEGATION (on parent and moves down through children)
/*
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem); 
*/
/*
document.body.addEventListener('click', deleteItem);
/*
function deleteItem(e){
  console.log(e.target);
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log('delete item');
  }
}
*/
// the above only deletes the first one not others so delegation is required. 
/*
function deleteItem(e){
  console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove(); 
  }
}
// add conditional and then parentElements to move between levels. 
*/

// LECTURE 33- LOCAL AND SESSION STORAGE 

// set local storage item 
/*
localStorage.setItem('name', 'Johnny'); //saves in local storage, does stay after browser is closed
localStorage.setItem('age', '30');
// set session storage item 
sessionStorage.setItem('name', 'Mary'); // does not stay after browser is closed. 
// remove from storage 
//localStorage.removeItem('name');
// get from storage 
const firstName = localStorage.getItem('name');
const age = localStorage.getItem('age');
// clear local storage
// localStorage.clear(); 
console.log(firstName, age);
*/
document.querySelector('form').addEventListener('sumbit', function(e){
  const task = document.getElementById('task').value; 
  localStorage.setItem('task', task);
  alert('Task saved');
  e.preventDefault();
});

















































