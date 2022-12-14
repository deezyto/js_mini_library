import $ from './library/lib';

window.addEventListener('DOMContentLoaded', () => {
  new $('.library').ifIndex([0,2,3]).toggleClass('test', 'test1').event(0, 'click', 'mousemove');
  new $('#tab .tab-nav li').event(new $('#tab .tab-nav li').onTab, 'click');
  new $('#tab1').tabCreate().event(new $('#tab1 .tab-nav li').onTab, 'click');
  new $('[data-modal-id]').modal();
  new $('#slider').slider({stepSlide: 1, slideOnPage: 2, points: true});
  new $('#slider1').slider({create: true, stepSlide: 1, slideOnPage: 2, points: true});

  new $('.library').ifIndex([0]).eventClick((e) => {
    new $('.library').ifIndex([0]).fadeIn({e: e, duration: 1000});
  });
  new $('.library').ifIndex([1]).eventClick((e) => {
    new $('.library').ifIndex([1]).fadeOut({e: e, duration: 1000});
  });
  new $('.library').ifIndex([0]).fadeIn({duration: 1000});
  new $('.library-1').fadeToggle({duration: 1000});
  new $('.downUp-item-title').downUp({duration: 500});
});