/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = .5;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.even = true;
    this.sprites = {
      stand: {
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentSpriteWidth = this.sprites.stand.cropWidth;
  }
  return _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentSpriteWidth * this.frames, 0, this.currentSpriteWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.even) this.frames++;
      this.even = !this.even;
      if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      } else if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      }
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }
  return _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      // tilt only this platform
      // c.save();
      // c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
      // c.rotate(-0.5);
      // c.drawImage(this.image,0, -this.height / 2, this.width, this.height);
      // c.restore();
    }
  }]);
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }
  return _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
}();
function createImage(src) {
  var image = new Image();
  image.src = src;
  return image;
}
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var scrollOffset = 0;
var scrollOffsetY = 0;
function init() {
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 5 + 450 - platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage
  }), new Platform({
    x: platformImage.width * 9 + 450 - platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 250,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 450,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 450 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 850 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 250,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 450,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 450 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 850 - 2,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
  scrollOffsetY = 0;
}
var keys = {
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowUp: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  }
};
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log(player.position.y);
  genericObjects.forEach(function (object) {
    object.draw();
  });
  player.update();
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.ArrowLeft.pressed && player.position.x > 100 || keys.ArrowLeft.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else if (keys.ArrowRight.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.ArrowUp.pressed && player.position.y > 100) {
    player.velocity.y = -15;
  } else {
    player.velocity.x = 0;
    if (keys.ArrowRight.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (object) {
        object.position.x -= player.speed * 0.66;
      });
    }
    if (keys.ArrowLeft.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (object) {
        object.position.x += player.speed * 0.66;
      });
    }
  }
  platforms.forEach(function (platform) {
    if (player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height) {
      player.velocity.y = 0;
      player.position.y = platform.position.y - player.height;
    }
  });
  if (scrollOffset > platformImage.width * 9 + 650 - 2) {
    //show modal
    document.getElementById("youWonModel").style.display = "block";
    setTimeout(function () {
      document.getElementById("youWonModel").style.display = "none";
      init();
    }, 3000);
  }
  if (player.position.y > canvas.height) {
    init();
  }
}
init();
animate();
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      if (parseInt(document.getElementById("jumps").innerText) > 0) {
        player.velocity.y = -15;
        document.getElementById("jumps").innerText = parseInt(document.getElementById("jumps").innerText) - 1;
      }
      break;
    case 'ArrowDown':
      player.velocity.y = 15;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentSpriteWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentSpriteWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
  }
});
window.addEventListener('keyup', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      player.velocity.y = 0;
      break;
    case 'ArrowDown':
      player.velocity.y = 0;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentSpriteWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentSpriteWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
  }
});
var questions = [{
  question: "What is the capital of France?",
  options: ["Paris", "Berlin", "London", "Rome"],
  correctAnswer: "Paris"
}, {
  question: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Saturn"],
  correctAnswer: "Mars"
}, {
  question: "Who painted the Mona Lisa?",
  options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
  correctAnswer: "Leonardo da Vinci"
}, {
  question: "What is the tallest mammal?",
  options: ["Giraffe", "Elephant", "Horse", "Whale"],
  correctAnswer: "Giraffe"
}, {
  question: "What is the chemical symbol for water?",
  options: ["H2O", "CO2", "O2", "CH4"],
  correctAnswer: "H2O"
}];
document.getElementById("openModalBtn").addEventListener("click", function () {
  // Display modal
  document.getElementById("quizModal").style.display = "block";
  // Get random question
  var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  // Set question text
  document.getElementById("question").innerText = randomQuestion.question;
  // Set options
  var optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // Clear previous options
  randomQuestion.options.forEach(function (option, index) {
    var optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "option";
    optionInput.id = "option" + (index + 1);
    var optionLabel = document.createElement("label");
    optionLabel.htmlFor = "option" + (index + 1);
    optionLabel.innerText = option;
    optionsDiv.appendChild(optionInput);
    optionsDiv.appendChild(optionLabel);
    optionsDiv.appendChild(document.createElement("br"));
  });
});
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("quizModal").style.display = "none";
});
document.getElementById("checkAnswerBtn").addEventListener("click", function () {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var answer = selectedOption.id;
    var randomQuestion = questions.find(function (q) {
      return q.question === document.getElementById("question").innerText;
    });
    if (answer === "option" + (randomQuestion.options.indexOf(randomQuestion.correctAnswer) + 1)) {
      document.getElementById("result").innerText = "Correct!";
      document.getElementById("jumps").innerText = parseInt(document.getElementById("jumps").innerText) + 2;
      setTimeout(function () {
        document.getElementById("quizModal").style.display = "none";
        document.getElementById("result").innerText = "";
      }, 1000);
    } else {
      document.getElementById("result").innerText = "Incorrect!";
      setTimeout(function () {
        document.getElementById("quizModal").style.display = "none";
        document.getElementById("result").innerText = "";
      }, 1000);
    }
  } else {
    document.getElementById("result").innerText = "Please select an option.";
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map