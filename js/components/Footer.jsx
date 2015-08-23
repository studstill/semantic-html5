var React = require('react');

// Footer
module.exports = React.createClass({
  render: function() {
    return (
      <footer>
        <img alt="credits" />
        <form action="submit">
          Subscribe:
          Register for updates
          <input type="text" value="" />
          <button>Subscribe</button>
        </form>
        <li>Home</li>
        <li>Contact Us</li>
        <p>
          Copyright © 1992 - 2015 To Be Continued, LLC. All Rights Reserved.
        </p>
        <p>
          Back to the Future™, Back to the Future™ Part II and Back to the Future™ Part III are registered trademarks and copyrights of Universal City Studios, Inc. and U-Drive Joint Venture.
          Read more at http://www.backtothefuture.com/#cXp0URxkmPkoPUev.99
        </p>
      </footer>
    );
  }
});
