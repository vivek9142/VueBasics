# Data Binding + Event Binding = Two-Way Binding

let's say our goal is to have another button maybe here below the input where we say resetInput.And the buttons should do what the name implies. It should reset the input in, well, the input element.

Now we could try to get access to the input through JavaScript with document.querySelector, for example,get access to the input like this,access to value property and set it to an empty string.This might actually work, but it's very hacky.We're not using Vue to then fall back to such explicit JavaScript instructions.That's not the idea behind using Vue.

what we can do is set the v-bind:value in input and update it through function. add add v-on:click attribute to set it to update it later on. So now we're able to do it.

I showed this before, how we could work with two values,
confirmed input and irregular input, but that's not what this is about Instead, what this is about is about the fact that
this is a pattern you could need in some occasions. You might have inputs where you don't just want to get the value the user entered,
but where you also want to set the value of the input so that you, for example, can reset it with a button or any other logic you have on your page.


Vue has a shortcut for this you could say. It has a special built in directive which simplifies this. If you bind the value and listen to input changes on input, you can get rid of all of that.
So both of the value binding and the input event listening, get rid of both and instead add a new directive on the input, the v-model directive.And this v-model directive now simply wants the data property it should manage for you, so in our case, the name property.

The name property now is managed by Vue such that it's updated on the input event and the name properties value is then sent back
into the input element.

So v-model is simply just a shortcut for v-bind value and v-on input, v-model is just a shortcut for this.

we are listening to an event coming out of the input element you could say to the input event.
And at the same time, we're writing the value back to the input element through its value attribute, through its value property. That's why it's called two-way binding
because we communicate in both directions.


