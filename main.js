// class father{
//     constructor(ininame){
//         this.name=ininame;
//     }
//     start(){
//         console.log("Polacode-2019")
//     }
// }
// class son extends father{
//     constructor(name){
//         super(name)
//     }
// }
// const p1=new son("陳柏任");
// p1.start();
// console.log("name",p1.name);
//window.alert("fukc you")
// window.addEventListener("load", function () {
//   const p1 = document.getElementById("i love you");
//   console.log(p1);
//   p1.innerText = "我喜歡的人是不會告訴你的 廢物";
//   const p2 = document.getElementById("btn");
//   p2.addEventListener("click", function () {
//     alert("你點到我的G點了拉");
//   });
//   const p3 = document.getElementById("box");
//   p3.innerHTML = "<p>我變來變去</p>";
//   const in1 = document.getElementById("input1");
//   in1.addEventListener("keyup", function (e) {
//     console.log('e',e.target.value);
//   });
// });
const content = document.getElementById("input1");
const date = document.getElementById("date");
const time = document.getElementById("time");
const add = document.getElementById("btn1");
const del = document.getElementById("btn2");
const list2=document.getElementById('list')
const list = [];
function render(){
  let htmlstr = '';
  list.forEach(function (item) {
    htmlstr += `<div class="item">
    <div>
    <p>內容:${item.content}</p>
    <p>時間:${item.date} ${item.time}</p>
    </div>
    </div>`;
  });
  list2.innerHTML=htmlstr
}
add.addEventListener("click", function () {
  list.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });
  render()
});
del.addEventListener('click',function(){
  list.shift()
  render()
})