function onDragStart(ev) {
  ev
    .dataTransfer
    .setData('text/plain', ev.target.id)

  ev
    .currentTarget
    .style
    .backgroundColor = 'yellow'
}

function onDragOver(ev) {
  ev.preventDefault()
}

function onDrop(ev) {
  console.log(`dataTransfer: ${ev.dataTransfer.getData('text')}`)
  const id = ev.dataTransfer.getData('text')
  const draggableElement = document.getElementById(id)
  const dropzone = ev.target
  dropzone.appendChild(draggableElement)
  ev.dataTransfer.clearData()
}