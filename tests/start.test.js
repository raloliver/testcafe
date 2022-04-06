/*
 * File: start.test.js
 * Project: testcafe
 * Created: Wednesday, April 6th 2022, 1:34:06 pm
 * Last Modified: Wednesday, April 6th 2022, 1:52:40 pm
 * Copyright © 2022 AMDE Agência
 */

fixture`Upping and running with TestCafe`
  .page`https://devexpress.github.io/testcafe/example`;

test('Hello TestCafe', async t => {
  // code goes here
  await t.typeText('#developer-name', 'João');
  await t.click('#submit-button');
});
