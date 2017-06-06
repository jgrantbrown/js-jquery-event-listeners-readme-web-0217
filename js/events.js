//define functions here
function getIt() {
  $('p:first').on('click', () => {
    alert("I have been clicked!!!")
  })
}

function frameIt() {
  $('img:first').on('load', () => {
    $('img:first').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  })
}

function pressIt() {
  $('#typing').on('keydown', (key) => {
    if (key.which === 71) {
      alert('g was pressed!')
    }
  })
}


$(document).ready(function(){

  getIt()
  frameIt()
  submitIt()
  pressIt()

});
