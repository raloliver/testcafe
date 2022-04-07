/*
 * File: start.test.js
 * Project: testcafe
 * Created: Wednesday, April 6th 2022, 1:34:06 pm
 * Last Modified: Thursday, April 7th 2022, 3:16:11 pm
 * Copyright © 2022 AMDE Agência
 */

import { Selector } from 'testcafe';

fixture`Upping and running with TestCafe`
  .page`https://devexpress.github.io/testcafe/example`;

test('should show the name was input on the capture page', async t => {
  // code goes here
  await t.typeText('#developer-name', 'João');
  await t.click('#submit-button');

  // assertion
  await t.expect(Selector('#article-header').innerText).contains('João');
});
