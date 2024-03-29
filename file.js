const buttonMinus = document.querySelectorAll(".minus");
const PlusButton = document.querySelectorAll(".plus");
const totalSum = document.querySelector("#sum");
const deleteButton = document.querySelectorAll(".btn-primary");
const quantitiesButton = document.querySelectorAll(".x");
const prices = document.querySelectorAll(".price");
const bigDivs = document.querySelectorAll(".card");
for (let i = 0; i < buttonMinus.length; i++) {
  buttonMinus[i].addEventListener("click", function (e) {
    if (quantitiesButton[i].innerHTML > 0) {
      quantitiesButton[i].innerHTML--;
      totalSum.textContent =
        parseInt(totalSum.textContent) - parseInt(prices[i].innerHTML);
    }
  });
}

for (let i = 0; i < buttonMinus.length; i++) {
  PlusButton[i].addEventListener("click", function (e) {
    quantitiesButton[i].innerHTML++;
    totalSum.textContent =
      parseInt(totalSum.textContent) + parseInt(prices[i].innerHTML);
  });
}
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", function (e) {
    bigDivs[i].remove();
    totalSum.textContent =
      parseInt(totalSum.textContent) -
      parseInt(quantitiesButton[i].textContent) *
        parseInt(prices[i].textContent);
  });
}
 108  
index.html
@@ -0,0 +1,108 @@
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>

  <body>
    <div class="card" style="width: 10rem">
      <div>
        <img
          class="card-img-top"
          src="http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">T-shirt</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div style="display: flex; flex-direction: column">
        <div style="display: flex">
          <button type="button" class="btn btn-danger minus">-</button>
          <h1 class="x">1</h1>
          <button type="button" class="btn btn-success plus">+</button>
        </div>
        <hr />
        <div>
          <span>price</span>
          <span class="price">55</span>
          <span>$</span>
        </div>
      </div>
    </div>

    <!-- card2 -->

    <div class="card" style="width: 10rem">
      <div>
        <img
          class="card-img-top"
          src="http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Shorts</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div style="display: flex; flex-direction: column">
        <div style="display: flex">
          <button type="button" class="btn btn-danger minus">-</button>
          <h1 class="x">1</h1>
          <button type="button" class="btn btn-success plus">+</button>
        </div>
        <hr />
        <div>
          <span>price</span>
          <span class="price">20</span>
          <span>$</span>
        </div>
      </div>
    </div>
    <!-- card 3 -->
    <div class="card" style="width: 10rem">
      <div>
        <img
          class="card-img-top"
          src="http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">shoes</h5>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div style="display: flex; flex-direction: column">
        <div style="display: flex">
          <button type="button" class="btn btn-danger minus">-</button>
          <h1 class="x">1</h1>
          <button type="button" class="btn btn-success plus">+</button>
        </div>
        <hr />
        <div>
          <span>price</span>
          <span class="price">10</span>
          <span>$</span>
        </div>
      </div>
    </div>
    <hr class="sum-line" />
    <div style="display: flex;align-items: center">
      <h4>somme</h4>
      <h5 style="margin-left:105px" id="sum">85</h5>
      <p>$</p>
    </div>
    <script src="file.js"></script>
  </body>
</html>