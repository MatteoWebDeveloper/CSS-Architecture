I am creating this document to study how abstract CSS to create flexible and modular app.

First we should solve the cascading and specificity problem.
When a CSS class should overwrite another one?
I grouped by 4 main abstraction and component can be subdivided with further 4 type of component classes:

1 vendor
2 object
3 component
  - component-x
  - component-x-forced-class
  - component-y-utility
  - component-y
4 trumps

.body { font-size: 12px; color:black; }

// bootstrap
.text-danger { color: red; }

.o_text-size-xs-1 {
  @media{$mobile} {
    font-size: 8px;
  }
}

// other component
.c_sidebar {
  &__hover-active {
    transition: color .5s linear;

    &:hover {
      color: white;
    }
  }
}

// text component
.c_text-header {
  font-family: sans-serif;
  font-size: 12px;
  &--default {

  }
  &--primary {
    color:gray;
  }
  &--secondary {
    color:white;
  }
}

// create set of animation text
.t_color-hover--primary {
  transition: color .4s linear;
  color:black;
  &:hover{
    color:white;
  }
}

// shame
.s_about-text-header {}

// trumps
.t_text-bold { font-weight: bold !important; }
.t_color-red { color:red !important; }
.t_text-uppercase {
  text-transform: uppercase !important;
}


simulate evolution of a design:

class="sans-serif  t_font-size-xs-1  t_color-red t_text-bold"

class="text-description  t_font-size-xs-1  t_color-red  t_text-bold"

class="text-description  text-description--primary  t_text-bold"

class="text-description  text-description--primary"

<a class="c_text-anchor  c_text-reset-a">text</a>
