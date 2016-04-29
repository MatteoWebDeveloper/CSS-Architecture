# Development procedure

UI library and design consolidation is a slow and gradual process.

## 1) Create section
When you start a new project you need a place to prototype quickly.
The best place for doing that is inside a section file:
```scss
// homepage.scss
.s_homepage-card {}
```
```html
<div class="panel text-center sans-serif color-red  s_homepage-card  t_text-bold"></div> // use section classes to prototype quickly
```
Location base class are in general a bad practice but are convenient when you need to prototype something quickly. The important thing is keep your classes in that location. Once you see a pattern in your code you can extract that part and move it to a more consolidate category (base, object, component, trump, ...).

## 2) Reuse trump and vendor classes
Another set of classes that help with the development are trump and bootstrap utilities classes. Are classes with a small amount of proprieties and create loose dependencies. This make the component easier to compose and transform.
```html
<div class="panel text-center sans-serif color-red  s_homepage-card  t_text-bold"></div> // use trump and bootstrap classes
```

## 3) Consolidate UI style
The last step is when you replace those low level classes (because they contain few proprieties) with something is now considerate a consolidate UI. Component classes can have variants but it is recommended to keep just a few of them, you can recognize them because they use a specific naming convention 'c_component--variation-name'.
```html
<div class="text-center  c_card  c_card--secondary   t_text-bold"></div> // consolidate component
```

It is important building css keep in mind the specificity of the classes.
I use single class selector and the properties are overwritten only because are positioned after other properties.
The code specificity is the following:

##### Lower specificity

* general
* base
* object
* component
    - component--variant
    - component__element
    - component__element--variant
    - component.is-state
* trump

##### Higher specificity

for instance if you have the following composition:
```scss
.text-center { text-align: center } // bootstrap class
.c_card {                           // component class
    text-align: left;
    font-weight: normal;
}
.t_text-bold {                      // trump class
    font-weight: bold !important; }
```
```html
<div class="text-center  c_card  c_card--secondary   t_text-bold"></div> // consolidate component
```
Bootstrap class is overwritten by the component,
the component class is overwritten by the trump class.

##### Composition class segmentation and combination good practice
'{1}' = just one component type
'{+}'  = more than 1 component type
```html
<div class="generic{+}  trump{+}"></div>               // for instance bootstrap classes

<div class="base{?}"></div>                            // usually reset

<div class="object{1}  trump{+}"></div>                // usually you do not need trump on object

<div class="object{1}  component{1}  trump{+}"></div>  // usually object wrap other component

<div class="object{1}  section{1}  trump{+}"></div>    // section is similar to component is better keep them separated

<div class="trump{+}"></div>                           // just utility
```