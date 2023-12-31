

var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var filter=document.getElementById("filter");




 //for submit event
 form.addEventListener('submit',addItem);
 // Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filterItems);
 

function addItem(e) {
  e.preventDefault();
 // Get input value
  var newItem = document.getElementById('item').value;
  var newDes = document.getElementById('description').value
 // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  getele
  // Add text node with input value


  //li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(newItem + ' ' + newDes))

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append delete button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append edit button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}
// Retrieve existing list items
var existingItems = itemList.querySelectorAll('.list-group-item');

// Loop through existing items and add edit buttons
existingItems.forEach(function(item) {
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    item.appendChild(editBtn);
});


// Remove item
function removeItem(e){
 if(e.target.classList.contains('delete')){
   if(confirm('Are You Sure?')){
     var li = e.target.parentElement;
     itemList.removeChild(li);
   }
 }
}
 //filter Items
 function filterItems(e){
  //convert text to lowercase
  var text=e.target.value.toLowerCase();
  //Get list
  var items=itemList.getElementsByTagName('li');
//console.log(items)
Array.from(items).forEach(function(item){
  var itemName=item.firstChild.textContent;
  //console.log(itemName);
  if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display="block";
  }
  else{
    item.style.display='none';
  }
})

 }