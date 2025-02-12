function scrollToSection(event,sectId) {
    event.preventDefault(); 
    const section = document.getElementById(sectId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
        });
    }
}

function showModal(event) {
    event.preventDefault();
    
    const nameValue = document.getElementById('name').value;
    console.log(nameValue);

    // Show the modal
    document.getElementById('modal').style.display = "flex";
}



