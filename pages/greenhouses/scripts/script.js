const check = document.getElementById("cancel")
const orderWindow = document.getElementById("order")
const orderButton = document.getElementById("orderButton")

function closePopUp() {
    if (orderWindow.style.visibility != "hidden") {
        orderWindow.style.visibility = "hidden"
        orderWindow.style.opacity = "0"
    }
}

function openPopUp() {
    if (orderWindow.style.visibility != "visible") {
        orderWindow.style.visibility = "visible"
        orderWindow.style.opacity = "1"
    }
}

check.addEventListener("click", closePopUp)
orderButton.addEventListener("click", openPopUp)