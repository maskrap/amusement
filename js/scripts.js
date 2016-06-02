$(document).ready(function() {
  var inches = parseInt(prompt("How tall are you in inches?"));

  if (inches >= 68) {
    $('#tallrides').show();
    $('#tootall').show();
    $('#tooold').show();

  }

  else if (inches >= 60 || inches >= 67) {
    $('#shortrides').show();
    $('#tooshort').show();
    $('#tooold').show();
  }


  else {
    $('#kiddierides').show();
    $('#tooshort').show();
    

  }

  event.preventDefault();
});
