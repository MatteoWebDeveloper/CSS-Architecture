# CSS Architecture

## Principles:
* create patterns
* decoupling
* single responsibility
* separation of concerns
* encapsulation


## CSS Architecture base
CSS main architecture, style guide proposal:
http://cssguidelin.es/


## Code organisation
I use ITCSS methodology
[check Table of contents](http://cssguidelin.es/#table-of-contents)
```scss
* Setting    =>  $brand-color: red;                 // Config, theme setting, brand color
* Tool       =>  @mixin name-mixin () {}            // Global available tools like function, mixin
* Generic    =>  .vendor                            // Vendor dependencies
* Base       =>  .h1                                // if base is not already defined, can contain base reset
+ Extension  =>  .e_alert {}                        // Vendor class extension
* Object     =>  .o_media {}                        // OOCSS, Design Pattern, No cosmetics, Agnostically named
* Component  =>  .c_card {} .c_card__badge {}       // Designed pieces of UI
+ Section    =>  .s_product-component {}            // refactor classes and website section specific classes
* Trump      =>  .t_text-center { !important; }     // Last resort, only affect one specific piece of DOM
```


## CSS Class Naming convention
prefix + BEM
```sass
.{group}_{file-namespace-block}
//like:
.c_navigation
```


## SASS variables naming convention
```sass
// setting/filename.scss
$filename__prop-name: 'value';     // global variable

// component/filename.scss
$c_filename__variable: 'value';    // public variable use only inside your file
.c_filename {                      // block element
    $variable: 'value';            // scoped variable
}
```


## Structure of CSS classes
CSS Classes shall be mobile first and give the name of the css file. It is a good practise add comments with html example

vanilla CSS
```css
.c_component {}                     /* block */
.c_component--modifier {}           /* block modifier */
.c_component.is-active {}           /* block state */
.c_component__elment {}             /* element */
.c_component__elment--modifier {}   /* element modifier */
.c_component__elment.is-active {}   /* element state */

@media (min-width:730px and max-width:1024px) {}
@media (min-width:1025px) {}
@media print {}
@supports ((prop: value)) {}
```

SCSS
```sass
// setting/theme.scss
$variable: 'value';                // global variable

// setting/screen.scss
$screen__media_tablet:             "(min-width:730px and max-width:1024px;)";
$screen__media_tablet_desktop:     "(min-width:730px)";
$screen__media_desktop:            "(min-width:1025px)";

// component/nav.scss
/*
<div class="c_component c_component--modifier">
    <div class="c_component__elment"></div>
    <div class="c_component__elment c_component__elment--modifier"></div>
    <div class="c_component__elment is-active"></div> // triggered by js
</div>
*/
$c_component__variable: 'value';   // public variable
.c_component {                     // block
    $variable: 'value';            // local variable

    &--modifier {}                 // block modifier
    &.is-active {}                 // block state

    &__elment {                    // element
        &--modifier {}             // element modifier
        &.is-active {}             // element state
    }

    @media #{$screen__media_tablet} {
        $variable: 'value';  // local media variable
    }
    @media #{$screen__media_desktop} {}
    @media print {}
    @supports ((prop: value)) {}
}
```

## Example of html structure
```html
<body>
<div class="container"> <!-- bootstrap class -->

    <div class="o_grid"> <!-- object class -->
        <div class="o_grid__col"> <!-- object class -->

            <div class="o_grid__cell">
                <div class="l_side-body__side">

                    <div class="c_sidebar  c_sidebar--dark"> <!-- component class -->
                        sidebar content
                    </div>

                </div>
                <div class="l_side-body__body">
                    <p class="t_text-bold">Body content</p> <!-- trump class-->
                </div>
            </div>

        <div>
    <div>

</div>
</body>
```

## Resources and inspirations:
* [Docs CSS Guide line](http://cssguidelin.es/)
* [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)
* [BEM](http://getbem.com/)
* [ECSS](http://ecss.io/)
* [Article BEM name spacing conventions](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
* [Video Organizing CSS with OOCSS, SMACSS, and BEM](https://www.youtube.com/watch?v=IKFq2cSbQ4Q)
* [Slides Organizing CSS with OOCSS, SMACSS, and BEM](https://speakerdeck.com/mattstauffer/organizing-css-oocss-smacss-and-bem)

