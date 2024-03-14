'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Get the modal
var modal = document.getElementById("myModal-aividence");
// Get the button that opens the modal
var btn = document.getElementById("myBtn-aividence");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-aividence")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modal_cw_fml = document.getElementById("myModal-cw-fml");
// Get the button that opens the modal
var btn_cw_fml = document.getElementById("myBtn-cw-fml");
// Get the <span> element that closes the modal
var span_cw_fml = document.getElementsByClassName("close-cw-fml")[0];
// When the user clicks on the button, open the modal
btn_cw_fml.onclick = function() {
  modal_cw_fml.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_cw_fml.onclick = function() {
  modal_cw_fml.style.display = "none";
}

// Get the modal
var modal_st = document.getElementById("myModal-st");
// Get the button that opens the modal
var btn_st = document.getElementById("myBtn-st");
// Get the <span> element that closes the modal
var span_st = document.getElementsByClassName("close-st")[0];
// When the user clicks on the button, open the modal
btn_st.onclick = function() {
  modal_st.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_st.onclick = function() {
  modal_st.style.display = "none";
}

// Get the modal
var modal_istacky = document.getElementById("myModal-istacky");
// Get the button that opens the modal
var btn_istacky = document.getElementById("myBtn-istacky");
// Get the <span> element that closes the modal
var span_istacky = document.getElementsByClassName("close-istacky")[0];
// When the user clicks on the button, open the modal
btn_istacky.onclick = function() {
  modal_istacky.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_istacky.onclick = function() {
  modal_istacky.style.display = "none";
}

// Get the modal
var modal_cw_cv = document.getElementById("myModal-cw-cv");
// Get the button that opens the modal
var btn_cw_cv = document.getElementById("myBtn-cw-cv");
// Get the <span> element that closes the modal
var span_cw_cv = document.getElementsByClassName("close-cw-cv")[0];
// When the user clicks on the button, open the modal
btn_cw_cv.onclick = function() {
  modal_cw_cv.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_cw_cv.onclick = function() {
  modal_cw_cv.style.display = "none";
}

// Get the modal
var modal_rapdigger = document.getElementById("myModal-rapdigger");
// Get the button that opens the modal
var btn_rapdigger = document.getElementById("myBtn-rapdigger");
// Get the <span> element that closes the modal
var span_rapdigger = document.getElementsByClassName("close-rapdigger")[0];
// When the user clicks on the button, open the modal
btn_rapdigger.onclick = function() {
  modal_rapdigger.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_rapdigger.onclick = function() {
  modal_rapdigger.style.display = "none";
}

// Get the modal
var modal_ttp = document.getElementById("myModal-ttp");
// Get the button that opens the modal
var btn_ttp = document.getElementById("myBtn-ttp");
// Get the <span> element that closes the modal
var span_ttp = document.getElementsByClassName("close-ttp")[0];
// When the user clicks on the button, open the modal
btn_ttp.onclick = function() {
  modal_ttp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_ttp.onclick = function() {
  modal_ttp.style.display = "none";
}








// Close the modal when the user clicks somewhere

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event.target);
  if (event.target == modal_cw_fml) {
    modal_cw_fml.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal_st) {
    modal_st.style.display = "none";
  }
  if (event.target == modal_istacky) {
    modal_istacky.style.display = "none";
  }
  if (event.target == modal_cw_cv) {
    modal_cw_cv.style.display = "none";
  }
  if (event.target == modal_rapdigger) {
    modal_rapdigger.style.display = "none";
  }
  if (event.target == modal_ttp) {
    modal_ttp.style.display = "none";
  }
}