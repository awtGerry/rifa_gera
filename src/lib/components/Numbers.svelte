<script>
  import { numbers } from '$lib/store.js'; // Import the numbers store

  let selectedNumbers = []; // Array to store the selected numbers
  let name = '';

  function selectNumber(number) {
    if (number.selected === 2) {
      // Remove the number from the selected numbers array
      selectedNumbers = selectedNumbers.filter(num => num !== number.number);
      console.log(selectedNumbers);
      return numbers.update(numberList => {
        return numberList.map(num => 
          num.number === number.number ? { ...num, selected: 0 } : num
        );
      });
    }
    if (number.selected === 0) {
      if (!name) {
        alert('Ingresa tu nombre para seleccionar el numero');
        name = prompt('Ingresa tu nombre');
      }
      if (!name) return;
      selectedNumbers.push(number.number);
      console.log(selectedNumbers);
      return numbers.update(numberList => {
        return numberList.map(num => 
          num.number === number.number ? { ...num, selected: 2 } : num
        );
      });
    }

    // Display the person's name if the number selected is green
    numbers.update(numberList => {
      return numberList.map(num => {
        if (num.number === number.number && num.selected === 1) {
          // Toggle the `showPerson` property for green numbers
          return { ...num, showPerson: !num.showPerson };
        }
        return num;
      });
    });
  }

  function sendWhatsAppMessage() {
    const message = `Mis numeros seleccionados son: ${selectedNumbers.join(', ')}\nNombre: ${name}`;
    const phone = "3311765793";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank'); // Open in a new tab
  }
</script>

<section class="mb-16 px-4 sm:px-8">

  <!-- Progress bar -->
  <h2 class="text-2xl font-bold text-lime-700 text-center mt-8">
    Progreso
  </h2>
  {#if $numbers}
    <div class="flex justify-center mt-4">
      <div class="w-full bg-gray-200 rounded-full">
        <div class="bg-lime-700 text-xs leading-none py-1 text-center text-white rounded-full"
          style="width: {($numbers.filter(num => num.selected === 1).length / $numbers.length) * 100}%"
        >
          {Math.round(($numbers.filter(num => num.selected === 1).length / $numbers.length) * 100)}%
        </div>
      </div>
    </div>
  {/if}

  <h2 class="text-2xl font-bold text-lime-700 text-center mt-8">
    Numeros disponibles
  </h2>

  <!-- Colors information -->
  <div class="flex flex-wrap justify-center space-x-4 mt-4 text-center">
    <div class="flex items-center">
      <div class="h-4 w-4 rounded-sm bg-lime-700"></div>
      <p class="text-slate-800 ml-1">Numero disponible</p>
    </div>
    <div class="flex items-center">
      <div class="h-4 w-4 rounded-sm bg-red-500"></div>
      <p class="text-slate-800 ml-1">Numero no disponible</p>
    </div>
    <div class="flex items-center">
      <div class="h-4 w-4 rounded-sm bg-blue-500"></div>
      <p class="text-slate-800 ml-1">Numero seleccionado</p>
    </div>
  
  </div>

  <div class="flex justify-center space-x-4 mt-4 mb-4">
    <div class="grid grid-cols-5 gap-1 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8">
      {#each $numbers as number}
        <button class="flex items-center justify-center h-12 w-12
          border-2 border-lime-700 text-xs font-bold cursor-pointer text-white"
          class:bg-red-500={number.selected === 1}
          class:bg-blue-500={number.selected === 2}
          class:bg-lime-700={number.selected === 0}
          on:click={() => selectNumber(number)}
        >
          {#if number.selected === 1 && number.showPerson}
            {number.name ? number.name : "No Name"}
          {:else}
            {number.number}
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <div class="flex justify-center space-x-4 mt-4 flex-col items-center">
    <button
      class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
      on:click={sendWhatsAppMessage}
    >
      <svg class="h-6 w-6 inline-block mr-2" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
      Mandar numeros por WhatsApp
    </button>
    <p class="text-sm text-slate-800">*Favor de enviar el comprobante de pago.</p>
  </div>
</section>
