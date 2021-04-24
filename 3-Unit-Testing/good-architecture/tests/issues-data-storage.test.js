import IssuesDataStorage from '../src/issues-data-storage';

describe('Test class IssuesDataStorage', () => {
	test('Creates a new issue in storage and persist it', () => {
		// Arrange
		expect.hasAssertions();
		const ID_1 = "060e3461-baa1-5c97-86f3-8983f85823f2";
		const issue = {
      id: ID_1,
			description: "sdfsdf",
			severity: "Medium",
			assignedTo: "23r",
			status: "Open"
		};

		const dataService = {
			loadEntities: jest.fn().mockReturnValue(),
			addEntity: jest.fn().mockReturnValue()
		}

		const issueData = new IssuesDataStorage(dataService);

		// Act
		const result = issueData.createIssue(issue);

		// Assert
		expect(IssuesDataStorage._issues).toEqual(result);
	});
});