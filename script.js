const sidebarCollapse = document.querySelector('#sidebarCollapse')
const sideBar = document.querySelector('#sidebar')


sidebarCollapse.onclick = e => {
    sideBar.classList.toggle('active')
}