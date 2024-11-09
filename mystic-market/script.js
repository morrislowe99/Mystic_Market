/* Background start */

const colorsStart = [
    "#2C051A",
    "#290916",
    "#4C0120",
    "#66042D",
    "#311432",
    "#4D0F28",
    "#A10559",
    "#A32CC4",
    "#601A36",
    "#620436",
    "#9B7CB8",
    "#A45EE5",
    "#663047",
    "#7A4A88",
    "#AF69EE",
    "#B660CD",
    "#710193",
    "#9866C5",
    "#BD93D3",
    "#E39FF6",
];

function randomColorStart() {
    const index = Math.floor(Math.random() * colorsStart.length);
    return colorsStart[index];
}

document.addEventListener('DOMContentLoaded', () => {
    const initialColor = randomColorStart();
    const style = document.createElement('style');
    style.textContent = `
        .intro,
        .crystal-box,
        .crystal-box-2,
        .other,
        .other-2 {
          background-color: ${initialColor};
        }
    `;
    document.head.appendChild(style);
});



/* Background intro and crystal-box */

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const crystalBoxes = document.querySelectorAll('.crystal-box');
    const colors = [
        "#2C051A",
        "#290916",
        "#4C0120",
        "#66042D",
        "#311432",
        "#4D0F28",
        "#A10559",
        "#A32CC4",
        "#601A36",
        "#620436",
        "#9B7CB8",
        "#A45EE5",
        "#663047",
        "#7A4A88",
        "#AF69EE",
        "#B660CD",
        "#710193",
        "#9866C5",
        "#BD93D3",
        "#E39FF6",
    ];

    function randomColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

    function updateBgColor() {
        const color = randomColor();
        intro.style.backgroundColor = color;
        crystalBoxes.forEach((box) => (box.style.backgroundColor = color));
    }

    intro.classList.add('color-transition');
    crystalBoxes.forEach((box) => box.classList.add('color-transition'));

    setInterval(updateBgColor, 1500);
});



/* Background crystal-box-2 */

document.addEventListener('DOMContentLoaded', () => {
    const crystalBoxes2 = document.querySelectorAll('.crystal-box-2');
    const colors2 = [
        "#2C051A",
        "#290916",
        "#4C0120",
        "#66042D",
        "#311432",
        "#4D0F28",
        "#A10559",
        "#A32CC4",
        "#601A36",
        "#620436",
        "#9B7CB8",
        "#A45EE5",
        "#663047",
        "#7A4A88",
        "#AF69EE",
        "#B660CD",
        "#710193",
        "#9866C5",
        "#BD93D3",
        "#E39FF6",
    ];

    function randomColor2() {
        const index = Math.floor(Math.random() * colors2.length);
        return colors2[index];
    }

    function updateBgColor2() {
        const color = randomColor2();
        crystalBoxes2.forEach((box) => (box.style.backgroundColor = color));
    }

    crystalBoxes2.forEach((box) => box.classList.add('color-transition'));

    setInterval(updateBgColor2, 1500);
});



/* Background other */

document.addEventListener('DOMContentLoaded', () => {
    const other = document.querySelector('.other');
    const colorsOther = [
        "#2C051A",
        "#290916",
        "#4C0120",
        "#66042D",
        "#311432",
        "#4D0F28",
        "#A10559",
        "#A32CC4",
        "#601A36",
        "#620436",
        "#9B7CB8",
        "#A45EE5",
        "#663047",
        "#7A4A88",
        "#AF69EE",
        "#B660CD",
        "#710193",
        "#9866C5",
        "#BD93D3",
        "#E39FF6",
    ];

    function randomColorOther() {
        const index = Math.floor(Math.random() * colorsOther.length);
        return colorsOther[index];
    }

    function updateBgColorOther() {
        const color = randomColorOther();
        other.style.backgroundColor = color;
    }

    other.classList.add('color-transition');

    setInterval(updateBgColorOther, 1500);
});



/* Background other-2 */

document.addEventListener('DOMContentLoaded', () => {
    const other2 = document.querySelector('.other-2');
    const colorsOther2 = [
        "#2C051A",
        "#290916",
        "#4C0120",
        "#66042D",
        "#311432",
        "#4D0F28",
        "#A10559",
        "#A32CC4",
        "#601A36",
        "#620436",
        "#9B7CB8",
        "#A45EE5",
        "#663047",
        "#7A4A88",
        "#AF69EE",
        "#B660CD",
        "#710193",
        "#9866C5",
        "#BD93D3",
        "#E39FF6",
    ];

    function randomColorOther2() {
        const index = Math.floor(Math.random() * colorsOther2.length);
        return colorsOther2[index];
    }

    function updateBgColorOther2() {
        const color = randomColorOther2();
        other2.style.backgroundColor = color;
    }

    other2.classList.add('color-transition');

    setInterval(updateBgColorOther2, 1500);
});



/* Products-button */

function scrollToCrystals() {
    const introSection = document.querySelector('.intro');
    const crystalsSection = document.getElementById('crystals');
    const targetPosition = introSection.offsetHeight
    customScrollTo(targetPosition, 1500);
}

function customScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = easeInOutQuad(Math.min(timeElapsed / duration, 1));
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}



/* Carousel rotation */

const carouselBoxes = document.querySelectorAll('.crystal-box');

carouselBoxes.forEach(box => {
    const carousel = box.querySelector('.carousel');
    const nextBtn = box.querySelector('.nextBtn');
    const prevBtn = box.querySelector('.prevBtn');

    nextBtn.addEventListener('click', (event) => {
        const lastChild = carousel.lastElementChild;
        carousel.removeChild(lastChild);
        carousel.prepend(lastChild);
        event.stopPropagation();
    });

    prevBtn.addEventListener('click', (event) => {
        const firstChild = carousel.firstElementChild;
        carousel.removeChild(firstChild);
        carousel.appendChild(firstChild);
        event.stopPropagation();
    });
});



/* Buy-button and shopping-bag */

let shoppingBag = {};

// Assuming you have a function to get the current user ID. Replace this with actual implementation.
function getCurrentUserId() {
    // Implementation here...
}

document.addEventListener('DOMContentLoaded', () => {
    const savedShoppingBag = localStorage.getItem('shoppingBag');
    if (savedShoppingBag) {
        shoppingBag = JSON.parse(savedShoppingBag);
        updateBagIcon();
    }

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productBox = event.target.closest('.crystal-box-2');
            const productName = productBox.querySelector('h1').textContent;
            const productImageSrc = productBox.querySelector('.product-image-2').src;
            const productPrice = parseFloat(productBox.querySelector('.price').textContent.replace('Price: €', '').replace(',', '.'));
            const productUnit = productBox.querySelector('.unit').textContent.replace('Unit: ', '');
            if (productName in shoppingBag) {
                shoppingBag[productName].quantity++;
            } else {
                shoppingBag[productName] = {
                    quantity: 1,
                    imageSrc: productImageSrc,
                    price: productPrice,
                    unit: productUnit
                };
            }
            updateBagIcon();
            updateTotalPrice();
        });
    });

    const shoppingBagIcon = document.querySelector('#shopping-bag-icon');
    shoppingBagIcon.addEventListener('click', (event) => {
        event.preventDefault();
        if (modalLoupe.style.display === 'block') {
            modalLoupe.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        displayBagContents();
        updateTotalPrice();
    });

    const modal = document.querySelector('#modal');
    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    const bagContentsElement = document.querySelector('#shopping-bag-contents');
    bagContentsElement.addEventListener('click', function(event) {
        const button = event.target;
        if (button.textContent === "+") {
            const productName = button.parentNode.querySelector('div:nth-child(2)').textContent;
            shoppingBag[productName].quantity++;
            updateBagIcon();
            displayBagContents();
            updateTotalPrice();
        } else if (button.textContent === "-") {
            const productName = button.parentNode.querySelector('div:nth-child(2)').textContent;
            shoppingBag[productName].quantity--;
            if (shoppingBag[productName].quantity === 0) {
                delete shoppingBag[productName];
            }
            updateBagIcon();
            displayBagContents();
            updateTotalPrice();
        }
    });

    // When the page loads, fetch the status of the latest payment for the current user
    const userId = getCurrentUserId(); // get the current user ID
    fetch(`http://localhost:3000/payment-complete?userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Payment completed!') {
            // Display a thank-you message or receipt
        } else {
            // Show an error message and prompt the user to try again
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function updateBagIcon() {
    const totalItems = Object.values(shoppingBag).reduce((a, b) => a + b.quantity, 0);
    const bagDisplay = document.querySelector('#bag-display');
    if (totalItems === 0) {
        bagDisplay.style.display = 'none';
    } else {
        bagDisplay.style.display = 'flex';
        if (totalItems > 99) {
            bagDisplay.textContent = '99+';
        } else {
            bagDisplay.textContent = totalItems;
        }
    }
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
}

function displayBagContents() {
    const bagContentsElement = document.querySelector('#shopping-bag-contents');
    bagContentsElement.innerHTML = '';

    if (Object.keys(shoppingBag).length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Your bag is empty';
        emptyMessage.className = 'empty-message';
        bagContentsElement.appendChild(emptyMessage);
    } else {
        for (const [product, details] of Object.entries(shoppingBag)) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('bag-item');
            itemDiv.style.display = 'flex';
            itemDiv.style.justifyContent = 'space-around';
            itemDiv.style.alignItems = 'center';

            const productImage = document.createElement('img');
            productImage.src = details.imageSrc;
            productImage.style.maxWidth = "80px";
            productImage.style.maxHeight = "80px";
            itemDiv.appendChild(productImage);

            const titleDiv = document.createElement('div');
            titleDiv.textContent = product;
            itemDiv.appendChild(titleDiv);

            const quantityDiv = document.createElement('div');
            const formattedUnit = details.unit.replace('Per ', '');
            const capitalizedUnit = formattedUnit.charAt(0).toUpperCase() + formattedUnit.slice(1);
            const plural = details.quantity > 1 ? 's' : '';
            quantityDiv.textContent = `${details.quantity} ${capitalizedUnit}${plural}`;
            itemDiv.appendChild(quantityDiv);

            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.textContent = '€' + (details.price * details.quantity).toFixed(2);
            itemDiv.appendChild(totalPriceDiv);

            const buttonDiv = document.createElement('div');
            buttonDiv.style.display = 'flex';
            buttonDiv.style.justifyContent = 'space-between';
            buttonDiv.style.width = '44px';

            const plusButton = document.createElement('button');
            plusButton.textContent = '+';
            plusButton.classList.add('quantity-button');
            plusButton.addEventListener('click', function() {
                shoppingBag[product].quantity++;
                updateBagIcon();
                displayBagContents();
                updateTotalPrice();
            });
            buttonDiv.appendChild(plusButton);

            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            minusButton.classList.add('quantity-button');
            minusButton.addEventListener('click', function() {
                shoppingBag[product].quantity--;
                if (shoppingBag[product].quantity === 0) {
                    delete shoppingBag[product];
                }
                updateBagIcon();
                displayBagContents();
                updateTotalPrice();
            });
            buttonDiv.appendChild(minusButton);

            itemDiv.appendChild(buttonDiv);
            bagContentsElement.appendChild(itemDiv);
        }
    }
    const modal = document.querySelector('#modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateTotalPrice() {
    const totalPrice = Object.values(shoppingBag).reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const modalFooter = document.querySelector('.modal-footer');
    modalFooter.innerHTML = '';
    modalFooter.style.display = 'flex';
    modalFooter.style.justifyContent = 'space-between';
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.textContent = 'Total: ' + (totalPrice === 0 ? '€0.-' : '€' + totalPrice.toFixed(2));
    totalPriceDiv.classList.add('total-price');
    modalFooter.appendChild(totalPriceDiv);

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.classList.add('checkout-button');
    modalFooter.appendChild(checkoutButton);

    checkoutButton.addEventListener('click', () => {
        fetch('http://localhost:3000/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Check if the approvalUrl exists before redirecting
            if (data.approvalUrl) {
                window.location.href = data.approvalUrl;
            } else {
                console.error('Approval URL is undefined');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

}



/* Loupe */

const loupeIcon = document.querySelector('#loupe-icon');
const modalLoupe = document.querySelector('#modal-loupe');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#modal-search-result');

const products = {
    "Raw Amethyst Piece": {
        url: "amethyst.html",
        image: "images/amethyst/raw-amethyst-piece.png",
    },
    "Polished Amethyst Point": {
        url: "amethyst.html",
        image: "images/amethyst/polished-amethyst-point.png",
    },
    "Raw Amethyst Spitz": {
        url: "amethyst.html",
        image: "images/amethyst/raw-amethyst-spitz.png",
    },
    "Raw Celestite Piece": {
        url: "celestite.html",
        image: "images/celestite/raw-celestite-piece.png",
    },
    "Raw Celestite Cluster": {
        url: "celestite.html",
        image: "images/celestite/raw-celestite-cluster.png",
    },
    "Raw Celestite Piece 2": {
        url: "celestite.html",
        image: "images/celestite/raw-celestite-piece-2.png",
    },
    "Polished Labradorite Pocket Stone": {
        url: "labradorite.html",
        image: "images/labradorite/polished-labradorite-pocket-stone.png",
    },
    "Semi Polished Labradorite Piece": {
        url: "labradorite.html",
        image: "images/labradorite/semi-polished-labradorite-piece.png",
    },
    "Polished Labradorite Sculpture": {
        url: "labradorite.html",
        image: "images/labradorite/polished-labradorite-sculpture.png",
    },
    "Polished Pink Tourmaline In Lepidolite Pocket Stone": {
        url: "lepidolite.html",
        image: "images/lepidolite/polished-pink-tourmaline-in-lepidolite-pocket-stone.png",
    },
    "Polished Lepidolite Pocket Stone": {
        url: "lepidolite.html",
        image: "images/lepidolite/polished-lepidolite-pocket-stone.png",
    },
    "Polished Pink Tourmaline And Lepidolite In Pegmatite Sculpture": {
        url: "lepidolite.html",
        image: "images/lepidolite/polished-pink-tourmaline-and-lepidolite-in-pegmatite-sculpture.png",
    },
    "Polished Lapis Lazuli Hand Stone": {
        url: "lapis-lazuli.html",
        image: "images/lapis-lazuli/polished-lapis-lazuli-hand-stone.png",
    },
    "Polished Lapis Lazuli Sphere": {
        url: "lapis-lazuli.html",
        image: "images/lapis-lazuli/polished-lapis-lazuli-sphere.png",
    },
    "Polished Lapis Lazuli Sphere 2": {
        url: "lapis-lazuli.html",
        image: "images/lapis-lazuli/polished-lapis-lazuli-sphere-2.png",
    },
    "Raw Rose Quartz Piece": {
        url: "rose-quartz.html",
        image: "images/rose-quartz/raw-rose-quartz-piece.png",
    },
    "Polished Rose Quartz Skull": {
        url: "rose-quartz.html",
        image: "images/rose-quartz/polished-rose-quartz-skull.png",
    },
    "Polished Rose Quartz Heart": {
        url: "rose-quartz.html",
        image: "images/rose-quartz/polished-rose-quartz-heart.png",
    }
}

loupeIcon.addEventListener('click', (event) => {
    event.preventDefault();
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    modalLoupe.style.display = 'block';
    document.body.style.overflow = 'hidden';
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
    searchInput.focus();
});

modalLoupe.addEventListener('click', (event) => {
    if (event.target == modalLoupe) {
        modalLoupe.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

searchInput.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();

    if (searchString === '') {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    } 

    const filteredProducts = [];

    for (let [product, details] of Object.entries(products)) {
        if (product.toLowerCase().includes(searchString)) {
            filteredProducts.push([product, details]);
        }
    }

    filteredProducts.sort((a, b) => {
        let aIndex = a[0].toLowerCase().indexOf(searchString);
        let bIndex = b[0].toLowerCase().indexOf(searchString);

        return b[0].substring(bIndex).localeCompare(a[0].substring(aIndex));
    });

    // Update searchResults
    searchResults.innerHTML = '';
    if (filteredProducts.length > 0) {
        searchResults.style.display = 'block';

        for (let i = 0; i < filteredProducts.length; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('search-item');

            const link = document.createElement('a');
            link.href = filteredProducts[i][1].url;

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('search-item-image');
            const productImage = document.createElement('img');
            productImage.src = filteredProducts[i][1].image;
            productImage.style.maxWidth = "80px";
            productImage.style.maxHeight = "80px";
            imgDiv.appendChild(productImage);
            link.appendChild(imgDiv);

            const textDiv = document.createElement('div');
            textDiv.classList.add('search-item-text');
            const productName = document.createTextNode(filteredProducts[i][0]);
            textDiv.appendChild(productName);
            link.appendChild(textDiv);

            itemDiv.appendChild(link);
            searchResults.appendChild(itemDiv);
        }

    } else {
        searchResults.style.display = 'none';
    }
});