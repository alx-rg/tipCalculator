
const inputBill = document.querySelector('#input-bill');
const inputTip = document.querySelector('#input-tip').value;
const inputPeople = document.querySelector('#input-people').value;

inputBill.addEventListener('input-bill', calculateTip)
inputBill.addEventListener('input-tip', calculateTip)
inputBill.addEventListener('input-people', calculateTip)

const body = document.querySelector('body')

body.addEventListener('input', updateCalc)

function updateCalc (e) {
	let target = e.target.id;
	console.log(target);

}

section1.addEventListener('change', calculateTip);
section1.addEventListener('input', calculateTip);

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

	//let target = e.target.id;
	//console.log(target)
	
	console.log(inputBill)
	console.log(inputTip)
	console.log(inputPeople)

	//Output total of the tip based on the percentage given
	let tipTotal = (inputBill * inputTip) / 100;
	outputTip = Number(tipTotal.toFixed(2));
	
	console.log(outputTip);

	//Output total of the Bill including the tip
	let billTotal = inputBill + tipTotal;
	outputBillTotal = Number(billTotal.toFixed(2));
	
	console.log(outputBillTotal);

	//Output the TIP amount for each person in the group
	let tipTotalEachP = outputTip / inputPeople;
	outputTipEachPerson = Number(tipTotalEachP.toFixed(2));
		
	console.log(outputTipEachPerson);


	//Output the TOTAL BILL including tip for each person
	let billPlusTipPerPerson = outputBillTotal / inputPeople;
	outputBillEachPerson = Number(billPlusTipPerPerson.toFixed(2));
	
	console.log(outputBillEachPerson);

	document.querySelector('#output-tip-total').innerHTML = outputTip;
	document.querySelector('#output-bill-total').innerHTML = outputBillTotal;
	document.querySelector('#output-tip-each-person').innerHTML = outputTipEachPerson;
	document.querySelector('#output-bill-each-person-total').innerHTML = outputBillEachPerson;
}
