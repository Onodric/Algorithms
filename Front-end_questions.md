# Front End Interview Prep!

Here are a few lists of some of the top questions and concepts you should be able to answer, explain, and code as a
front-end engineer. I utilize the majority of these concepts everyday at work, and have been asked to answer and code
these questions and concepts in front-end coding interviews. Typically, software engineering interviews will have on
average 3 – 5 rounds:

- First, an over-the-phone behavioral and trivia (no coding)
- Second, over-the-phone coding interview in some collaborative code editor
- Third, an in-person interview on the white board with 1 or more engineers.

The language that you will most likely be coding in is JavaScript, but you may also pick a secondary language such as
Python or Java especially for the algorithm section. I typically use JavaScript whenever I am asked a web and UI related
question like code a slideshow. I use sometimes use Python or Java for the algorithm part of the interview because those
languages give me a lot more built-in helper functions than JavaScript to help me solve my problem. It is important that
you are proficient in any languages that you choose during the interview process because you are timed, and constantly
needing to lookup how to use the basic functionalities of your language will waste time.

## HTML

Most front-end interviews don’t get too heavy with HTML questions; therefore, in almost every interview I’ve been asked the following.
At most, if shown an image of some UI element like a fancy table or form, you should be able to code it with HTML and CSS.

1. Explain the DOM.
    - The _Document Object Model_. This is the page held in the browser's working memory.
    This may differ significantly from the HTML present in the files, as interpretation of the page, CSS,
    or JavaScript may alter the elements.
1. Explain the Box-Model.
    - This is the basic structure of an HTML page, meaning all elements can be represented by boxes on the screen,
    some containing others. These boxes are discreet, meaning that a box cannot ordinarily be contained within more than
    one other boxes, or be present through or over other boxes, breaking containment.
1. What’s the difference between block and inline level elements?
    - _Block_ elements are the entire width of the containing element,
    - _Inline_ elements only take up as much width as their content needs.

## CSS

The same is true with CSS as with HTML: the questions are not too heavy. If shown a picture of some UI element,
you should be able to code it with HTML and CSS. Items 1-5 on this list are the most important as they cover the core
fundamentals of CSS.

1. Explain the meaning of the term _cascading_.
    - Styles _cascade_ to other elements in two ways: from parent to child, and from methods of styling.
    Children of a styled element will inherit styling from parents unless more specifically styled elsewhere.
1. Explain the precedence order of external, header, and inline styles.
    - The cascading nature of styles means that there is an order of precedence of style sources:
        1. External - those included in a `<link>` tag, 
        1. Header - those included in a `<style>` tag, overriding stlyes present in the external source, and
        1. In-line - those present in the tag itself (for example, `<p style="color:red">`)
1. Explain the difference between the ID attribute and the Class attribute.
    - There can be only one of each `id` attribute, whereas a `class` can be applied to as many HTML elements as one wishes
1. Know the precedence order of selectors and styles.
    From lesser specificity to greater:
    1. _Type_ Selectors (e.g. the naked tag name) and Pseudo-_elements_
    1. _Class_ Selectors, attribute selectors (e.g. `type=`), and Pseudo-_classes_
    1. _I.D._ Selectors
1. Know how to use the majority of CSS selectors.
    - universal: `*`
    - `type`
    - `.class`
    - `#id`
    - `[attr]` - elements with this attribute
        - `=` - Elements with this attribute of _exactly_ specified value
        - `~=` - Elements with this attribute of _exactly_ specified value as part of a list of values
        - `|=` - Elements with this attribute of specified value followed by "-"
        - `^=` - Elements with this attribute whose first term is prefixed with value 
        - `$=` - Elements with this attribute of whose last term is followed by value
        - `*=` - Elements with this attribute of whose terms contain at least one occurrence of value
        - append `i` - Removes case sensitivity of the search
    - Combinators
        - `+` - Direct Siblings
        - `~` - Siblings, not necessarily direct
        - `>` - Direct Child
        - ` ` - Child, non-direct
    - `:pseudo`
        - Classes
            - `:active`
            - `:any`
            - `:checked`
            - `:default`
            - `:dir()` - experimental
            - `:disabled`
            - `:empty`
            - `:enabled`
            - `:first`
            - `:first-child`
            - `:first-of-type`
            - `:fullscreen` - experimental
            - `:focus`
            - `:hover`
            - `:indeterminate`
            - `:in-range`
            - `:invalid`
            - `:lang()`
            - `:last-child`
            - `:last-of-type`
            - `:left`
            - `:link`
            - `:not()`
            - `:nth-child()`
            - `:nth-last-child()`
            - `:nth-last-of-type()`
            - `:nth-of-type()`
            - `:only-child`
            - `:only-of-type`
            - `:optional`
            - `:out-of-range`
            - `:read-only`
            - `:read-write`
            - `:required`
            - `:right`
            - `:root`
            - `:scope` - experimental
            - `:target`
            - `:valid`
            - `:visited`
        - Elements
            - `::before`
            - `::after`
            - `::first-letter`
            - `::first-line`
            - `::selection`
            - several experimentals
    
1. What is responsive CSS?
    - This is a design style that can change the appearance of elements based on browser window size and shape. This
    principle nullifies the need of having more than one website for mobile or other devices.

## JavaScript

As far as trivia questions go in a front-end interview, you will be asked more JavaScript questions than HTML and CSS questions.
Knowledge of the following nuances in JavaScript very common in an interview.
Front-end engineers should be well-versed in some vanilla JavaScript, and not have to rely heavily on frameworks or libraries.
The industry for front-end engineers is fast-paced, in that technology is constantly being updated -- what was popular last year,
or two years ago, may not be popular next year.

For instance, JQuery is probably the most popular and game-changing JavaScript library ever made.
It has been dominant for about 8 years, with the rising trend of frameworks like AngularJS and React, the need for heavy usage of JQuery is slowing down.
One year BackboneJS was the most popular, then along came EmberJS, followed by AngularJS as being the most cutting edge, and now React is the new kid on the block.
Understanding vanilla Javascript will allow you to understand pick up any up-and-coming framework relatively fast.
Finally, the most important benefit of knowing vanilla JavaScript, is not being dependent on theses libraries and frameworks at all.
Too many external plugins can add bloat to your codebase, which comes as a cost to memory.

1. Explain prototypal inheritance.
    - Behavior wherein a _super_ object is created, having properties or methods. This object is used as the
    prototype for creating other, specific, objects that then _inherit_ the super's properties or methods, nad can be
    furthur specialized.
1. Explain JavaScript Scoping rules.
    - There are two scopes: _global_ and _local_
    - Global is top-level, and variables declared outside of any function are scoped globally, able to be accessed by
    anything (and anyone).
    - Local scope is interior of functions and classes. Variables declared in a local scope are accessible to other
    functions interior to that function (e.g., down the child tree), but NOT exterior to that scope. This is the behavior
    that makes encapsulation possible. 
1. What is Event Delegation?
    - Delegation is a way to limit the use of specific event listeners. It depends on _event propagation_ effects. A
    listener is attached to a parent element instead of to many specific children. We are able to use the `event.target`
    property to read the original specific child that the trigger propagated from.
1. Explain the difference between event bubbling and event capturing.
    - _Bubbling_ is the act of triggering event listeners from a specific element *up* the DOM tree to parents and grandparents
    - _Capturing_ is the opposite, triggering event listeners *down* the DOM tree to children and grandchildren
1. Know that a NodeList is not an Array.
    - A nodelist looks like a duck, but does not behave like one. In other words, Nodelists cannot be programmatically
    generated, and have different methods that prototype.arrays.
1. What is hoisting?
    - The interpreter will _hoist_ variable definitions to the top of the execution stack -- it *will not hoist initializations*
1. Be able to write a class with public and private variables.
```javascript
class Example{
  constructor(private1, public1) {
    this.private1 = private1;
    this.public1 = public1;
  }
  get public1() {
    return public1;
  }
  set public1(new_value) {
    this.public1 = new_value;
  }
}
```
1. Be able to write a class with inheritance.
```javascript
class Example2 extends Example{
  constructor(private2, public2) {
    this.private2 = private2;
    this.public2 = public2;
  }
  get combination(){
    return this.private1 + this.private2;
  }
}
```
1. Explain what is unique about the “this” keyword.
    - `this` will change definition given different scopes. Each function has its own version of `this`
1. Explain difference between the bind, call, and apply methods.
    - these are all ways to change the definition of `this` when calling a function
    - bind() - returns a function for later use in which `this` is the supplied value
    - apply() - returns the results of the function with the supplied `this` context and arguments *given as an array*
    - call() - the same as `apply()`, except the arguments are *not* wrapped in an array.
1. Be able to control the reference of the “this” keyword when defining functions.
1. What is a callback method?
    - This is the reference to a function, not invoked until it is specifically called by another function.
1. Be able to define a function with a callback method?
```javascript
let hello = (message) => {
  return message + ", I am a callback function."
}

let new_func = function(message, callback){
  console.log(callback(message));
};

new_func("Hello", hello);
```
1. What are closures?
    - These are exposed functions called from within encapsulated classes or objects. they 'remember' their scope from
    their creation, even if called later 
1. Know how to control scope with closures?
    - This is a fundamental part of encapsulation and abstraction with JS.
1. What is the global scope, and how do you maintain cleanliness?
    - The global scope is the top-ost scope of the browser, and is used by all running apps and extensions. Maintain
    cleanliness by correctly scoping variables to their functions and by utilizing encapsulation and abstraction. *Do
    not clog the global scope with variables and functions* as that behavior is asking for trouble.
1. What is name-spacing?
    - A method for abstracting global variables away from the global scope, and hence protecting both the global scope
    and one's own application. The idea is to create an object containing variables and functions that would normally be
    in the global scope.
1. It is best practice to include JavaScript at the bottom of an HTML file because it is more performant for the
JavaScript to wait until the DOM loads before executing.
    - onReady(), onLoad()
1. What is the anonymous function?
    - A function without a specific name. They an be assigned to variables, though.
1. What is a self-invoking anonymous function?
    - We learned these as IIFEs. That's the structure. It's a function that is wrapped in a function, and called at the
    end. Exactly like an iife. These are great for encapsulation and abstraction. 
1. Know that self-invoking anonymous functions can be used for waiting on page load and name-spacing.
    - A $(document).ready() might be one. But again with the IIFE.
1. What is data-binding?
    - Binding some data to a DOM element in such a way that changes to one reflect in the other.
1. Know the dangers of the eval method.
    - eval() will run anything with the permissions of the user, so harmful code will be run at our permission level!
    - There may also be an issue regarding incorrect scoping when using eval()
1. Explain DOM reflow and how to optimize.
    - This is when the browser has to recalculate the page. Knowing when and why this happens is the first step in
     optimization. Reducing the need for recalculations is the object. Opting for methods that do not force a reflow is
     one method.
1. Explain what DOM fragments are.
    - These are unattached DOM nodes. Because they are unatttached, they cn be manipulated before insertion into the DOM.
1. Learn at least one major JavaScript framework: Backbone, Angular, React, or Ember.

## Server-side

Even though you are preparing for a front-end interview, front-end engineers also need to know some knowledge of the backend,
how to interact with APIs passing data back and forth from the database to the client.

1. What is the client and the server?
    - The client is a specific browser -- the consumer of data
    - The server if where data comes from -- the supplier of data to several clients
1. Explain what happens during the process of returning a web page on the client and server when you submit a URL in the address box.
    - How specific?
    - A query is sent to the server, and the server returns the files needed for the webpage (whether cached or not).
    These files are interpreted by the browser software in order to display tyhe webpage or run the application
1. Explain GET, POST, DELETE, and PUT requests?
    - GET: read-only command to a server (database), returning the specified record
    - POST: write command to a server (database), writing the specified new record
    - DELETE: specific write command to a server, removing the specified record
    - PUT: Write command to a server (database), Writing only the specified data to the specified record
1. Explain a RESTful API?
    - REST is an architecture philosophy
    - An API utilizing REST exhibits the following traits:
        - Separation of Concerns: (UI and Data-storage) between client and server
        - Statelessness: no context is stored on the server between requests
        - Cache: request can be defined as cacheable
        - Layered System: A client cannot know if or whether it is connected directly to an end-server
        - Uniform Interface:
            - Resources are identified in requests 9allowing users to have all information on future accesses
            - A representation of a resource contains all data necessary for a user to fully manipulate that resource.
            - Messages are descriptive, meaning a user can know which parser, etc to use without another call.
            - Hyperlinks supply the user with all interactions to all available resources without hard-coding the client.
1. Know basic SQL.
    - `CREATE` nomenclature
    - `FOREIGN KEY`
    - `SELECT`
    - `JOIN`
1. Know the difference between relational and NoSQL databases.
    - Relational - have tables which link data together and can be easily queried. It is not very scalable across
    networks due to lack of reliability. 
    - Non-relational databases can be scaled easily and can store data that is not easily quantified and linked without
    metadata.

## Projects

Projects are extremely important not only for applying for front-end roles, but any software engineering position. It shows that you are passionate about what you do, motivated to constantly learn new technology outside of home work assignments, creative thinker, and have experience. Quality is more important than quantity. The projects on your resume should not resemble a typical “How-to” tutorial like a simple to-do list app. If it is, you should extend it beyond what the tutorial or class assignment required.

When I was still in college applying for internships, my projects were the first thing the recruiters cared about since I did not have much work experience. Also, publishing your code on Github or some other online hosting medium as it not only allows recruiters to review your code quality, but shows that you are contributing to the developer community. Github was one the most helpful resources when I was new to programming and first learning JavaScript as I was able to pick up advanced code styles and patterns from more experienced engineers.

1. Know how to use Git and Github.
1. Create at least 2 or 3 side projects. Quality and creativity is better than quantity. Upload them to Github.

## Algorithms

Pretty much every software engineering interview process will ask you an algorithm question at some point. The purpose is to test your ability to rationalize your way through a problem, and gives your interviewer a sense of how well you can solve a problem within a given time limit. Typically you are given 45 minutes to 1 hour to solve an algorithm problem. You are expected to narrate your solution as you progress to give your interviewer insight into how you think. You will be judged on speed, code quality, and algorithm efficiency.

Solving a problem and speaking out loud can be a tricky and uncomfortable task, so it is important to practice well ahead of time. In almost every interview process you will have to solve a problem on a white board or on paper, so it is important to practice without the need to rely on a computer to debug.

Knowing the use case of common data structures are important in helping you design your algorithm, and designing an efficient solution. Below are the most common data structures that I’ve utilized in interviews. Some of the algorithm questions below requires you to use some of these data structures, and they affect the runtime efficiency of your algorithm.

## Common Data Structures

- Arrays
- Dictionaries:
    - Hashmaps
    - JavaScript Objects
    - Python dictionaries
- Binary Trees
    - `???`
- Stacks
    - `???`
- Queues
    - `???`

## Sample Algorithm Questions

1. Given an unsorted array, determine if it has any duplicate items.
```javascript
// Given an unsorted array, determine if it has any duplicate items.
```
1. Reverse a singly linked-list.
```javascript
// Reverse a singly linked-list.
```
1. Determine if a string is a palindrome.
```javascript
// Determine if a string is a palindrome.
```
1. Write a function that calculates the Fibonacci sequence given an integer n as the input? Write the recursive and
non-recursive version.
```javascript
// Write a function that calculates the Fibonacci sequence given an integer n as the input? Write the recursive and non-recursive version.
```
1. Write a function that calculates the Factorial sequence given an integer n as the input? Write the recursive and
non-recursive version.
```javascript
// Write a function that calculates the Factorial sequence given an integer n as the input? Write the recursive and non-recursive version.
```
1. Given a binary-tree node, perform an in-order traversal and return an array of the nodes visited.
```javascript
// Given a binary-tree node, perform an in-order traversal and return an array of the nodes visited.
```
1. Breadth First Search
```javascript
// Breadth First Search
```
1. Depth First Search
```javascript
// Depth First Search
```
1. Binary Search
```javascript
// Binary Search
```
1. Implement the Flood Fill algorithm.
```javascript
// Implement the Flood Fill algorithm.
```
1. Given a graph node, determine if the graph has a cycle.
```javascript
// Given a graph node, determine if the graph has a cycle.
```
1. What is the Big-O runtime? What is the Big-O space?
    - _Runtime_ - the worst-case time interval for the algorithm or function
    - _Space_ - the memory required for the algorithm
1. Can your algorithm be made more efficient? If so, how?
    - YES
    - `case-by-case`

The algorithm portion of software engineering interview process is regarded by many as the most difficulty part.
Nerves definitely play a factor as I have failed plenty interviews as well. It is important to remain calm, get a good
nights rest prior to the interview, and ask questions. Here are a few of my tips for passing an algorithm interview:

#### Practice! Practice! Practice!
When I was new to the job hunt game, I thought there was a silver bullet solution to passing algorithm interviews,
but after a few years of interviewing for different internships and full-time roles, I realized that there is none.

Get a good nights rest the night before the interview. You’re going to need all the brain power you can gather to solve
these problems.

Don’t assume anything. If you are not clear on anything or the interviewer has given you a seemingly simple problem,
consider all possible cases and configurations of that problem, and ask the interviewer to elaborate. For instance,
if an interview gives you a problem that given an array, return true if it contains duplicates. Do not assume that the
array is sorted. There are several different approaches depending on if that array is sorted or not, and if it is an
unsorted array, but you wrote a solution for a sorted array, your answer will be wrong.

If the problem is tricky, focus on getting the naive/brute force solution first. Try to get a working solution first,
before trying to optimize it.

Draw pictures and diagrams on the white board to help you think about the problem. Do not try to only solve it in your
head if the problem is difficult. On several occasions I gotten stuck on a problem trying to solve it in my hear,
but seeing a few lines drawn on the white board helped spark new ideas for a solution.

If you are still stuck, ask for a small hint. You are allowed to ask for help, but do not ask for too many hints as
points will be deducted.

Practice! Practice! Practice! Again, this cannot be said enough. You will fail some interviews. It happens to every one.
Prepare in advance. The earlier the better. There is not magic trick to passing interviews, but experience via practice.

#### Algorithm Prep Resources

Cracking the Coding Interview by Gayle Laakmann McDowell
GeeksForGeeks.org
Glassdoor.com
Codewars.com
Hackerrank.com

## System Design Question

System design questions are more open-ended questions that ask how would you build a system such as a large-scale web app.
These typically do not involve coding, and are meant to test your in-depth knowledge of the role for which you are applying.
Pretend you are an architect, and are supposed to give a high level overview for how the rest of the team should implement
your design. You will be judged by how practical your solution is, how efficient it is, your ability to see the pros and
cons of your system, the ability to consider an alternative solution, and the ability to reason a more efficient system
if the interviewer notices an inefficiency. Feel free to draw diagrams on the white board to help illustrate and explain
your system design to the interviewer.

These are my favorite types of questions as I like to think about architecture as well as read a lot of blog posts on
how the most popular apps are built and maintained. Whenever I am ask these types of questions, I like to cover all
bases of an application: UI design, user experience, code modularity, pros and cons of certain frameworks both on the
front-end and backend, community support of those frameworks, traffic load scalability, code base scalability, API
design, choice of database, choice of programming languages, single points of failure, etc.

1. How would you design Twitter?
1. How would you design an instant messaging system?
1. What are the pros and cons of using BackboneJS, AngularJS, and ReactJS if you needed to design a Pinterest?
    - `???`

## Design Patterns

Design patterns have a strong presence in JavaScript development mainly do to the lack of inherent structural components
that exist in most strongly typed languages like Classes. It is very easy to start writing spaghetti JavaScript code,
which developed a need to more structure for the front-end of web applications. There are many types of design patterns
that have risen to popularity mainly due to frameworks such as Backbone and Ember in JavaScript, and in other languages
that have crossed over. To name a few: MVC, MVVM, Module, Prototype, etc. As far as front-end interviews go, I haven’t
been asked too many design pattern related questions, but out of the following, items 1 and 2 below would be the most important.

1. Explain what MVC means.
    - Model (data) - View (what user sees) - Controller (manipulator)
1. Be familiar with the module design pattern.
    - `???`
1. Be familiar with the prototypal design pattern.
    - `???`
1. What is a non-MVC JavaScript framework?
    - Knockout (Model-View-ViewModel)
    - `???`
    
# Questions for Bryan
## `What do I want to know that I can't get from a search?`
1. What would an EB junior say was the best part of working there? What is the largest challenge?
1. What is the track of a Junior? Will I be in one department forever is there opportunity for lateral growth?
1. What is the team structure like? How is workflow resolved (Bill talked to this a little bit).
1. What kind of goals and milestones will I have as a junior?

# Ponderables

1. Why EB?
1. What differentiates bdm4 from the rest OR what makes me so good?
1. What are my sticking points or bad habits?
