document.documentElement.style .setProperty('--primary', '#005b96');
document.documentElement.style .setProperty('--secondary', '#b3cde0');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#59cee7');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1024px');
document.documentElement.style .setProperty('--navbar-background', '#fff');
document.documentElement.style .setProperty('--navbar-text-color', 'var(--primary)');
document.documentElement.style .setProperty('--header-background', '#fff');
document.documentElement.style .setProperty('--header-text-color', '#000');
document.documentElement.style .setProperty('--footer-background', 'var(--secondary)');
document.documentElement.style .setProperty('--footer-text-color', 'black');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', 'blue');


const navbar_data = [
   {
   }
];

function navbar_template(navbar) {
   return `
    <ul class="menu-list">
        <li><a href="#" class="brand"><h1>Insurance</h1></a></li>
        <li><a href="#" class="brand"><img src="img/logo.png" alt="Logo" height="42" width="42"></a></li>
    </ul>
 `;
}

document.getElementById("navbar-empty").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       brand:   "Insurance Inc",
   }
];
function footer_template(foot) {
    return `
    <div class="footer">
     <div class="grid set-cols-1">
       <div class="column">
        <h2 class="copyright"> Copyright ${foot.brand}. All rights reserved <span id="year"></span> </h2>
       </div>
     </div>
    </div>
  `;
}

document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
