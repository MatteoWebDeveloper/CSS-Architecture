# CSS Architecture

## Principles:
* patterns
* decoupling
* single responsibility
* separation of concerns
* encapsulation

## Code organisation
* index.scss { load dependencies }

---------------------------------------

* vars.scss { global variables }
* utils.scss ( not sure is a good idea ? )

---------------------------------------

* base.scss { create base for your general element, no class allowed }
* layout.scss { `.l-filename-block` }
* modules.scss { `.m-filename-block` }
* state.scss ( optional? ) { `.is-statename` }

---------------------------------------

* theme.sass ( optional )
* shame.sass { all the code need to be refactor goes here, contain really specific code }

## Good Patterns
* use preprocessor __Sass__ or __Less__
* use __SMACSS__ principles to organise and split your styles code
* use __BEM__ naming convention and include sass filename as part of the namespace
* flat selector { provide solid architecture and even better performance }
* classes should only concern within their element and they __should not interfere with the parent element__ { that's why box-sizing: border-box is great }
* classes should include __state classes__ private and public __variables__ and __medias__ definition { tablet, desktop, print }
* use _@extend_
* code should be self documented
* order css rules alphebetically { minor improvment }
* create a single page example { showing every components, create awareness of your styles }
* Work with designer is a key factor to create reusable design and reusable css, think in term of components instead of web page.
* use gulp __sourcemap__, _autoprefix_ and _minify_

## Bad Patterns
* use id and multi classes
* css specificity are evil, make your architecture fragile
* mixin { create duplicate code, extend is better }

## Note:
!At the time of writing I am not sure to create a file just for state.scss as I think is more scoped if defined inside a specific module.
Good/bad pattern are applied to style concerns. You can use id, and state classes if used in javascript concern scenario.

## Resources:
* [Organizing CSS with OOCSS, SMACSS, and BEM](https://www.youtube.com/watch?v=IKFq2cSbQ4Q) 
* [SMACSS ](https://smacss.com/)
* [BEM name spacing conventions](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) 
