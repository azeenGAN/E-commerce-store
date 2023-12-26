//loading footer in every page
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

//onscroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('haha')
        }

    })
})

const hahaele = document.querySelectorAll('#dd');
hahaele.forEach((el) => observer.observe(el));



const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('haha')
        }
        else {
            entry.target.classList.remove('haha')
        }

    })
})

//onscroll repeated animation
const hahaele1 = document.querySelectorAll('#ddd');
hahaele1.forEach((el) => observer1.observe(el));


var headings1 = document.querySelectorAll('.discription h3 ');


headings1.forEach(function (heading) {
    heading.addEventListener("click", function () {
        // debugger;
        var paragraph = heading.nextElementSibling;
        if (paragraph.style.opacity == "0") {
            paragraph.style.opacity = "1";
        }
        else
            if (paragraph.style.opacity == "") {
                paragraph.style.opacity = "1";
            }
            else {
                paragraph.style.opacity = "0";
            }

    });

});



//popup

var cartno = 0
var cal = new Map();

function calculateSubtotalAll() {
    let sum = 0;
    cal.forEach((value, key) => {
        sum += value;
    });
    return sum;
}
const var1 = document.querySelectorAll(".bg-cart");
var1.forEach(function (button) {
    button.addEventListener("click", showUpperPart);
    async function showUpperPart() {
    
    var  count=1        
    var subtotal = 0
    var subtotalall = 0
    const tax = 16
    var total = 0
    var tax1 = 0
        var imgid = button.getAttribute('data-img-id');
        var imgsrc = document.getElementById(imgid).src;
        var imgprice = parseFloat(button.getAttribute('data-price'));
        var prdname = button.getAttribute('data-name');
        if(!(cal.has(imgid))){
        var upperpart = `
            <div class="upperpart">
                <div class="prdimg"><img src="${imgsrc}" alt="product image"></div>
                <div class="imgname">${prdname}</div>
                <div class="group">
                    <button id="phone-minus" class="btn btn-default"><i class="fas fa-minus"></i></button>
                    <input id="phone-number" type="number" min=0 class="here" value="${count}">
                    <button id="phone-plus" class="btn btn-default"><i class="fas fa-plus"></i></button>
                    <img src="images/remove.png" alt="" class="remove-item">
                </div>
                <div class="cartprice"><span id="phone-total">${imgprice} Rs</span></div>
            </div>`;
        }
        else{
            upperpart=null;
        }
        // Selecting calculation elements
        let subtotalElement = document.querySelector(".subtotal .value");
        let taxElement = document.querySelector(".tax .value");
        let totalElement = document.querySelector(".total .value");

        const upperpartelement = document.createElement('div');
        upperpartelement.classList.add('upperpartdiv');
        upperpartelement.innerHTML = upperpart;

        var wrapper = document.querySelector(".wrapper");
        wrapper.insertAdjacentElement('beforeend', upperpartelement);

        let tt = upperpartelement.querySelector("#phone-number");

        let inc = upperpartelement.querySelector("#phone-plus");
        inc.addEventListener('click', function () {
            count = ++count;
            tt.value = count;
            subtotal = imgprice * count;
            cal.set(imgid, subtotal);

            // Update subtotalall value
            subtotalall = calculateSubtotalAll();
            tax1 = (tax / 100) * subtotalall;
            total = subtotalall + tax1;

            updateDisplayedValues();
        });

        let dec = upperpartelement.querySelector("#phone-minus");
        dec.addEventListener('click', function () {
            if (count > 0) {
                count = --count;
                tt.value = count;
            }
            subtotal = imgprice * count;
            cal.set(imgid, subtotal);

            // Update subtotalall value
            subtotalall = calculateSubtotalAll();
            tax1 = (tax / 100) * subtotalall;
            total = subtotalall + tax1;

            updateDisplayedValues();
        });

        let removeitem = upperpartelement.querySelector(".remove-item");
        removeitem.addEventListener('click', function () {
            this.cartno = --this.cartno;
            cart_bagvalue.textContent = cartno;

            // Remove the subtotal for the current img_id from the Map
            cal.delete(imgid);

            // Update subtotalall value
            subtotalall = calculateSubtotalAll();
            tax1 = (tax / 100) * subtotalall;
            total = subtotalall + tax1;

            updateDisplayedValues();

            upperpartelement.remove();
        });

        tt.value = count;
        subtotal = imgprice * count;
        cal.set(imgid, subtotal);

        // Update subtotalall value
        subtotalall = calculateSubtotalAll();
        tax1 = (tax / 100) * subtotalall;
        total = subtotalall + tax1;

        updateDisplayedValues();

        // Item removal
        cartno = ++cartno;
        let cart_bagvalue = document.querySelector(".cart-bagvalue");
        cart_bagvalue.textContent = cartno;

        function updateDisplayedValues() {
            subtotalElement.textContent = subtotalall + " Rs";
            taxElement.textContent = tax1 + " Rs";
            totalElement.textContent = total + " Rs";
        }
    }
});

// Assigning values to them in initial position
// let subtotalElement = document.querySelector(".subtotal .value");
// let taxElement = document.querySelector(".tax .value");
// let totalElement = document.querySelector(".total .value");

// subtotalElement.textContent = subtotal.toFixed(2) + " Rs";
// taxElement.textContent = tax1.toFixed(2) + " Rs";
// totalElement.textContent = total.toFixed(2) + " Rs";

var vtt = document.querySelector('.popupfather');
var var7 = document.querySelector(".cart-bag");
var7.addEventListener('click', () => {
    vtt.style.display = 'block';
    ovr.style.opacity = "1";
});

var ovr = document.querySelector(".overlay");
setTimeout(() => {
    ovr.style.opacity = "1";
}, 200);

// Overlay display setting, cart removal.
const terminateButton = document.querySelector(".terminate-button");
terminateButton.addEventListener('click', function () {
    vtt.style.display = 'none';
    ovr.style.opacity = "0";
});

ovr.addEventListener('click', () => {
    vtt.style.display = 'none';
});





// gsap.to(".container1 .large123 i", {
//     scrollTrigger: ".container1 .large123 i", // start the animation when ".box" enters the viewport (once)
//     x: 200,
//   });
// Make sure to include the GSAP and ScrollTrigger libraries in your HTML file
// Example CDN links:
// <script src="https://unpkg.com/gsap@3.9.0/dist/gsap.min.js"></script>
// <script src="https://unpkg.com/scrolltrigger/scrolltrigger.min.js"></script>

// Import the ScrollTrigger plugin
// Import the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);


// gsap.to("#dd", {
//    x: 100,
//    scrollTrigger: {
//       trigger: "#dd",
//       start: "top center", // Adjust the start position as needed
//       end: "bottom center", // Adjust the end position as needed
//       scrub: true,
//    },
// });

// gsap.from(, {
//     x:-400,
//     duration:1,
//     delay:0.5,
//     scale:1.5

// })
// gsap.to(".container1 .large123 i", {
// x:0,
// scale:1})
