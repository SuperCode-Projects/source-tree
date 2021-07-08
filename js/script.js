/* Desktop Menü toggle */

const nav =document.querySelector("nav")
const menu =document.querySelector("#menu");
const close =document.querySelector("#sign");
menu.addEventListener("click",()=>{
    nav.style.display="block";
    close.addEventListener("click",()=>{nav.style.display="none"})
})






let blog = document.getElementById("blog");

let butter;
window.onload = () => {
    butter = Butter('key'); // key = ButterCMS_token

    butter.page.retrieve('*', 'sample-page'
    ).then(function (resp) {
        console.log(resp.data)
    }).catch(function (resp) {
        console.log(resp)
    });
}


/* Get Sheet Done */

GetSheetDone.labeledCols(
    "1nly19TQFb1rKMLBD9FjBBFrx1H2OIVzJ1HGPshVBMxs",
    1
  ).then((sheet) => {
  for (const product of sheet.data){
    blog.innerHTML += `
      <div>
        <h4>${product.title}</h4>
        <img src="${product.bild}">
        <p>${product.text} </p>
      </div>
    `
  }
  })




