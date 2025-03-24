//animations
const thanks = document.getElementById("thanksSection");
const rating = document.getElementById("ratingSection");
const ratingBTN = document.querySelector("#thanksSection button");
const alertMsg = document.querySelector(".alert");
const cardAlert = document.querySelector("#rateCard");

//for buttons interaction
const numberBtn = document.querySelectorAll(".num-btn");
let selectedValue = null;

//BUTTONS INTERACTION
numberBtn.forEach((element) => {
  element.addEventListener("click", () => {
    numberBtn.forEach((btn) => btn.classList.remove("active"));

    element.classList.add("active");
    selectedValue = element.getAttribute("data-value");
  });
});

function submit() {

  if (selectedValue) {
    rating.style.opacity = "0";
    ratingBTN.innerHTML = `You selected ${selectedValue} out of 5`;

    rating.addEventListener( "transitionend", function () { //Start after rating opacity animation has finished
        rating.style.visibility = "hidden";
        thanks.style.opacity = "1";
        thanks.style.visibility = "visible";
      },
      /* { once: true } */
    );

    alertMsg.classList.remove("alert-show");
    cardAlert.style.border = "none";
    console.log(`Selected rate: ${selectedValue}`);

    setTimeout(function () { //reload the page after the rating was successful
      window.location.reload();
    }, 5000); 


  } else {
    console.error("Please select a value first.");
    alertMsg.classList.add("alert-show");
    cardAlert.style.border = "1px solid var(--alert)";
  }
}
