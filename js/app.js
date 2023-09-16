
// Function to perform addition
function sumar() {
  // Get the form element by its ID
  const forma = document.getElementById('forma');
  
  // Get the input values for operands A and B
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  
  // Calculate the result by adding operand A and operand B, and convert them to integers
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  
  // Check if the result is NaN (Not-a-Number), and set a message if it is
  if (isNaN(resultado))
    resultado = 'Please insert numbers';
  
  // Display the result in the 'resultado' element
  document.getElementById('resultado').innerHTML = `Result: ${resultado}`;
}

// Function to perform subtraction
function restar() {
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
  if (isNaN(resultado))
    resultado = 'Please insert numbers'
  document.getElementById('resultado').innerHTML = `Result: ${resultado}`;
}

// Function to perform multiplication
function multiplicar() {
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
  if (isNaN(resultado))
    resultado = 'Please insert numbers';
  document.getElementById('resultado').innerHTML = `Result: ${resultado}`;
}

// Function to perform division
function dividir() {
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
  if (isNaN(resultado))
    resultado = 'Please insert numbers';
  document.getElementById('resultado').innerHTML = `Result: ${resultado}`;
}


