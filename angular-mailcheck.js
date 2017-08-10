(function(){
  'use strict';

  /**
   * @ngdoc directive
   * @name mailcheck.directive:mailcheck
   * @description
   * Angular wrapper for Mailcheck.js
   */
  angular
    .module('angular-mailcheck', [])
    .directive('mailcheck', mailcheckDirective);

  mailcheckDirective.$inject = ['$compile', '$sce'];

  function mailcheckDirective($compile, $sce) {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        options: '=?mailcheck',
        suggestionText: '=?mailcheckSuggestionText',
        nopeText: '=?mailcheckNopeText'
      },
      link: function(scope, el, attrs) {

        // Mailcheck options object
        var options = angular.extend(scope.options || {}, {
          suggested: function(element, suggestion) {
            scope.suggestion = suggestion.full;
            scope.$apply();
          },
          empty: function(element) {
            scope.suggestion = false;
          }
        });

        // Extend Mailcheck's defaultDomains
        if (options.defaultDomains &&
            angular.isArray(options.defaultDomains) &&
            options.defaultDomains.length) {
          Mailcheck.defaultDomains = Mailcheck.defaultDomains.concat(options.defaultDomains);
        }

        // Extend Mailcheck's defaultSecondLevelDomains
        if (options.defaultSecondLevelDomains &&
            angular.isArray(options.defaultSecondLevelDomains) &&
            options.defaultSecondLevelDomains.length) {
          Mailcheck.defaultSecondLevelDomains = Mailcheck.defaultSecondLevelDomains.concat(options.defaultSecondLevelDomains);
        }

        // Extend Mailcheck's defaultTopLevelDomains
        if (options.defaultTopLevelDomains &&
            angular.isArray(options.defaultTopLevelDomains) &&
            options.defaultTopLevelDomains.length) {
          Mailcheck.defaultTopLevelDomains = Mailcheck.defaultTopLevelDomains.concat(options.defaultTopLevelDomains);
        }

        // Limit to input element of specific types
        var inputTypes = /text|email/i;
        var inputElm = el;

        if (el[0].nodeName !== 'INPUT') {
          inputElm = el.find('input');

          if (!inputElm || !inputElm.length) {
            throw new Error('Could not find text or email input element.');
          }
        }

        if (!inputTypes.test(inputElm.attr('type'))) {
          throw new Error('Invalid input type for angular-mailcheck: ' + attrs.type);
        }

        if (!scope.suggestionText) {
          scope.suggestionText = 'Did you mean';
        }

        if (!scope.nopeText) {
          scope.nopeText = 'Nope.';
        }

        scope.suggestion = false;
        scope.bugmenot = false;

        // Template HTML
        var templateHtml =
          '<div class="help-block mailcheck" ng-show="suggestion && !bugmenot">' +
            '{{ suggestionText }} ' +
            '<a ng-bind="suggestion" ng-click="useSuggestion()"></a>? ' +
            '<a ng-click="suggestion=false; bugmenot=true">{{ nopeText }}</a>' +
          '</div>';

        // Compiled template
        var template = $compile(templateHtml)(scope);

        el.after(template);

        inputElm
          .bind('input', function() {
            scope.suggestion = false;
          })
          .bind('blur', function() {
            inputElm.mailcheck(options);
          });

        scope.useSuggestion = function() {
          inputElm.val(scope.suggestion);
          scope.suggestion = false;
        };

      }
    };
  }

})();
