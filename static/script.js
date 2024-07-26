// particles.js configuration
particlesJS.load('particles-js', 'static/particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Dynamic text
const dynamicText = document.getElementById('dynamic-text');
const texts = ["a Security Researcher.", "a Hacker.", "an Innovator."];
let currentTextIndex = 0;
let currentCharIndex = 0;

function type() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        dynamicText.textContent += texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        dynamicText.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    type();
});


const scrollAmount = 400; // Adjust based on item width

function scrolllLeft() {
    const container = document.querySelector('.certification-list');
    // Ensure you don't scroll beyond the left edge
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.certification-list');
    // Ensure you don't scroll beyond the right edge
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

