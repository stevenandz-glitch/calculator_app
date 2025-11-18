# Calulator Application 
This is a web application coded in HTML, CSS, and Javascript in which it is a simple calculator program with a graphical user interface. For this project, I wanted to combine all of the World Wide Web languages into something I am proud of, and there is no better start than the simplest tool for mankind...a number cruncher. With regards to the front-end development, I wanted to test the `grid` and `flex` layouts in CSS as well as hone my element structure in HTML. In the back-end process,the goal was make the event listeners reponsive to user input, and practice DOM (Document Object Model) manipulation.

## Front-End

### 1. HTML
To begin with, I decided that the main grid layout of the page, the one to keep it all together, would be `flex`. Doing so would allow me to stack the page into a neat column using the `column nowrap` value. This ensures responsivness and a consistent display for most screen types. Continuing off the intitial design plan, the inspiration for this design was of course, a regular calculator. With any basic Texas Instrument or Analog Device, the design pattern is similiar; the screen on top, and buttons on the bottom where the button types (function/number/operators) can differ. Using HTML, I reflected this pattern using the basic structure below.
```html
<input type="text" class="user__input" readonly>

<main class="main__calculator">

    <section class="user__buttons">
        <section class="button__selection">

        </section>
    </section>

    <section class="misc__input">

    </section>

</main>
```
As we can see, the top of the structure is the screen of class `.user__input`. This captures the input of the user made by pressing on the buttons. The latter is denoted by the `.user__buttons` class in which it houses `.buttons__selection`. The rest of the buttons under class `.misc__input` are meant for other miscellanous operators. What holds all the buttons together is the `.main__calulator` class. This calculator is simple, and I decided to forgo complex functions as such logartihms, trigonometry, and the like. 

### 2. CSS
With every CSS stylesheet I create, I start with a CSS reset whereby I set the default `margin ` and `padding` to 0 as well as set the box sizing to `border-box`. 
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Bitcount", system-ui;
}
```
This ensures that there are no default operations done whenever I create a new box element such implicitly adding padding, furthermore,  the `border-box` value is essential to prevent content from clipping through the set borders. Once that is done, I proceed to declare `body`, `.main__calculator`, and `.user__buttons` as diplays of `flex` whose content is justified to `column nowrap`. Now, let's circle back to the design of the simple calculator. Yes, the input screen and buttons are stacked on eachother, however, this doesn't hold for the buttons themselves. Upon a closer look, the buttons are arranged to have columns and rows. This allows me to conclude that I must utilize the `grid` display in CSS. A `grid` display will allow me to create as many columns and rows as I want, which is perfect for numbers and operators. In the basic HTML structure I provided, we see that the class `.user__buttons` houses the class `.button__selection`, and that is where `grid` will be utilized.
```css
.button__selection {
  display: grid;
  grid-template-columns: repeat(3, 32.2%);
  grid-auto-rows: 20.34%;
  place-content: center;
  margin-left: 1.5%;
}
```
Finally, in order for better responsive design, I implemeted a media screen whenver a phone is in landscape mode. 