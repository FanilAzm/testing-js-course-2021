import TestForLies from './falsy.js';

test('Falsy-значения удаляются из непустого массива', () => {
	// Arrange
	const array = [45, '', 0, 'hello', 4.7, false];
	const expectedArray = [45, 'hello', 4.7];
	const numbers = new TestForLies();

	// Act 
	const result = numbers.removeFalsyValues(array);

	// Assert
	expect(result).toEqual(expectedArray);
});

test('Аргумент является массивом', () => {
	// Arrange
	const numbers = new TestForLies();

	// Act and Assert
	expect(() => numbers.removeFalsyValues('Hello')).toThrow();
});