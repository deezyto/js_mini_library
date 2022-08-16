import $ from '../core';

$.prototype.event = function(callback, ...event) {
  const eventList = {...event};
  for (let i = 0; i < this.length; i++) {
    for (let item in eventList) {
      this.selector[i].addEventListener(eventList[item], (e) => {
        console.log('click');
        if (callback) {
          callback(e);
        }
      });
    }
  }
  return this;
};

$.prototype.eventClick = function(callback) {
  for (let i = 0; i < this.length; i++) {
    this.selector[i].addEventListener('click', () => {
      console.log('click');
      if (callback) {
        callback();
      }
    });
  }
  return this;
};