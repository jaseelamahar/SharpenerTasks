//examine the document object//
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent="Hello";
console.log(document.forms);
console.log(document.links);

//GET ELEMENT BY ID//
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById("header-title");
var header=document.getElementById('main-header');
console.log('header-title');
//headerTitle.textContent="Hello";
//headerTitle.innerText="Goodbye"
//console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>'
header.style.borderBottom='solid 3px #000'

const element=document.querySelector('.title');
element.style.color='blue';
element.style.fontWeight='bold';

//var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[2]);
//items[2].style.backgroundColor="green";

//for(var i=0;i<items.length;i++){
    //items[i].style.fontWeight="bold";


//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[2]);
//li[2].style.backgroundColor="green";

//for(var i=0;i<li.length;i++){
//    li[i].style.fontWeight="bold";
//}

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';

//var input=document.querySelector('input');
//input.value='Hello world';

//var submit=document.querySelector('input[type="submit"]');
//submit.value="Send";

//var item=document.querySelector('.list-group-item');
//item.style.color="red";

//var seconditem=document.querySelector
//('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor="green";

//var thirditem=document.querySelector
//('.list-group-item:nth-child(3)');
//thirditem.style.display="none";

//var title=document.querySelectorAll('.title');
//console.log(title);
//title[0].textcontent='Hello';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor="green";
//}

//var item=document.querySelectorAll('ul li');
//item[1].style.color="green";
 

//Traversing DOM//
var itemList=document.querySelector('#items');

//parent node//
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement);

//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor="yellow";

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello1';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello4';

//siblings
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
//create Div
 var newDiv=document.createElement('div');
 //add class
 newDiv.className='hello'
 //add id
 newDiv.id='hello1';

 //add attribute
 newDiv.setAttribute('title','HelloDiv');

 //create textnode
 var newDivtext=document.createTextNode('HelloWorld');

 //add text to div
 newDiv.appendChild(newDivtext);

 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 
console.log(newDiv);
container.insertBefore(newDiv,h1);
var newDiv=document.createElement('div');
 //add class
 newDiv.className='hello'
 //add id
 newDiv.id='hello1';

 //add attribute
 newDiv.setAttribute('title','HelloDiv');

 //create textnode
 var newDivtext=document.createTextNode('HelloWorld');

 //add text to div
 newDiv.appendChild(newDivtext);


var maincontainer=document.querySelector('#main');
var additemtitle=maincontainer.querySelector('h2.title')
maincontainer.insertBefore(newDiv,additemtitle)


var newDiv=document.createElement('div');
 //add class
 newDiv.className='hello'
 //add id
 newDiv.id='hello1';

 //add attribute
 newDiv.setAttribute('title','HelloDiv');

 //create textnode
 var newDivtext=document.createTextNode('HelloWorld');

 //add text to div
 newDiv.appendChild(newDivtext);

var itemList=document.getElementById('items');
var firstitem=itemList.querySelector('li');
itemList.insertBefore(newDiv,firstitem);



;

