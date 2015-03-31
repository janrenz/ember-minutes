# Ember-hoodie

This README outlines the details of collaborating on this Ember application.

This shows: 

* How to use ember and hoodie
* How to use cool animations
* How to use contenteditable

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* install hoodie see http://hood.ie/intro/#get-started
* create a local hoodie app `hoodie new myapp`

## Running / Development

* run hoodie server
* be sure to adapt the url of hoodie if needed in config and index.html

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

 
## TODO

 - [X]  Persist todo state change
 - [ ]  Get basepath for hoodie js in index from config
 - [X]  Add styling
 - [X]  Add single item view
 - [X]  Add animation in between views
 - [X]  Make title editable
 - [X]  Make description editable
 - [X]  Allow adding of notes
 - [ ]  Persist notes
 - [X]  Show thumbnails of all items
 - [X]  Sorting
 - [X]  Prev and Next Navigation in item view
 - [ ]  Logo (Tomster in Hoodie?)  
 - [ ]  Autosave should be triggered before controller is left
 - [X]  add DueDate and overdue state
 - [ ]  add Assignees
 - [ ]  Save changelog
 - [ ]  Archived mode
  


 
