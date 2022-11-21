// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

$(document).ready(function ()
{

if (localStorage["12am"] !== null && localStorage["12am"] !== undefined) {
  var nineAm = $("<p>" + localStorage["12am"] + "</p>");
  $("#nineAm").append(nineAm[0].innerText);
} else {
  ("");
} });

if (localStorage["1am"] !== null && localStorage["1am"] !== undefined) {
  var tenAm = $("<p>" + localStorage["1am"] + "</p>");
  $("#tenAm").append(tenAm[0].innerText);
} else {
  ("");
}

if (localStorage["2am"] !== null && localStorage["2am"] !== undefined) {
  var elevenAm = $("<p>" + localStorage["2am"] + "</p>");
  $("#elevenAm").append(elevenAm[0].innerText);
} else {
  ("");
}
if (localStorage["3am"] !== null && localStorage["3am"] !== undefined) {
  var twelvePm = $("<p>" + localStorage["3am"] + "</p>");
  $("#twelvePm").append(twelvePm[0].innerText);
} else {
  ("");
}
if (localStorage["4am"] !== null && localStorage["4am"] !== undefined) {
  var onePm = $("<p>" + localStorage["4am"] + "</p>");
  $("#onePm").append(onePm[0].innerText);
} else {
  ("");
}
if (localStorage["5am"] !== null && localStorage["5am"] !== undefined) {
  var twoPm = $("<p>" + localStorage["5am"] + "</p>");
  $("#twoPm").append(twoPm[0].innerText);
} else {
  ("");
}
if (localStorage["6am"] !== null && localStorage["6am"] !== undefined) {
  var threePm = $("<p>" + localStorage["6am"] + "</p>");
  $("#threePm").append(threePm[0].innerText);
} else {
  ("");
}
if (localStorage["7am"] !== null && localStorage["7am"] !== undefined) {
  var fourPm = $("<p>" + localStorage["7am"] + "</p>");
  $("#fourPm").append(fourPm[0].innerText);
} else {
  ("");
}
if (localStorage["8am"] !== null && localStorage["8am"] !== undefined) {
  var fivePm = $("<p>" + localStorage["8am"] + "</p>");
  $("#fivePm").append(fivePm[0].innerText);
} else {
  ("");
}
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
    var tenAm = $("<p>" + localStorage["10am"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
    var onePm = $("<p>" + localStorage["1pm"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
    var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
    var threePm = $("<p>" + localStorage["3pm"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
    var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
    $("#fourPm").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
    var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
    $("#fivePm").append(fivePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["6pm"] !== null && localStorage["6pm"] !== undefined) {
    var nineAm = $("<p>" + localStorage["6pm"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["7pm"] !== null && localStorage["7pm"] !== undefined) {
    var tenAm = $("<p>" + localStorage["7pm"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["8pm"] !== null && localStorage["8pm"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["8pm"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["9pm"] !== null && localStorage["9pm"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["9pm"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["10pm"] !== null && localStorage["10pm"] !== undefined) {
    var onePm = $("<p>" + localStorage["10pm"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11pm"] !== null && localStorage["11pm"] !== undefined) {
    var twoPm = $("<p>" + localStorage["11pm"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var threePm = $("<p>" + localStorage["12pm"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);