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
  initTags();
  initLinks();
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

function initLinks()  {
  // add "target=_blank" attribute to all external links
  var a = new RegExp('/' + window.location.host + '/');
  $('a').each(function() {
    if (!a.test(this.href)) {
      $(this).attr("target","_blank");
    }
  })  
}
