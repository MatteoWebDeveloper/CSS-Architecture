# CSS Test
Depending what you have done on the CSS you have different test:


## Code review
CSS change must be code reviewed, so reviewer are aware of new changes/additions.


## Testing quality
Sometime review some CSS file, and check if the clarity of the css is right.
If It looks like a big mess you need to improve it :). Use the tools listed to asses if we have potential CSS code smell or inefficiency.
Tools:
* gulp css-lint,
* gulp css-unused,
* [qualityTool 1](http://cssstats.com/),
* [qualityTool 2](http://www.testmycss.com/)


## Testing specificity
Specificity change affect class composition. If you changed the location or specificity of a class, you need to test every place is used to make sure is not overwriting some properties.
It something you need to test manually because we cannot automatically test every composition combination.
In theory if the architecture has the right code organization, you do not have the need to change specificity of a class.
In general change the nature of a certain class is dangerous and it require testing.
Tools:
* [specicTool 1](https://jonassebastianohlsson.com/specificity-graph/),
* [specicTool 2](https://decadecity.net/sprue/css-specificity-graph)


## Testing deprecation
'gulp css-deprecation' is gulp task which check a list of css classes deprecated. If it finds one will output the message on the console specifying .
Tools:
* gulp css-deprecation (is a task)


## Visual Regression Test
The purpose of this test is to check every single UI component has kept is visual integrity.
The test should check a list of UI component but we can have special test to check chuck of UI if they are particular important for the business.

Node: This test does not check specificity/composition problem. That kind of problem need to be checked manually. Use visual regression test as a kind of unit test.

Tools:
* BackStopJs

Instructions:
this command create list of image reference
> (node_modules/backstopjs/; gulp reference)

this task is comparing your reference with the current UI
> (node_modules/backstopjs/; gulp test)


## Css Visual Regression test options:
* [Backstopjs](https://github.com/garris/BackstopJS)
* [PhantomCSS](https://github.com/Huddle/PhantomCSS)
* [Success](http://succss.ifzenelse.net/index.html)
* [CSS Critic](https://github.com/cburgmer/csscritic)