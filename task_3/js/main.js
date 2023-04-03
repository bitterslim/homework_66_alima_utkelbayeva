const containers = document.getElementById('container');

const makeElement = () => {
	for (let i=1; i<=5; i++) {
        const div = document.createElement('div');
        div.style.color = 'red'
	    div.className = 'element';
	    const text = document.createTextNode("Element " + i);
	    div.appendChild(text);
	    containers.appendChild(div);
    };
}
makeElement();
