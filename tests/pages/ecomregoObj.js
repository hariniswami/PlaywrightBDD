import { Expect } from "@playwright/test";
const data=require('../data/ecomdata.json')

class eccomregopage{

constructor(page){
this.page=page;


}

rego_btn(){
    return this.page.getByRole('link',{name: 'Register'}).first();
}


personal_btn() {
return this.page.getByRole('link',{name: 'Personal Use'})

}

email_box() {
return this.page.getByLabel('Email')


}

password_box() {
 return this.page.locator('//input[@name="password"]')

}

confirmpassword() {

    return this.page.getByLabel('Confirm password')
}

ursername_box() {

   return this.page. getByLabel('Username')
}

country_box() {

return this.page.locator(' //span[contains(text(),"New Zealand")]')


}

next_btn() {

return this.page.getByRole('button',{name:'Next step'})

}




 async navigatetoregolink() {
 await this.rego_btn().click();

}

async clickpersonal_btn() {
await this.personal_btn().click()

}

async enteremailaddress() {
await this.email_box().fill(data.regodetails.email)


}

async enterpassword() {

    await this.password_box().fill(data.regodetails.password)
}

async enterconfirmpassword() {


    await this.confirmpassword().fill(data.regodetails.confirmpassword)
}


async enterusername() {

await this.ursername_box() .fill(data.regodetails.username)

}



async clickcountry() {

    await this.country_box().click()
}


async clicknextbutton() {

await this.next_btn().click()


}





}

module.exports=eccomregopage;