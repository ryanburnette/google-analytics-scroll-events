;(function () {
  'use strict';

  var locks = {}
  var listeners = {}
  var events = {}

  function createEventListener(label,value,selector) {
    if ( !ga ) {
      throw new Error('ga must be defined to create a scroll event')
    }

    locks[label] = false
    listeners[label] = window.addEventListener('scroll',function () {
    })
    events[label] = function () {
      ga('send','event','Window','Scroll',label,value)
    }
  }

  module.exports = createEventListener
})();
