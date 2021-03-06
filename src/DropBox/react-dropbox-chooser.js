Object.defineProperty(exports, "__esModule", {
    value: true,
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loadScript = require("load-script");

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return call && (typeof call === "object" || typeof call === "function")
        ? call
        : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError(
            "Super expression must either be null or a function, not " +
            typeof superClass
        );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    if (superClass)
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
}

var DROPBOX_SDK_URL = "https://www.dropbox.com/static/api/2/dropins.js";
var SCRIPT_ID = "dropboxjs";

var scriptLoadingStarted = false;

// read more
// https://www.dropbox.com/developers/chooser

var DropboxChooser = (function (_Component) {
    _inherits(DropboxChooser, _Component);

    function DropboxChooser(props) {
        _classCallCheck(this, DropboxChooser);

        var _this = _possibleConstructorReturn(
            this,
            (
                DropboxChooser.__proto__ ||
                Object.getPrototypeOf(DropboxChooser)
            ).call(this, props)
        );

        _this.onChoose = _this.onChoose.bind(_this);
        return _this;
    }

    _createClass(DropboxChooser, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!this.isDropboxReady() && !scriptLoadingStarted) {
                    scriptLoadingStarted = true;
                    (0, _loadScript2.default)(DROPBOX_SDK_URL, {
                        attrs: {
                            id: SCRIPT_ID,
                            "data-app-key": this.props.appKey,
                        },
                    });
                }
            },
        },
        {
            key: "isDropboxReady",
            value: function isDropboxReady() {
                return !!window.Dropbox;
            },
        },
        {
            key: "onChoose",
            value: function onChoose() {
                if (!this.isDropboxReady() || this.props.disabled) {
                    return null;
                }

                var _props = this.props,
                    success = _props.success,
                    cancel = _props.cancel,
                    linkType = _props.linkType,
                    multiselect = _props.multiselect,
                    extensions = _props.extensions;

                window.Dropbox.choose({
                    success: success,
                    cancel: cancel,
                    linkType: linkType,
                    multiselect: multiselect,
                    extensions: extensions,
                });
            },
        },
        {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { onClick: this.onChoose },
                    this.props.children
                        ? this.props.children
                        : _react2.default.createElement(
                            "button",
                            null,
                            "Open dropbox chooser"
                        )
                );
            },
        },
    ]);

    return DropboxChooser;
})(_react.Component);

DropboxChooser.propTypes = {
    children: _propTypes2.default.node,
    appKey: _propTypes2.default.string.isRequired,
    success: _propTypes2.default.func.isRequired,
    cancel: _propTypes2.default.func,
    linkType: _propTypes2.default.oneOf(["preview", "direct"]),
    multiselect: _propTypes2.default.bool,
    extensions: _propTypes2.default.arrayOf(_propTypes2.default.string),
    disabled: _propTypes2.default.bool,
};
DropboxChooser.defaultProps = {
    cancel: function cancel() { },
    linkType: "preview",
    multiselect: false,
    disabled: false,
};
exports.default = DropboxChooser;
