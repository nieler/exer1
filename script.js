<script>
  function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  documentgetElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum); 
</script>
  <script>
      function displayProduct() {
  let firstNum = Number(getElementById('firstNum').innerHTML)
  let secondNum = Number(getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  getElementById("answer2").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

getElementById('ProductButton').addEventListener("click", displayProduct);
  </script>
