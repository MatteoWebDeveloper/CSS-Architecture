# CSS Architecture

## Principles:
* create patterns
* decoupling
* single responsibility
* separation of concerns
* encapsulation

## Code organisation
* index.scss { load dependencies }

---------------------------------------

* theme.sass { contains only variables `$t-namevariable` }

---------------------------------------

* vendor.scss { vendor }
* base.scss { create base for your general element, no class allowed }
  * normalize.css, general mixin-in and utils classes { `.b-namelayout-BEM` }
* layouts.scss { load layouts dependencies }
  * layout utils classes
  * namelayout.scss { `.l-namelayout-BEM` and `.is-statename` }
* components.scss { load modules dependencies }
  * namecomponent.scss { `.c-namecomponent-BEM` and `.is-statename` }

---------------------------------------

* shame.sass { when you start a new project write everything here and during the devolpment refactor the component are reusable. all the code that need to be refactor goes here. }

## Good Patterns
* use preprocessor __Sass__ or __Less__
* use __SMACSS__ principles to organise and split your styles code
* mobile first
* use __BEM__ naming convention and include sass filename as part of the namespace { .c_filename__elm }
* flat selector { provide solid architecture and even better performance }
* classes should only concern within their element and they __should not interfere with the parent element__ { that's why box-sizing: border-box is great }
* classes should include __state classes__ private and public __variables__ and __medias__ definition { tablet, desktop, print }
* use __@extend__ and __silent classes__
* keep inheritance with @extend at one level
* use @mixin when you want create a list of custom properties
* use @extend only if you are going to apply those css rules to the component sharing the same concern
* in your html and css separete structure from skin
* use index.scss to load dependencies
* code should be self documented
* order css rules alphebetically { minor improvment }
* create a single page example { showing every components, create awareness of your styles }
* When you use base utils classes like .padding-right should use a set of dimensions. Like $gutter-base: 5px; generate css .padding-right-{n} { size=> 5, 10, 15, 20 ... } and should use media query too.
* Work with designer is a key factor to create reusable design and reusable css, think in term of components instead of web page.
* use gulp __sourcemap__, _autoprefix_ and _minify_

## Bad Patterns
* you can style general elements (a p h1 ...) but you cannot rely on those selector because html elements purpose is to give meaningful content for the search engine. When you are applying a class to those element you should reset upon those style or even better apply the class on a non semantic element: html=> p span.c_text-description - css=> .c_text-description { css styles }
* do not overuse gris classes, when the container is smaller than the mobile size is not worth it
* separate state.scss
* avoid id to styles and long selector
* share the same class or attribute
* css tight to the strtucture of the html ( .footer a.component ) are fragile
* css specificity are evil, make your architecture fragile, use ITCSS and a component base approch

## Note:
Good/bad pattern are applied to style concerns. You can use id, and state classes if used in javascript concern scenario.
Comparing SMACSS I removed states.

## Resources:
* [Video Organizing CSS with OOCSS, SMACSS, and BEM](https://www.youtube.com/watch?v=IKFq2cSbQ4Q) 
* [Slides Organizing CSS with OOCSS, SMACSS, and BEM]https://speakerdeck.com/mattstauffer/organizing-css-oocss-smacss-and-bem
* [Docs SMACSS](https://smacss.com/)
* [Article BEM name spacing conventions](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) 
* [Slide IICSS solve specificity problems](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)
* [Docs CSS Guide line](http://cssguidelin.es/)
