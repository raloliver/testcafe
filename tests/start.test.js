/*
 * File: start.test.js
 * Project: testcafe
 * Created: Wednesday, April 6th 2022, 1:34:06 pm
 * Last Modified: Friday, April 22nd 2022, 1:31:11 pm
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

    // Page load timeout
    await t.setPageLoadTimeout(0);
  })
  .after(async t => {
    // Cleaning test data
    // Logging and sending data to monitoring systems
  })
  .afterEach(async t => {
    // Runs after each test
  });

/**
 * SKIP and ONLY methods to skip or only run a single test scenario
 */
// it is possible to use .skip to skip a test
// if you wanna to run only one test, you could use .only
test('should show the name was input on the capture page', async t => {
  const developerNameInput = Selector('#developer-name');
  const submitButton = Selector('#submit-button');
  const articleHeaderText = Selector('#article-header').innerText;

  // taking a screenshot (it is possible to override the path)
  /* 
  await t.takeScreenshot({
    fullPage: true
  });
  */
  // it is possible to take a screenshot of one single element
  // await t.takeElementScreenshot(submitButton);
  // code goes here
  await t.typeText(developerNameInput, 'João');
  // pausing the test (using for debugging purpose)
  // await t.wait(3000);
  await t.click(submitButton);

  // assertion
  await t.expect(articleHeaderText).contains('João');
});
