const SemanticUIColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown'
]

$(document).ready(() => {
  initTags()
})

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

function initTags() {
  $('.color-tags')
    .children()
    .map(function() {
      $(this).addClass(SemanticUIColors[6])
      //or make it random: randomInt(0, SemanticUIColors.length)
    })
}
