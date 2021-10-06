
window.onload = () =>
//the function called when Calculate button is clicked.
{
//*calling a function calculateTip
// which will calculate the tip for the bill.*/
	 document.querySelector('#calculate').onclick = calculateTip;
}

//let defaultBill = 0.00;
//let defaultTip = 0.00;
//let defaultPerson = 0;


const inputBill = document.querySelector('#input-bill');
const inputTip = document.querySelector('#input-tip');
const inputPeople = document.querySelector('#input-people');

inputBill.addEventListener('input-bill', calculateTip)
inputBill.addEventListener('input-tip', calculateTip)
inputBill.addEventListener('input-people', calculateTip)

function updateCalc (e) {
	let target = e.target.id;
	console.log(target);

//	if (target.tagName === );

}

function calculateTip() {
	//INPUTS
	const inputBill = Number(document.querySelector('#input-bill').value);
	const inputTip = Number(document.querySelector('#input-tip').value);
	const inputPeople = Number(document.querySelector('#input-people').value);
	//OUTPUTS 
	let outputTip = Number(document.querySelector('#output-tip-total').value);
	let outputBillTotal = Number(document.querySelector('#output-bill-total').value);
	let outputTipEachPerson = Number(document.querySelector('#output-tip-each-person').value);
	let outputBillEachPerson = Number(document.querySelector('#output-bill-each-person-total').value);


	section1.addEventListener('change', calculateTip);


	//let target = e.target.id;
	//console.log(target)
		
	console.log(inputBill)
	console.log(inputTip)
	console.log(inputPeople)

	//Output total of the tip based on the percentage given
	let tipTotal = (inputTip / inputBill) * 100;
	outputTip = Number(tipTotal.toFixed(2));
	
	//console.log(outputTip);


	//Output total of the Bill including the tip
	let billTotal = inputBill + tipTotal;
	outputBillTotal = Number(billTotal.toFixed(2));
	
	//console.log(outputBillTotal);

	//Output the TIP amount for each person in the group
	let tipTotalEachP = outputTip / inputPeople;
	outputTipEachPerson = Number(tipTotalEachP.toFixed(2));
		
	//console.log(outputTipEachPerson);



	//Output the TOTAL BILL including tip for each person
	let billPlusTipPerPerson = outputBillTotal / inputPeople;
	outputBillEachPerson = Number(billPlusTipPerPerson.toFixed(2));
	
	//console.log(outputBillEachPerson);


	document.querySelector('#output-tip-total').innerHTML = outputTip;
	document.querySelector('#output-bill-total').innerHTML = outputBillTotal;
	document.querySelector('#output-tip-each-person').innerHTML = outputTipEachPerson;
	document.querySelector('#output-bill-each-person-total').innerHTML = outputBillEachPerson;
}
