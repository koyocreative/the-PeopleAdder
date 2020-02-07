const people = (function() {
	const people = ['James Bond', 'Curtis Jackson', 'Sherlock Holmes'];

	// cache DOM
	const input  = document.querySelector('#peopleInput');
	const btn    = document.querySelector('#addPeople');
	const output = document.querySelector('.people');
	

	btn.addEventListener('click', addPerson);

	render();

	function addListener() {
		const del = document.querySelectorAll('.del');

		for ( const d of del) {
			d.addEventListener('click', function() {
				deletePerson( this.closest('li').dataset.id );
			});
		}
	}
	function render() {
		let html = '';
		let i = 0;
		for ( const person of people) {
			html += `<li data-id="${i}">${person}<span class="del">✕</span></li>`;
			i++;
		}
		output.innerHTML = html;

		addListener();

	}

	function addPerson(value) 
	{	
		let name = ( typeof value === "string") ? value : input.value;

		if( name !== '') {
			people.push(name);
			render();
			input.value = '';
		}
	}

	function deletePerson(id) {
		people.splice( id, 1);
		render();
	}

	return { addPerson, render }
})();