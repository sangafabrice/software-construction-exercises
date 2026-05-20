function testStep(expected, keys) {
    // Arrange
    const params = arguments.length > 1 ? [keys]:[];

    // Act
    const actual = findMax.apply(null, params);

    // Assert
    console.assert(actual === expected, { params, expected, actual });
}