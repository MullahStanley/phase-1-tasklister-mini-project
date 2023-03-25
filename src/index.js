document.addEventListener("DOMContentLoaded", () => {
  let form =document.querySelector('form')
  form.addEventListener('submit',(e) =>{
    e.preventDefault()
    createToDo(e.target.new-task-description.value)
    form.reset()
  })
});

function createToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent= 'X'
  p.textContent= `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function deleteToDo(e){
   e.target.parentNode.remove()
}