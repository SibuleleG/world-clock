function updateTime() {
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");

  let lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");

  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");

  let accraTime = moment().tz("Africa/Accra");

  accraDateElement.innerHTML = accraTime.format("MMMM Do YYYY");
  accraTimeElement.innerHTML = accraTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime(); // initial call
setInterval(updateTime, 1000);
