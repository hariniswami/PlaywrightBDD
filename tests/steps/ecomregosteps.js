import { createBdd } from 'playwright-bdd';

import {test} from '../fixtures/fixtures'
const { Given , When, Then} = createBdd();
const data=require('../data/ecomdata.json')
const RepoPage = require('../pages/ecomregoObj')

Given('I navigate to trademe', async ({ page })  => {
  await page.pause()
await page.goto('https://www.trademe.co.nz/')

  });
  

  When('I click on register button', async ({page}) => {
    const rego = new RepoPage(page)
    await rego.navigatetoregolink();
  });
  

   When('I click on personal use', async ({page}) => {

const rego= new RepoPage(page)
await rego.clickpersonal_btn()
  });
  

 
When(/^I enter email id$/, async({page}) => {
  await page.pause()
  const rego = new RepoPage(page)
await rego.enteremailaddress()
});

  
  
  
When(/^I entere password$/, async({page}) => {
	const rego = new RepoPage(page)
  await rego.enterpassword()
});


  
When(/^I enter confirm password$/,async ({page}) => {
const rego=new RepoPage(page)
await rego.enterconfirmpassword()
});


  
When(/^I enter username$/, async({page}) => {
  await page.pause()
	const rego=new RepoPage(page)
  await rego.enterusername() 
});

  
  
When(/^I click newzealand$/, async({page}) => {
const rego=new RepoPage(page)
await rego.clickcountry() 
});

  
  
When(/^I click next button$/, async({page}) => {
  
	const rego=new RepoPage(page)
  await rego.clicknextbutton()
});

  