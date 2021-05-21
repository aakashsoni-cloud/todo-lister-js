var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
const log = document.getElementById("filter");
// FORM SUBMIT EVENTS //
form.addEventListener("submit", addItem);

// FORM DELETION EVENTS //
itemList.addEventListener("click", deleteItems);

// FORM SEARCH EVENT //
log.addEventListener("keyup", filterItem);




// Add item
function addItem(e) {
    e.preventDefault();
    

  // get input value
  var newItems = document.getElementById("item").value;
  //   console.log(newItems.value);

  // create new li element
    var li = document.createElement("li");
    
  // Add class
  li.className = "list-group-item";
  // console.log(li);
  // Add tect node with input values
  li.appendChild(document.createTextNode(newItems));

  // create a delete button
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";

  //Append Text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append Delete button  to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}



// Remove items
function deleteItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement; // parentElement is the li
      itemList.removeChild(li);
    }
  }
}



// Filter Items
function filterItem(e) {
  // convert tp lower case
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName("li");
//   console.log(items);
  // turn collection into arrays
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    // comapre item name with search box type

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
