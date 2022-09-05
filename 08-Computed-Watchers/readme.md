# Computed Properties

if the counter changes Vue sees that in this paragraph we're using to counter
and hence it needs to well update this part here on the real page, that's exactly why we use Vue it updates the page for us automatically. The problem is if we call a method like this here this method will also be re-executed by Vue, whenever anything on the page changes,
because Vue can't know what this method does. It doesn't know wherever,
maybe the counter gets used in there.Well, if the counter changed,
and this method maybe uses the counter this method should be re-executed, right?

Well, and for that reason Vue goes ahead, and re-executes any method
you're using anywhere in your HTML code between curly braces, or with the bind, or with the HTML,

Well, you could of course put your code in here.Name plus Schwartz Muller, for example,
you could put it in here. And if you do that, you avoid this problem. Now view is able to see what's getting used here and it will only updated this paragraph and only reevaluated if well,
in this case name changed and output full name has never called and therefore will never be called by view But now we have more logic in our HTML code
and that's again, not good as you learned.

So there is a third nice feature we can use, computed properties. Computed properties are essentially like methods with one important difference view will be aware of their dependencies and only reexecute them if one of the dependencies changed. Computed is the third big configuration option we learn about for the app we created. The first one was data.
The second one was methods.You can add it anywhere in this config object

# Watchers

a watcher is basically a function you can tell Vue to execute,
when one of its dependencies changed. Okay, that sounds just like computed properties,
doesn't it? Well, indeed you can use Watchers instead of computed properties
and here's how that would work,

Now we have two watchers to reflect the full name, which is managed with two inputs.
And yes, this works, but it's a lot of code, especially if we compare it to the computed property alternative. Let me comment out the full name, data property, and let's also comment out the watchers. We could remove them, but I'll keep them around for reference. And let's bring back the computed property, to see how much easier it is with a computed property.
There if we want to use two dependencies, we simply reference two dependencies like this,
pointing at this last name. And now we got the desired behavior with less code.

Watchers are powerful, if you have a different kind of intent in mind. Let's come back to our counter here. Let's say when the counter exceeds 50, anything like that,
we wanna reset it. That's the type of task where a watcher shines. We wanna change counter when something happens so we can watch counter and get its latest value,
to then check if value, so the value of the counter is greater than 50, and if that's the case, we set this.counter = 0.

That's the kind of thing where watchers can be helpful. If you wanna run logic, that may be all the updates a data property, but which shouldn't always do that.for example, here, I only want to set the counter to zero, if we exceed 50. A computed property would probably not be the best alternative here for this kind of task. You can try solving this with a computed property and you'll quickly see that you'll face some problems here.
With a watcher, this is easy though. If we save that and now reload, we can change the counter, but you'll see if I press add 10 again and hence who would exceed 50 it's back to zero and starts again. That's the kind of task where a watcher can shine


If you wanna do that execute code, because something changed, then watchers can be helpful.
If you just want to calculate some output value dynamically, computed properties are your friend.