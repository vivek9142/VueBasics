# Working with Data inside of a Vue App

let's say we have our courseGoals stored in data properties.
We've got our coarseGoalA here, and we got our coarseGoalB here,
So, we got our two different goals here now. And instead of returning hardcoded strings here in outputGoal, I wanna output one of these two Goals, which are defined in data. This is very easy to do in Vue,
but it uses a special feature or a syntax,
which you should be aware of.

Let's say here, if the random number is smaller than dot five, I wanna return courseGoalA. Now we can't just write courseGoalA here.
This would not be valid JavaScript.With this code, JavaScript would look for a courseGoalA variable or constant, which it wouldn't find
because here courseGoalA is not a variable or constant,
it's a property of this object.

But instead we can use a syntax, which you probably wouldn't think that it works.You can use this.courseGoalA.Now, depending on your level of JavaScript knowledge,this might look very strange.

The this keyword is a core keyword in JavaScript, and it can be tricky, but in this context,this should not refer to this object here.

It basically takes all the data you return in this data object, which you return the data method,and it merges it into a global Vue instance object.So into your Vue app object, you could say.

So, these three data properties are available in a behind the scenes managed Vue app object.Your methods are also available there.
And they do have access to anything stored in that global object through the this keyword.And that's why in this custom method inside of methods,



