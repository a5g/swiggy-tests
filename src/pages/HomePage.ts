// Page Object for Home page
// We capture all elements on checkout page that we interact with during our test
// Behvior methods added to trigger actions on respective page
// Method names are so meaningful such that any test developer can easily understand the motto of it
// More locators and actions can captured later
import BasePage from './BasePage'

export default class HomePage extends BasePage {
  get searchLink() {
    return this.findVisibleElement(`//span[text()='Search']`)
  }

  gotoSearchPage() {
    this.searchLink.click()
  }
}
