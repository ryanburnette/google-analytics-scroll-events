# Google Analytics Scroll Events

A browser JavaScript library for binding Google Analytics events to the window
scrolling to an element. 

## Use Case

I often have clients make requests to build elements that reduce the height of
a page. In many cases I suspected that most users were willing to scroll which
made the element superfluous. If users are willing to scroll to some content
further down the page, what's the point of adding complexity to move content
closer to the top?

This lets you create data on how often a user scrolls to a certain point in the
content.

## Usage

```
npm install google-analytics-scroll-events
```

```javascript
const addEvent = require('google-analytics-scroll-events')

addEvent('Body',1,'body')
addEvent('Foo Element',2,'.foo')
addEvent('Bar Element',3,'#bar')
```

## API

### `createGoogleAnalyticsScrollEvent(label,value,selector)`

Adds an event which will fire when the window scrolls past the selected
element. Events only fire once.

- `label` A label that will be used as a key for JavaScript objects and as the
	`eventLabel` in the Google Analytics event
- `value` The `eventValue` in the Google Analytics event
- `selector` A selector to be used by `document.querySelector` for the element
	that must be scrolled to in order to fire the Google Analytics event

Refer to the [documentation for Google Analytics events][1].

[1]: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
