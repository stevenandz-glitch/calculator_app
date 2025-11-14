let input = document.querySelector("input");
const boxes = document.querySelectorAll(".box");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal_btn = document.getElementById("=");
const reset_btn = document.getElementById("reset");
const delete_btn = document.getElementById("delete");

boxes.forEach((element)=>{
  element.addEventListener("click", ()=>{
    new Audio("click_sound.mp3").play();
  });
});

numbers.forEach((element)=>{
  element.addEventListener("click", ()=>{
    input.value += element.id;
  });
});

operators.forEach((element)=>{
  element.addEventListener("click", ()=>{
    input.value += ' ' + element.id + ' ';
    
    if (input.value.includes("=")) {
      const final_answer = new Function("return " + input.value.trimEnd().slice(0, -1))();

      if ((final_answer == "Infinity") || (final_answer == "-Infinity")) {
        input.value = "NOOO!!!!";
      } else {
        input.value = "= " + final_answer;
      }

      equal_btn.style.backgroundColor = "rgb(242,78,78)";

      boxes.forEach((element)=>{
        if (element.id !== "reset") {
          element.disabled = true;
        }
      });
    }
  })
})

reset_btn.addEventListener("click", ()=>{
  input.value = ' ';
  equal_btn.style.backgroundColor = "rgb(20, 245, 20)";

  boxes.forEach((element)=>{
    element.disabled = false;
  });
});

delete_btn.addEventListener("click", ()=>{
  input.value = input.value.trimEnd().slice(0, -1);
});