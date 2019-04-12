let html = document.querySelector("#html");
let css = document.querySelector("#css");
let js = document.querySelector("#js");
let iframe = document.querySelector("#iframe").contentWindow.document;

document.body.onkeyup = () => {
    iframe.open();
    iframe.writeln(`${html.value} <style> ${css.value} </style> <script> ${js.value} </script>`);
    iframe.close();
};

let btn1 = document.querySelector('#btn1').addEventListener('click', () => {
    window.scrollBy(9999, 0);
});

let btn2 = document.querySelector('#btn2').addEventListener('click', () => {
    window.scrollBy(-9999, 0);
});