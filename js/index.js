document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('animatedParagraph');
    const words = paragraph.innerText.split(' ');
    paragraph.innerHTML = ''; // Clear the paragraph content

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.style.opacity = 0;
        paragraph.appendChild(span);

        setTimeout(() => {
            span.style.transition = 'opacity 0.5s ease';
            span.style.opacity = 1;
        }, index * 80); // Adjust this time to control the speed
    });
});