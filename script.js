let count = 0;
let array = [];
let rezFirst = [];
let area = document.querySelector('.area');
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');

let recurs = numbers =>
{
	let rez;
	if(numbers % 2 == 0)
	{	
		rez = numbers/2;
		array.push(0);
		if(rez > 1)
		{
		recurs(rez);
			
		}
		if(rez == 1)
		{
			array.push(1);
		}
		//console.log(rez);
	}
	if(numbers % 2 != 0)
	{
		rez = Math.floor(numbers/2);
		array.push(1);
		if(rez /1 > 1)
		{
			console.log("bam");
			recurs(rez);
		}
		if(rez == 1 && numbers != 1)
		{
			array.push(1);
		}
		



	}


	
		return array.reverse();
}

function sumTwoSmallestNumbers(numbers) {  
count = 0;
array = [];
if(numbers < 16)
{
	
	area.innerHTML =  recurs(numbers).join('');
}
else
{
	
	area.innerHTML =  recurs(numbers).reverse().join('');
}
}
btn.onclick = function(){
let num = input.value;
if(num == '')
{
	alert('print correct num');
}
else
{
	sumTwoSmallestNumbers(num);
}

}

