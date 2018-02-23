;(function () {
  'use strict';

  var events = {}
  var elements = {}
  var criteria = {}
  var handlers = {}

  function validate() {
    if ( typeof ga === 'undefined' ) {
      throw new Error('ga must be defined to create a scroll event')
    }
  }

  function setEvent(label,value) {
    events[label] = function () {
      ga('send','event','Window','Scroll',label,value)
    }
  }

  function setElement(label,selector) {
    elements[label] = document.querySelector(selector)
  }

  function setCriteria(label,selector) {
    criteria[label] = function () {
      if ( window.scrollY >= elements[label].offsetTop ) {
        return true
      }
      return false
    }
  }

  function makeHandler (label) {
    return function () {
      if ( criteria[label]() ) {
        events[label]()
        window.removeEventListener('scroll',handlers[label])
      }
    }
  }

  function setHandler(label) {
    handlers[label] = makeHandler(label)
  }

  function setListener(label) {
    window.addEventListener('scroll',handlers[label])
  }

  function createGoogleAnalyticsScrollEvent(label,value,selector) {
    validate()
    setEvent(label,value)
    setElement(label,selector)
    setCriteria(label,selector)
    setHandler(label)
    setListener(label)
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = createGoogleAnalyticsScrollEvent
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return createGoogleAnalyticsScrollEvent
      })
    }
    else {
      window.createGoogleAnalyticsScrollEvent = createGoogleAnalyticsScrollEvent
    }
  }
})();
