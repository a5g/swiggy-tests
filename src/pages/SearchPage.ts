// Page Object for Search page
// We capture all elements on checkout page that we interact with during our test
// Behvior methods added to trigger actions on respective page
// Method names are so meaningful such that any test developer can easily understand the motto of it
import BasePage from './BasePage'

export default class SearchPage extends BasePage {
  get searchaBar() {
    return this.findVisibleElement(
      `input[placeholder='Search for restaurants or dishes']`,
    )
  }

  // enter the resturant name in search bar
  enterResturant(name: string) {
    this.searchaBar.setValue(name)
    browser.keys('\uE007')
  }

  // choose the matching resturant from the list
  chooseResturant(name: string) {
    this.findVisibleElement(
      `(//div[@class='nA6kb'])[contains(text(), '${name}')]`,
    ).click()
  }

  // Bite Me resturant gives two location options. Hence we need to choose 'Indiranagar'
  chooseLocation(location: string) {
    this.findVisibleElement(`//div[contains(text(), '${location}')]`).click()
  }
}
