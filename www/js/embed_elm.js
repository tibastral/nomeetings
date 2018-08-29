/* global Elm localStorage cordova */

var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    var elmApp = Elm.Main.init({
      flags:location.href,
      node: document.getElementById('app')
    })

  }
}

app.initialize()
