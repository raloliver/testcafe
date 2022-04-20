/*
 * File: start.test.js
 * Project: testcafe
 * Created: Wednesday, April 6th 2022, 1:34:06 pm
 * Last Modified: Wednesday, April 20th 2022, 3:34:09 pm
 * Copyright © 2022 AMDE Agência
 */

import { Selector } from 'testcafe';

fixture`Upping and running with TestCafe`
  .page`https://devexpress.github.io/testcafe/example`
  .before(async t => {
    // Test setup goes here
    // await runDataBaseReset()
    // await seedTestData()
  })
  .beforeEach(async t => {
    // Runs before each test
    // delay in the test, 1 fast => 0.1 slow
    await t.setTestSpeed(1);
  })
  .after(async t => {
    // Cleaning test data
    // Logging and sending data to monitoring systems
  })
  .afterEach(async t => {
    // Runs after each test
  });

test('should show the name was input on the capture page', async t => {
  const developerNameInput = Selector('#developer-name');
  const submitButton = Selector('#submit-button');
  const articleHeaderText = Selector('#article-header').innerText;

  // code goes here
  await t.typeText(developerNameInput, 'João');
  // pausing the test (using for debugging purpose)
  // await t.wait(3000);
  await t.click(submitButton);

  // assertion
  await t.expect(articleHeaderText).contains('João');
});
