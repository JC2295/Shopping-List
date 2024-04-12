let item_list = document.querySelector("#item-list");

let text_input = document.querySelector("#enter-item-text");

let add_button = document.querySelector("#add-item-button");

add_button.addEventListener("click", addItem);

function addItem(){

    let text_input_value = text_input.value;

    text_input.value = "";

    let list_item = document.createElement("li");

    let list_item_text = document.createElement("span");

    let delete_item_button = document.createElement("button");

    let check_box = document.createElement("input");

    check_box.setAttribute("type", "checkbox");

    check_box.addEventListener("change", check);

    delete_item_button.innerText = "Delete";

    delete_item_button.addEventListener("click", deleteItem);

    list_item_text.innerText = text_input_value;

    list_item.appendChild(list_item_text);

    list_item.appendChild(check_box)

    list_item.appendChild(delete_item_button);

    item_list.appendChild(list_item);
}

function check() {

    let current_list_item = this.closest("li");   

    let current_span = current_list_item.querySelector("span");

    if (this.checked) {
        current_span.classList.add("checked");    
    } 
    else {
    current_span.classList.remove("checked");
    }
}

function deleteItem(){
    this.closest('li').remove();
}
