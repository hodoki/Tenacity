const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");//javascript에서 HTML element를 만들 수 있게 해줌

bgImage.src = `img/${chosenImage}`; //img폴더 뒤에 추가

document.body.appendChild(bgImage); // appendchild는 body가장위에 html추가해줌 prepend는 body가장아래에 html추가해줌 