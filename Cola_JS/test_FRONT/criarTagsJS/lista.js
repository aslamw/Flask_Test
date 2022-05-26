const input = document.querySelector('input')
const tarefas = document.querySelector('ul')

input.addEventListener('keydown', event =>{
    if(event.key !== 'Enter' || !input.value) return

    const tarefa = document.createElement('li')
    tarefa.textContent = input.value
    tarefas.append(tarefa)

    tarefa.addEventListener('click', evento =>{
        tarefa.remove()
    })

    input.value = ''

})