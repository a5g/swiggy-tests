// Page Object for init page
// We capture all elements on checkout page that we interact with during our test
// Behvior methods added to trigger actions on respective page
// Method names are so meaningful such that any test developer can easily understand the motto of it
import BasePage from './BasePage'

export default class InitPage extends BasePage {
  get locationSearchBar() {
    return this.findVisibleElement('#location')
  }

  get searchResultContainer() {
    return this.findVisibleElement(`div[class='_1oLDb']`)
  }

  // enter delivery location to see the possible matching locations
  enterDeliveryLocation(location: string) {
    this.locationSearchBar.setValue(location)
  }

  // When location suggestions are available, desired location can be choosen by index
  selectDeliveryLocationByIndex(index: number = 1) {
    this.searchResultContainer.$$(`div[class='_3lmRa']`)[index - 1].click()
  }

  // When location suggestions are available, desired location can be choosen by location name
  selectDeliveryLocationByName(location: string) {
    this.findVisibleElement(`//span[text()='${location}']`).click()
  }
}
