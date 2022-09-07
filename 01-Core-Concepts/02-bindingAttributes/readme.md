## Binding Attributes

So clearly Vue did not replace vueLink with string with the actual value stored in vueLink,as it did it before for this course goal part.
Now why did Vue not do that?

We are inside of the Vue controlled HTML code. So Vue should detect this.Well, the reason is simple.
This double curly brace syntax is only available between opening and closing HTML tags, you could say. So anywhere, where you would, well, output actual content.If you wanna pass in a dynamic value to an attribute,like here, where I wanna set the value of the ref attribute,
dynamically with help of Vue, we need to use a different syntax, which thankfully is available though.
And that's the Vue binding syntax.

For that, we use a so called vue directive, which is simply an extra instruction we add in the HTML code. And we can use such directives on HTML elements, like on this anchor element.

The directive we need here is v-bind.

v-bind tells Vue to bind, so to set,the value of something,
and the "of something" part basically just means of an attribute on an HTML element. And to let Vue know which attribute's value to set,we add a colon after v-bind, and then the attribute name, in this case ref, and this is the full syntax which vue will understand,
to dynamically set a value of an HTML element attribute,

Syntax of binding Attributes is ***{{ v-bind-attributeName }}***



