function filterItems(category) {
    const items = document.querySelector(".other-projects").querySelectorAll('.item');
    items.forEach(item => {
        const classes = item.className.split(' ');
        const hasCategory = classes.includes(category.toLowerCase());
        console.log(category.toLowerCase());
        if (category === 'All' || hasCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}