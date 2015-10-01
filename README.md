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
 - [X]  Add explicit Done and set undone buttons instead of toggle
 - [ ]  Autosave should be triggered before controller is left
 - [X]  add DueDate and overdue state
 - [ ]  add Assignees
 - [ ]  Save changelog
 - [ ]  Archived mode
 - [ ]  Sorting by OnTheAgendaFlag
 - [ ]  Add overdue state
 - [ ]  Clear local stuff after logout

## Konzept Meeting App

Meetings beanpruchen für viele Arbeitnehmer, auch am HPI, jede Woche viel Zeit.
Und doch laufen sie oft unstrukturiert ab. Wichtige Themen werden nicht
besprochen, manche Dinge wieder und wieder besprochen, und Agendas und
Protokolle werden kompliziert erstellt.

Mit https://minutes.io gab es schon vor einigen Jahren ein Projekt welches
sich der Themenstellung Agenda und Protokoll annahm (damals schon Offline
fähig).

Doch geht dieser Ansatz nicht weit genug, denn es reicht nicht den Excel/Word
Workflow ins Web zu bringen, statt dessen sollte man sich fragen wie die
Situation in Meeting Räumen oft ist. Dort gibt es oft ein Beamer oder ein
grossen TV Screen.


### Anforderungen

- Synchronisiertes Editieren von Inhalten
- TV optimierte Darstellung
- Fortschrittsanzeige
- Historie
- Protokollfunktion

### Datenmodel:

- Meeting
  - Titel
  - Datum/Zeit (Begin)
  - Dauer
  - Teilnehmer

- Person
  - Email

- WorkItem
  - Title
  - Description
  - Status [open|scheduled|closed|...?]
  - Links zu externen System (Gitub/ TeamCity / ..?)
  - Attachments (später)
  - Notes

### Ansichten
- Agenda
- Einzelnes WorkItem
- Protokoll

### Workflows / User stories

#### Anlegen von Meeting
Um ein Meeting anzulegen markiere ich aus einer Liste von Themen, jene aus
die ich in dem nächsten Meeting bearbeiten kann. Dies kann durch mehre Nutzer
parallel erfolgen. Es gibt eine fixe Reihenfolge (Prios an WorkItems oder an
Scheduled Items)

#### Meeting durchführen
Innerhalb eines Meetings gibt es zwei Ansichten die verwnedet werden: Die Agenda
zeigt alle Themen die für das Meeting geplant sind. Die Einzelansicht zeigt ein
einzelnes Workitem und seine Historie. Es kann direkt inline bearbeitet werden.
Notizen können hinzugefügt werden.

#### Nach dem Meeting / Protokoll
Nach einem Meeting kann ein Protokoll erstellt werden. Dieses enthält eine
Liste der Punkte die besprochen wurden, Änderungen die vorgenommen werden
(Status geändert, Inhalt geändert, Notizen die hizugefügt wurden)

Offene Frage: Kann ein Protokoll später noch bearbeitet werden?

### Tech Stack

- BaaS Framework: HOODIE, Meteor, ..?
- Offline First / Offline fähig
- Client Side Rendering (EmberJS, React, Angular)
- Anbindung an externe Systeme (ToDos)
- optional Packaging als App (GitHub Atom)
- optional erzeugen von Protokollen (Mail oder PDF)

Das Tool soll als OpenSource auf GitHub veröffentlicht werden.

### Weitere Ideen: Gamification

Bspw: Aufmunternde  Screen am Anfang vom Meeting.
Badges wenn mehr als n items erledigt werden oder man früher als geplant mit dem Meeting durch ist...
