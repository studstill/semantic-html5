var React = require('react');

// Header
module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <img alt="BTTFLogo" />
        <li>#BTTF2015</li>
        <li>News & Events</li>
        <li>The Movies</li>
        <li>The Cast</li>
        <li>The DeLorean</li>
        <li>In Concert</li>
      </header>
    );
  }
});
