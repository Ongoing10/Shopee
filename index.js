//Giỏ hàng
let cart = [];
function addToCart(name, img) {
    cart.push({ name, img });
    updateCartUI();
}
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartFooter = document.getElementById("cart-footer");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
                    <img class="h-24 mb-2" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12fe8880616de161.png" alt="Chưa có sản phẩm">
                    <p class="text-gray-500">Chưa có sản phẩm</p>
                `;
        cartFooter.classList.add("hidden");
        cartCount.classList.add("hidden");
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("flex", "items-center", "mb-2");
            itemElement.innerHTML = `
                        <img class="w-12 h-12 mr-2" src="${item.img}" alt="${item.name}">
                        <span class="text-black">${item.name}</span>
                    `;
            cartItemsContainer.appendChild(itemElement);
        });
        cartFooter.classList.remove("hidden");
        cartCount.classList.remove("hidden");
        cartCount.textContent = cart.length;
    }
}

// addToCart("sản phẩm 1", 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w640_nl.webp');

//QR Tải ứng dụng
const downloadBtn = document.getElementById("download-btn");
const downloadDropdown = document.getElementById("download-dropdown");

downloadBtn.addEventListener("mouseenter", () => {
    downloadDropdown.classList.remove("hidden");
});

downloadBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!downloadDropdown.matches(":hover")) {
            downloadDropdown.classList.add("hidden");
        }
    }, 300);
});

downloadDropdown.addEventListener("mouseleave", () => {
    downloadDropdown.classList.add("hidden");
});

//Thông báo
const notiBtn = document.getElementById("notification-btn");
const notiDropdown = document.getElementById("notification-dropdown");

notiBtn.addEventListener("mouseenter", () => {
    notiDropdown.classList.remove("hidden");
});

notiBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!notiDropdown.matches(":hover")) {
            notiDropdown.classList.add("hidden");
        }
    }, 300);
});

notiDropdown.addEventListener("mouseleave", () => {
    notiDropdown.classList.add("hidden");
});

//Slideshow
let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
let dots = document.querySelectorAll(".dot");
let interval = setInterval(nextSlide, 3000);

function showSlide(i) {
    if (i >= slides.length) {
        slideIndex = 0;
    }
    if (i < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.add("hidden"));
    dots.forEach(dot => dot.classList.remove("bg-orange-500"));

    slides[slideIndex].classList.remove("hidden");
    dots[slideIndex].classList.add('bg-orange-500');
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function changeSlide(n) {
    clearInterval(interval);
    slideIndex += n;
    showSlide(slideIndex);
    interval = setInterval(nextSlide, 3000);
}

function jumpToSlide(n) {
    clearInterval(interval);
    slideIndex += n;
    showSlide(slideIndex);
    interval = setInterval(nextSlide, 3000);
}

showSlide(slideIndex);

// Hiển thị nút khi hover vào slideshow
const slideshowContainer = document.getElementById("slideshow-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

slideshowContainer.addEventListener("mouseenter", () => {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
});

slideshowContainer.addEventListener("mouseleave", () => {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
});


// Nút của phần danh mục
const productList = document.getElementById("product-list");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

function updateButtonsVisibility() {
    scrollLeftBtn.classList.toggle("hidden", productList.scrollLeft <= 10);
    scrollRightBtn.classList.toggle("hidden", productList.scrollLeft + productList.clientWidth >= productList.scrollWidth - 10);
}

scrollRightBtn.addEventListener("click", () => {
    productList.scrollBy({ left: productList.clientWidth, behavior: "smooth" });
});

scrollLeftBtn.addEventListener("click", () => {
    productList.scrollBy({ left: -productList.clientWidth, behavior: "smooth" });
});

productList.addEventListener("scroll", updateButtonsVisibility);

updateButtonsVisibility();

//Nút phần flashsale
const saleList = document.getElementById("sale-list");
const scrollLeftSale = document.getElementById("scroll-left-sale");
const scrollRightSale = document.getElementById("scroll-right-sale");

function updateSaleButtonsVisibility() {
    scrollLeftSale.classList.toggle("hidden", saleList.scrollLeft <= 10);
    scrollRightSale.classList.toggle("hidden", saleList.scrollLeft + saleList.clientWidth >= saleList.scrollWidth - 10);
}

scrollRightSale.addEventListener("click", () => {
    saleList.scrollBy({ left: saleList.clientWidth, behavior: "smooth" });
});

scrollLeftSale.addEventListener("click", () => {
    saleList.scrollBy({ left: -saleList.clientWidth, behavior: "smooth" });
});

saleList.addEventListener("scroll", updateSaleButtonsVisibility);

updateSaleButtonsVisibility();

//Nút phần offer
const offerList = document.getElementById("offer-list");
const scrollLeftOffer = document.getElementById("scroll-left-offer");
const scrollRightOffer = document.getElementById("scroll-right-offer");

function updateOfferButtonsVisibility() {
    scrollLeftOffer.classList.toggle("hidden", offerList.scrollLeft <= 10);
    scrollRightOffer.classList.toggle("hidden", offerList.scrollLeft + offerList.clientWidth >= offerList.scrollWidth - 10);
}

scrollRightOffer.addEventListener("click", () => {
    offerList.scrollBy({ left: offerList.clientWidth, behavior: "smooth" });
});

scrollLeftOffer.addEventListener("click", () => {
    offerList.scrollBy({ left: -offerList.clientWidth, behavior: "smooth" });
});

offerList.addEventListener("scroll", updateOfferButtonsVisibility);

updateOfferButtonsVisibility();

//Nút phần tìm kiếm
const topList = document.getElementById("top-list");
const scrollLeftTop = document.getElementById("scroll-left-top");
const scrollRightTop = document.getElementById("scroll-right-top");

function updateTopButtonsVisibility() {
    scrollLeftTop.classList.toggle("hidden", topList.scrollLeft <= 10);
    scrollRightTop.classList.toggle("hidden", topList.scrollLeft + topList.clientWidth >= topList.scrollWidth - 10);
}

scrollRightTop.addEventListener("click", () => {
    topList.scrollBy({ left: topList.clientWidth, behavior: "smooth" });
});

scrollLeftTop.addEventListener("click", () => {
    topList.scrollBy({ left: -topList.clientWidth, behavior: "smooth" });
});

topList.addEventListener("scroll", updateTopButtonsVisibility);

updateTopButtonsVisibility();


//Ô chat
function toggleChat() {
    let chatBox = document.getElementById("chatBox");
    chatBox.classList.toggle("hidden");
}

function toggleChatCollapse() {
    let chatBox = document.getElementById("chatBox");
    let chatContentWrapper = document.getElementById("chatContentWrapper");
    let chatList = document.getElementById("chatList");

    if (chatBox.classList.contains("w-[500px]")) {
        chatBox.classList.remove("w-[500px]");
        chatBox.classList.add("w-56");
        chatContentWrapper.classList.add("hidden");
        chatList.classList.remove("hidden");
    } else {
        chatBox.classList.remove("w-56");
        chatBox.classList.add("w-[500px]");
        chatContentWrapper.classList.remove("hidden");
    }
}

function closeChat() {
    let chatBox = document.getElementById("chatBox");
    let chatContentWrapper = document.getElementById("chatContentWrapper");
    let chatList = document.getElementById("chatList");

    chatBox.classList.add("hidden");
    chatBox.classList.remove("w-56");
    chatBox.classList.add("w-[500px]");
    chatContentWrapper.classList.remove("hidden");
}


function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value.trim();
    if (message !== "") {
        let chatContent = document.getElementById("chatContent");
        let newMessage = document.createElement("p");
        newMessage.textContent = "Bạn: " + message;
        newMessage.classList.add("p-2", "bg-gray-100", "rounded", "mb-1");
        chatContent.appendChild(newMessage);
        input.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}