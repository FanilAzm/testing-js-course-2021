import tokenData from '../src/tokenData';

describe('tokenData class:', () => {
	test('Для пустой строки должен возвращаться null', () => {
		// Arrange
    const token = new tokenData();

    // Act
    const checkValue = token.checkTokenValue('');

    // Assert
    expect(checkValue).toBeNull();
  });

  test('Для "нормальной" строки должен возвращатсья токен', () => {
		// Arrange
    const token = new tokenData();
    const string = 'string';

    // Act
    const checkValue = token.checkTokenValue(`${string}`);

    // Assert
    expect(checkValue).toBe(string);
  });

  // test('Длина токена не должна быть меньше 10 символов', () => {
	// 	// Arrange
  //   const token = new tokenData();

  //   // Act
  //   const checkValue = token.checkTokenValue('str');

  //   // Assert
  //   expect(checkValue).toBe(false);
  // });
  
  // test('Токен должен содержать только буквы английского алфавита и цифры', () => {
	// 	// Arrange
  //   const token = new tokenData();
  //   const enterValue = 'Bearer vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
  //   const exitValue = 'vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';

  //   // Act
  //   const checkValue = token.checkTokenValue(enterValue);

  //   // Assert
  //   expect(checkValue).toEqual(exitValue);
	// });
});