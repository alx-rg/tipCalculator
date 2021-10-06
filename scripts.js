import { randomColor, randomFont } from './helpers.js'

// Get a reference to the body tag
const body = document.querySelector('body')

// Add a single event listener listening for click events
body.addEventListener('click', onClick)


// This function handles a click when it occurs on the body
function onClick(e) {
	// The event object e is important in this example. 
	// It has a property e.target which tells us exactly which 
	// element was clicked. 
	// TODO: Open the test page, click around the page and look at the console.
	console.log(e.target)

	// Below we will check the element and decide what to do about the click.
	// For each click we can use .matches() with a CSS selector to 
	// "match" that element. You can match any CSS selector! 
	// Notice below I used: name, id, class
	if (e.target.matches('h1')) {
		// You clicked the h1
		e.target.style.color = randomColor()

	} else if (e.target.matches('p')) {
		e.target.style.fontFamily = randomFont()

	} else if (e.target.matches('#make-box')) {
		// When we click the make box button
		const box = document.createElement('div') // Make a new element
		box.classList.add('box')
		box.style.backgroundColor = randomColor()
		const boxContainer = document.querySelector('.box-container')
		boxContainer.appendChild(box)

	}
}

// Using the code above try these challenges: 
// 1. Add a new element to HTML in index.html
// Then come back to this file and handle clicks 
// on that element.
// 
// 2. Create a couple input tags in index.html. 
// Think of a selector that will identify these elements. 
// Add an event listener to the body that listens for 
// 'input' events. Handle the input events from the 
// body by using e.target.matches() to identify 
// your inputs. 
// 
// 3. Apply event delegation to your Tip calculator. 
// For this you are already using using it to some 
// degree since you probably have a single event 
// handler handling events from all of your inputs. 
// Try moving this listener to the body element 
// and checking the event target to see if the the
// target matches the type `input'. Something like 
// this: e.target.matches('input')
// 
// 4. The waypoints example uses event delgation 
// Look at that and implement the waypoints 
// navigation bar in your single page site. 