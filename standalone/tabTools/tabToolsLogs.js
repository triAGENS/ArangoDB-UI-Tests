/*global casper, exports */
exports.test = function (casper, phantomcss, baseUrl, helper) {

  casper.thenOpen(baseUrl + "#logs");

  //*** helper ***
  var screenshot = function(id) {
    casper.then(
      function() {
        phantomcss.screenshot("#content", 0, '.center.seccol', 'tab-tools-logs');
      }
    );
  };
  //*** /helper ***


  casper.then(
    function() {
      this.waitUntilVisible(
        '#logContent',
        function() {},
        function timeout() {
          casper.test.fail('open logs view failed');
        }
      );
    }
  );

  //initial view
  screenshot();

  //info tab
  casper.then(
    function() {
      this.click('#loginfo');
      this.waitUntilVisible(
        'button.arango-active-tab #loginfo',
        function() {},
        function timeout() {
          casper.test.fail('open logs info view failed');
        }
      );
    }
  );

  screenshot();

  //error tab
  casper.then(
    function() {
      this.click('#logerror');
      this.waitUntilVisible(
        'button.arango-active-tab #logerror',
        function() {},
        function timeout() {
          casper.test.fail('open logs error view failed');
        }
      );
    }
  );

  screenshot();

  //info tab
  casper.then(
    function() {
      this.click('#logwarning');
      this.waitUntilVisible(
        'button.arango-active-tab #logwarning',
        function() {},
        function timeout() {
          casper.test.fail('open logs warnings view failed');
        }
      );
    }
  );

  screenshot();

  //info tab
  casper.then(
    function() {
      this.click('#logdebug');
      this.waitUntilVisible(
        'button.arango-active-tab #logdebug',
        function() {},
        function timeout() {
          casper.test.fail('open logs debug view failed');
        }
      );
    }
  );

  screenshot();



};
