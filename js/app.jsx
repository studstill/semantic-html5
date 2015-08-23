var React = require('react');
var Nav = require('./components/Nav.jsx');
var Header = require('./components/Header.jsx');
var Main = require('./components/Main.jsx');
var MovieLinks = require('./components/MovieLinks.jsx')
var Footer = require('./components/Footer.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Nav />
        <Header />
        <Main />
        <MovieLinks />
        <Footer />
      </div>
    );
  }

});

React.render(
  <App />,
  document.getElementById('content')
);
