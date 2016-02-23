# CSS Test
Depending what you have done on the CSS you have different test:

# Code review
CSS change must be code review so that every changes is not going to impact the work of someone else.

# Testing specificity
Specificity change affect class composition. If you changed the location or specificity of a class, you need to test every place is used to make sure is not overwriting some properties.
It need to be a manual test because we cannot automatically test every composition combination.
In theory if the architecture has the right code organization, you should not have the need to change specificity of a class.

# Testing deprecation
'gulp css-deprecation' a gulp task which check a list of class deprecated, if it finds one will output the message on the console.
> gulp css-deprecation

# Css Visual Regression Test
The purpose of this test is to check every single UI component has kept is visual integrity.
The test should check a list of UI component but we can have special test to check chuck of UI if they are particular important for the business.

Node: This test does not check specificity/composition problem. That kind of problem need to be checked manually. Visual regression test has to be considerate as a kind of unit test.

instructions:
go to backstopjs module
> cd /node_modules/backstopjs/

this command create list of image reference
> gulp reference

this task is comparing your reference with the current UI
> gulp test


# Css Visual Regression test options:
* [Backstopjs](https://github.com/garris/BackstopJS)
* [PhantomCSS](https://github.com/Huddle/PhantomCSS)
* [Success](http://succss.ifzenelse.net/index.html)
* [CSS Critic](https://github.com/cburgmer/csscritic)