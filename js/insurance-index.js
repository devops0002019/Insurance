/*

NAVBAR

========================================================== */

// 1. Inject navbar Data

const navbarData = [
    {

        brand:["Insurance"],

        navItem1:"index.html",
        navText1:"Personal Insurance",
        navItem2:"about-us.html",
        navText2:"Health Insurance",
        navItem3:"inventory.html",
        navText3:"Car Insurance",

    }
];

// 1. Build navbar Template

function navbarTemplate(item) {
    return `
    <div class="navbar">
        <figure class="brand with-text">
            <a href="#">
                <h1>${item.brand}</h1>
            </a>
        </figure>
        <input type="checkbox" id="toggle" class="toggle">
        <label for="toggle" class="burger"><span></span></label>
        <ul class="menu">
            <li><a href=" ${item.navItem1} "> ${item.navText1} </a></li>
            <li><a href=" ${item.navItem2} "> ${item.navText2} </a></li>
            <li><a href=" ${item.navItem3} "> ${item.navText3} </a></li>
        </ul>
    </div>
  `
}

// 1. Display navbar in the DOM

document.getElementById("navbar").innerHTML = `${navbarData.map(navbarTemplate).join('')};`;









/*

FOTTER

========================================================== */

// Inject Data

const columns_data = [
    {
        brand:            ["Insurance"],

        quickLinks:       ["Links"],
        listIcon:         ["fa fa-angle-right"],
        linkUrl1:         ["https://www.facebook.com"],
        linkLabel1:       ["www.mylinks.com"],
    },
];

// Build Template

function columns_template(column) {
     return `
    <div class="grid set-cols-4">
        <ul class="column brand">
            <li><h1>${column.brand}</h1></li>
        </ul>

        <ul class="column">
            <li><h5>${column.quickLinks}</h5></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
        </ul>
        <ul class="column">
            <li><h5>${column.quickLinks}</h5></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
        </ul>
        <ul class="column">
            <li><h5>${column.quickLinks}</h5></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
            <li><a href="${column.linkUrl1}">${column.linkLabel1}</a></li>
        </ul>



    </div>
   `
  ;
}

// Display html in the DOM | Control Layout (columns)

document.getElementById("footer").innerHTML = `${columns_data.map(columns_template).join('')}`;
