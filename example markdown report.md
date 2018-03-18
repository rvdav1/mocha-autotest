# TOC
   - [Smoke suite](#smoke-suite)
     - [Sanity check](#smoke-suite-sanity-check)
     - [All the main elements should be visible on Carreer page](#smoke-suite-all-the-main-elements-should-be-visible-on-carreer-page)
     - [Checking a search result list](#smoke-suite-checking-a-search-result-list)
     - [Homework](#smoke-suite-homework)
<a name=""></a>

<a name="smoke-suite"></a>
# Smoke suite
<a name="smoke-suite-sanity-check"></a>
## Sanity check
EPAM carreer page should open, with a visible logo on the page.

```js
return expect(epamLogo.isDisplayed()).to.eventually.be.true;
```

<a name="smoke-suite-all-the-main-elements-should-be-visible-on-carreer-page"></a>
## All the main elements should be visible on Carreer page
The "Keyword or job ID" input field should be visible.

```js
return expect(keyWordOrIDInput.isDisplayed()).to.eventually.be.true;
```

The "Location" dropdown should be visible.

```js
return expect(locationDropdown.isDisplayed()).to.eventually.be.true;
```

The "Skills" selector should be visible.

```js
return expect(skillsSelector.isDisplayed()).to.eventually.be.true;
```

The "Find" button should be visible.

```js
return expect(findButton.isDisplayed()).to.eventually.be.true;
```

<a name="smoke-suite-checking-a-search-result-list"></a>
## Checking a search result list
When the "Test Automation engineer" keyword is typed into the search field.

```js
return keyWordOrIDInput.sendKeys(keyWord);
```

And the "Find" button is clicked.

```js
findButton.click();
driver.sleep(6000);
return driver.wait(function () {
    return driver.findElement(by.css(searchResultHeadingLocator)).isDisplayed();
});
```

Then the search result list heading should contain the searched searchterm.

```js
return expect(driver.findElement(by.css(searchResultHeadingLocator)).getText()).to.eventually.include(keyWord.toUpperCase());
```

<a name="smoke-suite-homework"></a>
## Homework