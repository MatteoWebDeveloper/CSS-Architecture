# CSS Test
Depending what you have done on the CSS you have different test:


## Code review
CSS changes must be code reviewed, so reviewer are aware of new changes/additions.


## Testing quality
Sometime check a couple of CSS files, If It is looks like an explosion of classes without any sense, it means you need to tidy up and improve your code. The following tools help asses if you have invalid css, unused classes and potential CSS code smell or inefficiency.
Tools:
* gulp css-lint,
* gulp css-unused,
* [qualityTool 1](http://cssstats.com/),
* [qualityTool 2](http://www.testmycss.com/)


## Testing specificity
Specificity is an important problem to tackle in CSS.
It is important to have a good code organization and single classes to avoid painful specificity war! Single classes help reuse other classes and have a sane css inheritance. Use the tool listed to sort it out specificity peak.

Specificity change affect class composition.
If you changed the location or specificity of a class, you need to test every place is used to make sure is not overwriting some properties. It is something you have to test manually because we cannot automatically test every possible composition combination.

If the code base has the right architecture, you do not need to rise CSS specificity of a certain class.

Tools:
* [specicTool 1](https://jonassebastianohlsson.com/specificity-graph/),
* [specicTool 2](https://decadecity.net/sprue/css-specificity-graph)


## Testing deprecation
'gulp css-deprecation' is gulp task which check a collection of css classes deprecated. If it finds one will output the message on the console specifying where the problem is and suggesting a solution.
Tools:
* gulp css-deprecation (is a task)


## Visual Regression Test
The purpose of this test is to check every single UI component has kept is visual integrity.
The test should check a list of UI but we can have special test for important block of UI components if they are important for the business.

Note: This test does not check specificity/composition problem. That kind of problem need to be checked manually. Use visual regression test as a kind of unit test.

Tools:
* BackStopJs

Instructions:
this command create list of image reference
> (node_modules/backstopjs/; gulp reference)

this task is comparing your reference with the current UI
> (node_modules/backstopjs/; gulp test)