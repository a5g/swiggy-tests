// Page Object for Checkout page
// We capture all elements on checkout page that we interact with during our test
// Behvior methods added to trigger actions on respective page
// Method names are so meaningful such that any test developer can easily understand the motto of it
import BasePage from './BasePage'

export default class CheckoutPage extends BasePage {
  get signupBtn() {
    return this.findVisibleElement(`//div[text()='SIGN UP']`)
  }

  get phoneNumberText() {
    return this.findVisibleElement(`//input[@id='mobile']`)
  }

  get nameText() {
    return this.findVisibleElement(`//input[@id='name']`)
  }

  get emailText() {
    return this.findVisibleElement(`//input[@id='email']`)
  }

  get passwordText() {
    return this.findVisibleElement(`//input[@id='password']`)
  }

  get referralCodeLink() {
    return this.findVisibleElement(`//div[text()='Have a referral code?']`)
  }

  get continueBtn() {
    return this.findVisibleElement(`//a[text()='CONTINUE']`)
  }

  openSignupForm() {
    this.signupBtn.click()
  }

  fillForm(user: any) {
    this.phoneNumberText.setValue(user.phone)
    this.nameText.setValue(user.name)
    this.emailText.setValue(user.email)
    this.passwordText.setValue(user.password)
  }

  clickReferralCodeLink() {
    this.referralCodeLink.click()
  }

  clickContinueBtn() {
    this.continueBtn.click()
    browser.pause(2000)
  }

  getEmailError() {
    return this.findVisibleElement(
      `//input[@id='email']/parent::div/label`,
    ).getText()
  }

  // a generic method to update the quantity for a given item
  // div index is need to find 'ADD', '+' or '-' buttons
  qtyChange(item: string, btnIndex: number) {
    this.findVisibleElement(
      `//div[text()='${item}']/parent::div/parent::div/div[2]/div/div/div[${btnIndex}]`,
    ).click()
    browser.pause(3000)
  }

  // add qty for a given item (used when ADD button is visible on UI)
  addItem(item: string) {
    this.qtyChange(item, 1)
  }

  // increase quantity of a given item (used when + button is visible on UI)
  increaseQty(item: string) {
    this.qtyChange(item, 2)
  }

  // decrease quantity of a given item (used when - button is visible on UI)
  decreaseQty(item: string) {
    this.qtyChange(item, 3)
  }

  // get quantity data for a given item
  getQty(item: string) {
    return this.findVisibleElement(
      `//div[text()='${item}']/parent::div/parent::div/div[2]/div/div/div[4]`,
    ).getText()
  }
}
