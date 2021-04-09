class TestForLies {
	removeFalsyValues(array){
		// console.assert(Array.isArray(array), 'Аргумент не является массивом');
		if(!Array.isArray(array)) {
			throw new Error('Аргумент не является массивом');
		}
		return array.filter(item => !!item);
	}
}

export default TestForLies;