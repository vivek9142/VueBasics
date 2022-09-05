# Outputting Raw HTML Content with v-html

Let's say one of the two goals, let's say course goal B
is actually not just a simple string like this, but this is some HTML code. And this could be a scenario you have in application.
Where you, for example, fetched a data and it should be output from a database and from there you're getting some structured HTML code.

Now if you use HTML elements in this string, and you output this with interpolation. So with the double curly braces, you'll see that the HTML elements are just output as text. So they are not interpreted as HTML.


And that is the v-html directive. We saw v-bind before.
V-bind can be used to bind, so to set the values of attributes.
With v-html, you set the content between opening and closing text
of an element, but you now tell Vue that the content should be interpreted as HTML.

So it should not be output as text as it is with double curly braces.
And therefore you no longer use double curly braces here,
but instead, the value you pass to v-html between the double quotes here would be coarse goal B for example, or also if you want it to,
the result of calling output goal. This also works.


Now chances are, you'll not need it too often, and you should definitely not use it as a default. Because you can introduce security issues with that because you basically circumvent the built in cross site scripting attack protection you have with the double curly braces. But if you know what you're doing, and you need to output something as HTML, the v-html directive is your friend.