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
	
	if(yPos < blob0.style.bottom) {
		blob0.style.visibility="visible";
		blob1.style.visibility="hidden";
		blob2.style.visibility="hidden";
		blob3.style.visibility="hidden";
		blob4.style.visibility="hidden";
		blob5.style.visibility="hidden";
		blob6.style.visibility="hidden";
		blob7.style.visibility="hidden";
		blob8.style.visibility="hidden";
		blob9.style.visibility="hidden";
		bloba.style.visibility="hidden";
	}else if (yPos < blob1.style.bottom) {
		//blob1.style.top = pos(yOffset, -blob1.style.height, relativeY, 0) + 'px';
		blob0.style.visibility="hidden";
		blob1.style.visibility="visible";
		blob2.style.visibility="hidden";
		blob3.style.visibility="hidden";
		blob4.style.visibility="hidden";
		blob5.style.visibility="hidden";
		blob6.style.visibility="hidden";
		blob7.style.visibility="hidden";
		blob8.style.visibility="hidden";
		blob9.style.visibility="hidden";
		bloba.style.visibility="hidden";
	}else {
		//blob0.style.visibility="hidden";
		// blob1.style.visibility="hidden";
		// blob2.style.visibility="hidden";
		// blob3.style.visibility="hidden";
		// blob4.style.visibility="hidden";
		// blob5.style.visibility="hidden";
		// blob6.style.visibility="hidden";
		// blob7.style.visibility="hidden";
		// blob8.style.visibility="hidden";
		// blob9.style.visibility="hidden";
		// bloba.style.visibility="visible";
	}
  
    var relativeY = yPos / 3000;
	// var yOffset = blob0.style.height;

	blob0.style.top = '0px';
	
	blobcontainer.style.top = '0px';
	
	blob2.style.display="none";
	// blob1.style.top = blob0.style.height;
	// blob2.style.top = blob0.style.height + blob1.style.height;
	blob3.style.top = yPos + 'px';
	// blob4.style.top = blob3.style.bottom;
	// blob5.style.top = blob4.style.bottom;
	// blob6.style.top = blob5.style.bottom;
	// blob7.style.top = blob6.style.bottom;
	// blob8.style.top = blob7.style.bottom;
	// blob9.style.top = blob8.style.bottom;
	// bloba.style.top = blob9.style.bottom;
	
	blob1.style.top = '900px';
	// blob2.style.top = '1800px';
	// blob3.style.top = '2700px';
	// blob4.style.top = '3600px';
	// blob5.style.top = '4500px';
	// blob6.style.top = '5400px';
	// blob7.style.top = '6300px';
	// blob8.style.top = '7200px';
	// blob9.style.top = '8100px';
	bloba.style.top = '9000px';

	
    //mainBG.style.backgroundPosition = 'center ' + pos(0, -600, relativeY, 0) + 'px';

    // blob1.style.top = pos(yOffset, -blob1.style.height, relativeY, 0) + 'px';
    // yOffset += blob1.style.height;

    // blob2.style.top = pos(yOffset, -blob2.style.height, relativeY, 0) + 'px';
    // yOffset += blob2.style.height;

    // blob3.style.top = pos(yOffset, -900, relativeY, 0) + 'px';
    // yOffset += blob3.style.height;

    // blob4.style.top = pos(yOffset, -3900, relativeY, 0) + 'px';
    // yOffset += blob4.style.height;

    // blob5.style.top = pos(yOffset, -2900, relativeY, 0) + 'px';
    // //blob5.style.left = -40 + 'px';

    // blob6.style.top = pos(yOffset, -4900, relativeY, 0) + 'px';
    // //blob6.style.left = 325 + 'px';

    // blob7.style.top = pos(yOffset, -1900, relativeY, 0) + 'px';
    // //blob7.style.left = 725 + 'px';

    // blob8.style.top = pos(yOffset, -700, relativeY, 0) + 'px';
    // //blob8.style.left = 570 + 'px';

    // blob9.style.top = pos(yOffset, -6000, relativeY, 0) + 'px';
    // //blob9.style.left = 640 + 'px';

	// bloba.style.top = blob0.style.height + 'px'
  }

  function pos(base, range, relY, offset) {
    return base + limit(0, 1, relY - offset) * range;
  }

  function prefix(obj, prop, value) {
    var prefs = ['webkit', 'moz', 'o', 'ms'];
    for (var pref in prefs) {
      obj[prefs[pref] + prop] = value;
    }
  }

  function limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }

  (function() {

    updateElements(win.scrollY);

    // blob1.classList.add('force-show');
    // blob2.classList.add('force-show');
    // blob3.classList.add('force-show');
    // blob4.classList.add('force-show');
    // blob5.classList.add('force-show');
    // blob6.classList.add('force-show');
    // blob7.classList.add('force-show');
    // blob8.classList.add('force-show');
    // blob9.classList.add('force-show');
	// bloba.classList.add('force-show');
  })();

  win.addEventListener('resize', onResize, false);
  win.addEventListener('scroll', onScroll, false);
  win.addEventListener('wheel', onScroll, false);

})(window, document);
