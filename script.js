/* Typing Effect */
const text = "Frontend Developer";
let index = 0;
const typing = document.querySelector(".typing");

function type() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

/* Navbar active click */
document.querySelectorAll("nav li").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});
// Modal functionality
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('cert-img');
const closeBtn = document.getElementsByClassName('close')[0];

const certLinks = document.querySelectorAll('.cert-link');

certLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('data-cert');
        modal.style.display = 'block';
        modalImg.src = imgSrc; // your certificate image path
    });
});

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
