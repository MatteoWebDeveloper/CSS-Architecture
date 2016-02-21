UI library and design consolidation is a slow and gradual process.

1) When you start a new project you need a place to prototype quickly.
The best place for doing that is inside a section file:
```scss
// homepage.scss
.s_homepage-card {}
```
```html
<div class="panel text-center sans-serif color-red  s_homepage-card  t_text-bold"></div> // use section classes to prototype quickly
```
location classes are in general a bad practice for this reason are just a temporary place to develop and evolve your code. Once you see a pattern in your code you can extract that part and move it to a more consolidate category (base, object, component, trump, ...).

2) Another set of classes that help with the development are trump and bootstrap utilities classes. Are classes with a small amount of proprieties and create loose dependencies. This make the component easier to compose and transform.
```html
<div class="panel text-center sans-serif color-red  s_homepage-card  t_text-bold"></div> // use trump and bootstrap classes
```

3) The final step is when you replace those low level classes (because they contain few proprieties) with something is now considerate a consolidate UI. Component can have variants but it is recommended to keep just a few of them. You can recognize them because they use a specific naming convention 's_component--variation-name'.
```html
<div class="text-center  c_card  c_card--secondary   t_text-bold"></div> // consolidate component
```

Another important aspect of building css is to keep in mind the specificity of the classes.
I use single class selector and the properties are overwritten only because are positioned after other properties.
The code specificity is the following:


* general
* base
* object
* component
  component--variant
    - component__element
    - component__element--variant
    - component.is-state
* trump

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
Bootstrap class will be overwritten by the component,
the component will be overwritten by the trump.