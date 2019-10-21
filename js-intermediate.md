# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer:
  
  Create    -   Design
  Render    -   
  Use       -   Post
  Diagnose  -   Patch

  Researched answer:
  
  Create    -   Post
  Read      -   Get
  Update    -   Put, Patch
  Delete    -   Delete
  
  
2. Why would you use object destructuring?

  Your answer:
  
  Object destructuring could be used to simplify typing out/assigning objects with many indexes.

  Researched answer:
  
  Object destructuring, introduced in ES6, allows unpacking of values from arrays or object properties into distinct variables.


3. Why is testing important?

  Your answer:
  
  Regularly testing specific parts of your code is important to make sure it is functioning as intended. Inserting tests into smaller loops allows you to pinpoint where your errors are coming from.

  Researched answer:
  
  Unit testing - testing small chunks of code to make sure the code is optimal.
  Integration testing - testing combinations of units and how they work together.
  Acceptance testing - testing an application on a browser or device to analyze the performance of the entire application.


4. What is the difference between a class and an object?

  Your answer:
  
  In React, a class is named (capitalized) to contain features related to an object, which can then be brought into the main js file.

  Researched answer:
  
  A class defines all the properties that characterize a certain set of objects. For example, and Employee class could represent the set of all employees.


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer:
  
  I familiarized myself with more CSS. Coming up with different ways to style our GoT tic tac toe game was fun.


### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer:
  
  Assign an HTML class, ID, etc to the HTML element. This identification can be called in CSS to style that HTML element.

  Researched answer:
  
  <link rel = "stylesheet" href = styles.css>


2. What is the difference between a div and a span?

  Your answer:
  
  divs are designated with <div></div>, spans are designated with <p></p>. I think the difference might have to do with the type of context that would go into either. Divs would be used for wrapping headers, spans, etc into, while spans would be used for individual content that would go on the page.

  Researched answer:
  
  Span element is in-line and usually used for a small chunk of HTML inside a line, whereas a div is block-line and used to group larger chunks of code.


3. What is a CSS class? When should you use an id instead of a class?

  Your answer:
  
  A CSS class sets the CSS styling for an entire class of HTML elements. ID lets you target specific parts of the HTML.

  Researched answer:
  
  In CSS, a class selector is preceded by a ".", while an ID selector is preceded by a "#". An ID can be used to identify one element, whereas a class can be used to identify more than one.


4. Name 4 semantic HTML tags.

  Your answer:
  
  <p></p>           -   span
  <h1></h1>         -   title text
  <img />           -   image
  <div></div>       -   div
  <footer></footer> -   footer

  Researched answer:
  
  <ul></ul>         -   unordered list
  <li></li>         -   list item
  <ol></ol>         -   ordered list
  <var></var>       -   variable or user defined text
  <header></header> -   header elements on a page


5. What are three options for creating responsive design?

  Your answer:
  
  Add tags for different browsers, such as -moz-.
  Use relative values for scaling and positioning.
  Add a tag for mobile applications.

  Researched answer:
  
  Use max-width: 100% as opposed to width: 100% for images to prevent overstretching images.
  Use vw (viewport width) as the unit for font sizes to maintain the size based on the window.
  Use @media media queries to adjust image size based on the size of the viewport when zooming in and out.


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer:
  
  Front end development has to do with the way information is presented to the user. Some tools used for front end include JavaScript, React, CSS, HTML.

  Researched answer:
  
  Front end development is the practice of producing HTML, CSS, and JavaScript for a website or web application so that a user can see and interact with them directly.


2. What is block scope in JavaScript?

  Your answer:
  
  Block scope is how JavaScript can reference objects in a component that's outside the scope using "this."

  Researched answer:
  
  Block scope is the area within if, switch conditions, or for and while loops. Generally speaking, if it has curly brackets around it, it is a block. const and let can be used to define variables within a block.


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer:
  
  Not sure what inheritance is. Maybe it is how classes, components, etc can be defined then called out in different components.

  Researched answer:
  
  Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.