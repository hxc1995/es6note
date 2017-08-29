"use strict";

(function () {
	var _marked = [hwgenerator].map(regeneratorRuntime.mark);

	function hwgenerator() {
		return regeneratorRuntime.wrap(function hwgenerator$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 10;

					case 2:
						_context.next = 4;
						return 100;

					case 4:
						_context.next = 6;
						return 1000;

					case 6:
						return _context.abrupt("return", "ending");

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}

	var hw = hwgenerator();
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = hw[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var y = _step.value;

			console.log(y);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
})();
