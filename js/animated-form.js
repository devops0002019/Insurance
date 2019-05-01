function animatedForm() {

    const arrows = document.querySelectorAll(".enter-next");

    arrows.forEach(arrow => {

        arrow.addEventListener("click", () => {

            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === "radio" && validateCoverage(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "radio" && validateGender(input)) {
                nextSlide(parent, nextForm);

            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            parent.addEventListener("animationend", () => {
                parent.style.animation = "";

            });
        });
    });
}


var progress = document.getElementById('progressBar');
var statusProgress = document.getElementById('status');




function validateCoverage(coverage) {

    var converage = document.getElementsByName('coverage');

    if (!(converage[0].checked || converage[1].checked)) {
        error("rgb(101, 109, 255)");
        progress.value = 25;
        statusProgress.innerHTML = `<span class="percentage">25% </span>Completed`;
        console.log("It's Working well!!!");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("It Doesn't Work well!!!");
        return false;
    }
}



function validateUser(user) {

    if (user.value.length < 6) {
        console.log("not enough characters");
        error("rgb(189, 87, 87)");
        console.log("It Doesn't Work well!!!");
        return false;
    } else {
        error("rgb(101, 109, 255)");
        progress.value = 50;
        statusProgress.innerHTML = `<span class="percentage">50% </span>Completed`;
        console.log("It's Working well!!!");
        return true;
    }
}

function validateEmail(email) {

    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email.value)) {
        error("rgb(101, 109, 255)");
        progress.value = 75;
        statusProgress.innerHTML = `<span class="percentage">75% </span>Completed`;
        return true;
    } else {
        error("rgb(189, 87, 87)");
        return false;
    }
}




function validateGender(gender) {

    var gen = document.getElementsByName('gender');

    if (!(gen[0].checked || gen[1].checked)) {
        error("rgb(101, 109, 255)");
        progress.value = 100;
        statusProgress.innerHTML = `<span class="percentage">100% </span>Completed`;
        return true;
    } else {
        error("rgb(189, 87, 87)");
        return false;
    }
}










    function nextSlide(parent, nextForm) {
        parent.classList.add('innactive');
        parent.classList.remove('active');
        nextForm.classList.add('active');
    }

    function error(color) {
        document.body.style.background = color;
    }

    animatedForm();

    console.log(" hello andrew ");




//} else if (location.className === location.value && validateGender(location)) {
//    nextSlide(parent, nextForm);
//
//    function validateCoverange(converage) {
//
//        select = document.getElementById('select');
//        if (select.value) {
//
//            error("rgb(101, 109, 255)");
//            return true;
//
//        } else {
//            error("rgb(189, 87, 87)");
//            return false;
//        }
//    }
//
