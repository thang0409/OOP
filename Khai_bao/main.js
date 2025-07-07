let result = document.querySelector('.result');

let hcn = new Rectangle(20, 10);
result.innerHTML = `${hcn.getCircumference()} + ${hcn.getArea()}`;
