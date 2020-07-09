const modal = document.querySelector('.modal')
const modal_img = document.querySelector('.modal .content img')
const close_btn = document.querySelector('.modal span')
const caption = document.querySelector('.modal .caption')

const grid_img = document.querySelectorAll('.grid-item img') // Select all images from Grid Container


grid_img.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modal_img.src = img.src;                   // Image link
        caption.innerHTML = `<em>${img.alt}</em>`;   // Caption
    })
})

close_btn.addEventListener('click', () => {
    modal.style.display = "none";
})