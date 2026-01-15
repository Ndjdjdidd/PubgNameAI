const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach(snow => {
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = (5 + Math.random() * 10) + 's';
    snow.style.fontSize = (12 + Math.random() * 12) + 'px';
    snow.style.opacity = Math.random();
});
