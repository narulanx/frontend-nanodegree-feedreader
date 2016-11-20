# Project Overview

In this project we are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite.


## How to run
* Clone the repository
* Open index.html in the browser
* You will find unit test results in the bottom of the application


## Unit Tests
### Test Suite - RSS Feeds
#### Specs
* checks if the allFeeds variable has been defined
* checks if the feeds has a valid URL
* checks if the feeds has a valid name

### Test Suite - The Menu
#### Specs
* checks if menu element is hidden by default
* checks if the menu visibility changes when clicked

### Test Suite - Initial Entries
#### Specs
* checks if at least a single .entry element within the .feed container

### Test Suite - New Feed Selection
#### Specs
* checks if the content changes when a new feed is loaded


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What I learnt?

I learnt how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Resources
* [Udacity Course](https://www.udacity.com/course/ud549)
* [Required Project Assets](http://github.com/udacity/frontend-nanodegree-feedreader)
* [Jasmine documentation](http://jasmine.github.io/)
* [Testing DOM Events Using jQuery and Jasmine 2.0](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)