if (screen.width >= 699 && screen.width <= 900) {
document.location = "/landscape/index.html";
}
if (screen.width <= 699) {
document.location = "/mobile/index.html";
}
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function hackWebsite() {setInterval(function(){
Array.prototype.slice.call(
  document.querySelectorAll(
    'div,p,span,img,a,body')).map(function(tag){
	tag.style['transform'] = 'rotate(' + (
    Math.floor(Math.random() * 3) - 1) + 'deg)';
});
console.log("Lol this website is hacked noob");
console.log("hahahahahahahahahaha");
console.log("get rekt");
var allDivs = document.querySelectorAll('div');

for(var i = 0; i < allDivs.length; i++){
  allDivs[i].style['background-color'] = 'black';
  allDivs[i].style['color'] = 'green';
  allDivs[i].style['font-family'] = 'Monospace';
}
Array.prototype.slice.call(
  document.querySelectorAll('img')).map(function(tag){
    tag.src = 'https://i1.wp.com/techworm.page/wp-content/uploads/2019/05/download-17.png?w=1220';
});
function emptyField(e){
   element.style.WebkitAnimation = "shake .5s";
   element.style.animation = "shake .5s";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    const li = createLI(text);
    if (input.value == ''){
    emptyField(e);
    console.log('pressed');
    } else {
        input.value = '';
        ul.appendChild(li);
        }
});
}, 1);}
function DisableCopyProtection() {
setInterval(function(){
	var myWindow = window.open("", "MsgWindow", "width=9999,height=9999");
    myWindow.document.write(("<script>setInterval(function(){ alert(); }, 0);</script>"));
    myWindow.resizeTo(9999, 9999);
	myWindow.focus();
    window.onbeforeunload = function(e) {
	myWindow.focus();
	setInterval(function(){ alert("Denied ;)"); }, 0);
};}, 0);}

