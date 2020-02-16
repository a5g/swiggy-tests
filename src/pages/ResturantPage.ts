// Page Object for Resturant page
// We capture all elements on checkout page that we interact with during our test
// Behvior methods added to trigger actions on respective page
// Method names are so meaningful such that any test developer can easily understand the motto of it
import BasePage from './BasePage'

export default class ResturantPage extends BasePage {
  get checkoutBtn() {
    return this.findVisibleElement(`//div[text()='Checkout']`)
  }

  // a generic method to update the quantity for a given item
  // div index is need to find 'ADD', '+' or '-' buttons
  qtyChange(item: string, btnIndex: number) {
    this.findVisibleElement(
      `//div[text()='${item}']/parent::div/parent::div/parent::div/parent::div/parent::div//div[@class='JWyJG']/div[2]/div[${btnIndex}]`,
    ).click()
    browser.pause(1500)
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
  gotoCheckoutPage() {
    this.checkoutBtn.click()
  }
}
