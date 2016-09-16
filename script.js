$(function() {
  printRandomNorm();

  $("a#generate-new").click(function() {
    printRandomNorm();
  });
});


var norms = [
  'We assimilate with our clients (client hours, dress, tolerance for expenses, etc.).',
  'We don’t let clients see us sweat.',
  'We are resourceful – it’s okay if we don’t know the answer, we’ll find it expeditiously and get back to our client.',
  'We frequently practice the “Around the Horn” tradition.',
  'A sense of humor is a job requirement.',
  'Beer will always be served at 3:30 or earlier',
  'We have fun. Lots of fun. All the time. Fun.',
  'We like to work hard. Passion is a pre-requisite.',
  'We use git very well.'
];

function printRandomNorm() {
  var normInd = Math.floor(Math.random() * norms.length);
  $('p.norm').text(norms[normInd]);
}