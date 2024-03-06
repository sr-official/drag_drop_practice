
let lists = document.getElementsByClassName('items');
let rightBox = document.getElementById('right_box');
let leftBox = document.getElementById('left_box');


for(items of lists){
	items.addEventListener('dragstart', function(e){
		let selected = e.target;

		rightBox.addEventListener('dragover', function(e){
			e.preventDefault();
		});
		rightBox.addEventListener('drop', function(e){
			rightBox.appendChild(selected);
			selected = null;
		});

		leftBox.addEventListener('dragover', function(e){
			e.preventDefault();
		});
		leftBox.addEventListener('drop', function(e){
			leftBox.appendChild(selected);
			selected = null;
		});

	});

};

