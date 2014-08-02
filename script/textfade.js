(function(win, d) {

  var $ = d.querySelector.bind(d);

  var blob0 = $('#blob-0');
  var blob1 = $('#blob-1');
  var blob2 = $('#blob-2');
  var blob3 = $('#blob-3');
  var blob4 = $('#blob-4');
  var blob5 = $('#blob-5');
  var blob6 = $('#blob-6');
  var blob7 = $('#blob-7');
  var blob8 = $('#blob-8');
  var blob9 = $('#blob-9');
  var bloba = $('#blob-a');
  var blobcontainer = $('#blob-container');

  var mainBG = $('section#content');

  function onResize () {
    updateElements(win.scrollY);
  }

  function onScroll (evt) {
    updateElements(win.scrollY);
  }

  function updateElements (yPos) {

	// blob0.style.visibility="hidden";
	// blob1.style.visibility="hidden";
	// blob2.style.visibility="hidden";
	// blob3.style.visibility="hidden";
	// blob4.style.visibility="hidden";
	// blob5.style.visibility="hidden";
	// blob6.style.visibility="hidden";
	// blob7.style.visibility="hidden";
	// blob8.style.visibility="hidden";
	// blob9.style.visibility="hidden";
	
  }


  function limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }

  (function() {

    updateElements(win.scrollY);

    blob1.classlist.add('force-show');
    blob2.classlist.add('force-show');
    blob3.classlist.add('force-show');
    blob4.classlist.add('force-show');
    blob5.classlist.add('force-show');
    blob6.classlist.add('force-show');
    blob7.classlist.add('force-show');
    blob8.classlist.add('force-show');
    blob9.classlist.add('force-show');
	bloba.classlist.add('force-show');
  })();

  win.addEventListener('resize', onResize, false);
  win.addEventListener('scroll', onScroll, false);
  win.addEventListener('wheel', onScroll, false);

})(window, document);
