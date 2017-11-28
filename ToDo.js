function ToDo(){
  this.todo = [];
}
ToDo.prototype.addTodo= function(item){
  this.todo.push(item)
}
ToDo.prototype.getItems= function(){
  return this.todo
}
ToDo.prototype.delete = function(id){
 this.todo =  this.todo.filter(item => item.id !== id)
}
ToDo.prototype.complete = function(id){
  this.todo.find(item => item.id == id).complete = true;
}
// const todo = new ToDo();
// todo.addTodo({complete: false,id : 1, title: 'aurel'})
// todo.addTodo({ complete: false, id: 2, title: 'bob'})
// todo.complete(1)
// console.log(todo.getItems(1))


function DomManipulation(){}
DomManipulation.prototype.init = function(){
  const form = document.createElement('form');
  const input = document.createElement('input')
  const ul = document.createElement('ul')
  input.id = "AddItemInput"
  form.id="addItemForm"
  input.placeholder = "Add an item"
  form.appendChild(input);
  return {
    form, ul
  }
}
DomManipulation.prototype.displayItem = function(item){
  const li = document.createElement('li');
  li.innerText = item.title
  return li;
}
DomManipulation.prototype.createUniqueId = function(){

}
DomManipulation.prototype.addTodoEvent = function(form, createTodo, unorderedList){
  const displayItem = this.displayItem;
  const id = new Date().getUTCMilliseconds();
  form.addEventListener('submit', function(e){
        e.preventDefault();
        const input = document.querySelector('input').value
        const item = {complete: false,id : id, title: input}
        createTodo(item);
        unorderedList.appendChild(displayItem(item))
    }) 
}

 

const dom = new DomManipulation();
document.querySelector('#app').appendChild(dom.init().form)
document.querySelector('#app').appendChild(dom.init().ul)
const todo = new ToDo();
dom.addTodoEvent(
  document.getElementById('addItemForm'),
  todo.addTodo.bind(todo),
  document.querySelector('ul'))


