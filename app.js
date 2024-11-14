let smallimages = document.getElementsByClassName("oldImg");
for(let i=0;i<smallimages.length;i++)
{
   console.dir(smallimages[i].src="assets/spiderman_img.png");
}
console.dir(document.querySelector("h1"));
console.log(document.querySelector("#description"));
console.log(document.querySelector(".oldImg"));
console.log(document.querySelectorAll("div a"));
let para = document.querySelector('p');
console.dir(para.innerText);
console.dir(para.innerHTML);
console.log(para.textContent);
para.innerHTML="<b>iman</b>";
let img  = document.querySelector("img");
img.setAttribute('id',"spiderman");
console.log(img.getAttribute('class'));
let heading = document.querySelector("h1");
console.dir(heading.style.color="green");
heading.style.backgroundColor="yellow";
let links = document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++)
{
    links[i].style.color="yellow";
}
let img  = document.querySelectorAll("img")[0];
console.log(img.classList);
let heading = document.querySelector("h1");
heading.classList.add("green");
console.log(heading.classList);
heading.classList.remove("green");
console.log(heading.classList.contains("green"));
console.log(heading.classList.toggle("green"));
let box = document.querySelector(".box");
box.classList.add("yelloww");
console.log(box.classList)
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
let box  = document.querySelector(".box");
console.log(box.children)
let ul = document.querySelector("ul");
console.log(box.childElementCount);
console.log(ul.childElementCount);
console.log(ul.children[0]);
ul.children[2].previousElementSibling;
let img = document.querySelector("img");
console.dir(img.previousElementSibling.style.color);
let newp = document.createElement("p");
newp.innerText = "Hi,I am Iman Samanta";
console.dir(newp);
let body = document.querySelector("body");
box.appendChild(newp);
let btn = document.createElement('button');
btn.innerText="click me!";
newp.appendChild(btn);
box.prepend(newp);
let btn = document.createElement("button");
btn.innerHTML = "click me!!!";
let p =document.querySelector("p");
p.insertAdjacentElement('beforebegin',btn);
btn.remove()
