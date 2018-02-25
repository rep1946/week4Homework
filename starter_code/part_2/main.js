// Capture value from user
console.log('Rob is here');



document.querySelector('.mainBttn').addEventListener("click", captureCelsius);
document.querySelector('.mainBttn').addEventListener("click", output);

function captureCelsius() {
	var temperature = document.querySelector('#celsiusInput').value
	console.log(temperature)
	var farenheit = (temperature * 1.8) + 32
	console.log(farenheit)

	if (farenheit > 60)
		{
			document.querySelector('body').style.backgroundImage = "url('./images/volcano.jpg')";
			document.querySelector('h1').style.color = 'white';
			document.querySelector('h4').style.color ='white';

		}

	 else if (farenheit > 30 && farenheit <= 60 )
	{
		document.querySelector('body').style.backgroundColor = "grey"; 
	}

	else
	{
		document.querySelector('body').style.backgroundImage = "url('./images/iceberg.jpg')";
		
	}
	
};


function output() {
	var temperature = document.querySelector("#celsiusInput").value;
	var farenheit = (temperature * 1.8) + 32;
	document.querySelector("h4").innerHTML = "The temperature in Farenheit is";
	document.querySelector("#celsiusInput").innerHTML = farenheit;
	return farenheit;
}; 



