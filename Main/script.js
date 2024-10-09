function showContent(frame) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const infoContent = document.getElementById('infoContent');

    if (frame === 'left') {
        modalImage.src = 'https://via.placeholder.com/300?text=Left+Frame+Image'; // Replace with your image
        infoContent.innerHTML = '<p>More information about the left frame...</p>';
    } else if (frame === 'right') {
        modalImage.src = 'https://via.placeholder.com/300?text=Right+Frame+Image'; // Replace with your image
        infoContent.innerHTML = '<p>More information about the right frame...</p>';
    }

    modal.style.display = 'flex'; // Show modal
}

function hideContent() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide modal
}

function hoverFrame(position) {
    // Optionally handle hover effects here
}

function resetFrames() {
    // Optionally reset styles here
}
