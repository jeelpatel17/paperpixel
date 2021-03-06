AOS.init({
    duration: 700
});

// COPY TO CLIPBOARD FUNCTION
function copyToClipboard(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");

    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);

    // Append it to the body
    document.body.appendChild(aux);

    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

    // Remove it from the body
    document.body.removeChild(aux);
    window.alert('Link copied!');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "70vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function darkToggler() {
    let body = document.querySelector('body');
    body.classList.toggle('dark-body');
}