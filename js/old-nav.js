/* ==========================================================
NAVBAR
========================================================== */
// 1. Inject navbar Data
const navbar_data = [
    {
        brand:"Insurance",

        url1:"/index.html",
        label1:"Health Insurance",

        url2:"/car.html",
        label2:"Car Insurance",

        url3:"/life.html",
        label3:"Life Insurance",
    }
];
// 1. Build navbar Template
function navbar_template(navbar) {
    return `
    <nav id="navbar">

        <div class="nav">

            <figure class="brand">
                <a href="index.html"><h1>${navbar.brand}</h1></a>
            </figure>

            <div id="menu">
                <label for="toggle" class="toggles">&#9776;</label>
                <input id="toggle" type="checkbox" />
                <ul class="menu-list">
                    <li><a href="${navbar.url1}">${navbar.label1}</a></li>
                    <li><a href="${navbar.url2}">${navbar.label2}</a></li>
                    <li><a href="${navbar.url3}">${navbar.label3}</a></li>
                </ul>
            </div>

        </div>
    </nav>

  `
}






// 1. Display navbar in the DOM
document.getElementById("navbar").innerHTML = `${navbar_data.map(navbar_template).join('')}`;









/* ==========================================================
FOTTER
========================================================== */
// Inject Data
const footer_data = [
    {
        url1:      ["https://www.facebook.com"],
        txt1:       ["www.mylinks.com"],

        url2:      ["https://www.facebook.com"],
        txt2:       ["www.mylinks.com"],

        url3:      ["https://www.facebook.com"],
        txt3:       ["www.mylinks.com"],

        url4:      ["https://www.facebook.com"],
        txt4:       ["www.mylinks.com"],
    },
];
// Build Template
function footer_template(foot) {
     return `
    <div class="grid set-cols-4">

        <ul class="column">
            <li><a href="${foot.url1}">${foot.txt1}</a></li>
        </ul>
        <ul class="column">
            <li><a href="${foot.url3}">${foot.txt2}</a></li>
        </ul>
        <ul class="column">
            <li><a href="${foot.url4}">${foot.txt3}</a></li>
        </ul>
        <ul class="column">
            <li><a href="${foot.url4}">${foot.txt4}</a></li>
        </ul>

   `
  ;
}
// Display html in the DOM | Control Layout (columns)
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
