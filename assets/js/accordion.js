
           
// $(document).on('click', '.step', function() {
// var show = $(this).data('show');
// $(show).removeClass("hide").siblings().addClass("hide");
// });










//  var acc = document.getElementsByClassName("accordion");
//  var i;
 
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.maxHeight) {
//        panel.style.maxHeight = null;
//      } else {
//        panel.style.maxHeight = panel.scrollHeight + "px";
//      } 
//    });
//  }
// Event handling for elements with class 'step'
var steps = document.querySelectorAll('.step');
steps.forEach(function(step) {
  step.addEventListener('click', function() {
    var show = this.getAttribute('data-show');
    document.querySelector(show).classList.remove('hide');
    var siblings = getSiblings(this);
    siblings.forEach(function(sibling) {
      sibling.classList.add('hide');
    });
  });
});

// Accordion functionality
var accordions = document.getElementsByClassName('accordion');
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// Helper function to get siblings of an element
function getSiblings(element) {
  var siblings = [];
  var sibling = element.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}
