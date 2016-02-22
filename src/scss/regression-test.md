#Css Regression test options:
* [Backstopjs](https://github.com/garris/BackstopJS)
* [PhantomCSS](https://github.com/Huddle/PhantomCSS)
* [Success](http://succss.ifzenelse.net/index.html)
* [CSS Critic](https://github.com/cburgmer/csscritic)

Test indipendent UI components.

Possible pitfalls:
Classes composition, if specificity change check manually where is impacting.
Big UI containg a lot of classes.

Solution:
Create special test for important UI
