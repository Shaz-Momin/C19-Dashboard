const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    emptyColMsg();    
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

function remove(elm) {
  var parent = elm.parentNode;
  var grand_father = parent.parentNode;
  grand_father.removeChild(parent);

  emptyColMsg();
}

function emptyColMsg() {
  containers.forEach(container => {
    console.log(container.childElementCount);
    if (container.childElementCount == 1) {
      container.querySelector('.emptyCol').style.display = "block";
    } else {
      container.querySelector('.emptyCol').style.display = "none";
    }
  })
}


$(".draggable").hover(function() {
    $(this).find(".removeBtn").css("visibility","visible");
    $(this).style.cursor = "move";
}, function () {
    $(this).find(".removeBtn").css("visibility","hidden");
    $(this).style.cursor = "default";
})



//Web Ticker 