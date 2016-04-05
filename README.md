# Angular Mailcheck

Angular wrapper for [Mailcheck.js](https://github.com/mailcheck/mailcheck/)

## Install

```shell
bower install angular-mailcheck
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/mailcheck/src/mailcheck.js"></script>
<script src="/bower_components/angular-mailcheck/angular-mailcheck.js"></script>
```

Then add `mailcheck` as a dependency for your app:

The module requires jQuery to work.

```javascript
angular.module('myApp', ['angular-mailcheck']);
```

## Usage

```html
<input type="email" mailcheck>
```

You can add suggestion and nope texts as strings:

```
<input type="email" mailcheck mailcheck-suggestion-text="'Did you mean:'" mailcheck-nope-text="'Nope'">
```

...or as scope variables:

```
<input type="email" mailcheck mailcheck-suggestion-text="suggestionText" mailcheck-nope-text="nopeText">
```

...or use [Angular-Translate](https://angular-translate.github.io/):

```
<input type="email" mailcheck mailcheck-suggestion-text="'EMAIL_SUGGESTION_OFFER' | translate" mailcheck-nope-text="'EMAIL_SUGGESTION_PASS' | translate">
```

Directive will insert `<div class="help-block mailcheck"></div>` after the input tag and toggle it visible with ng-show if Mailcheck has a suggestion.

`help-block` class happens to be in use at [Bootstrap](http://getbootstrap.com/css/#forms) so it should look pretty neat out of box.

## Develop

Minify js by running `gulp` (after installing stuff with `npm install`, that is).

## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
