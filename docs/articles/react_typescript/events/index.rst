.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Add event handling to a stateful class component.
    is_pro: True
    references:
        author:
            - pauleveritt

======
Events
======

Prerequisites
=============

Steps
=====

We want to build a counter component which keeps track of clicks.

#. Start writing the HTML inline::

     <div onClick={() => alert('Clicked!')}><span>10</span></div>

#. Click in browser

#. Highlight and cut, then::

      class Counter extends React.Component {
        render() {
            return (

#. Show it working in the browser.

#. Add a prop for a label to show the count, make it optional with ? and
   put || 'Count: ' in the span

#. Extract to an interface for props

#. Make an interface for CounterState and add to generic

#. Make a constructor to setup the state

#. Replace the <span> value with this.state.count

#. Replace the onClick handler with::

       <div onClick={() => this.setState({count: this.state.count + 1})}>

#. Why is the arrow function needed? Try without it.

#. Use refactor to make the method::

    private increment() {
        this.setState({count: this.state.count + 1});
    }

#. Use a prop as the starting value....add starter?: number to the props

#. Set initial state with count: this.props.starter || 0

#. Show autocomplete on <Counter>

#. Show mistakenly doing <Counter starter="10"/>

#. Shift click to increment by 10

#. onClick={(event) => this.increment(event)}

#. increment(event: React.MouseEvent<HTMLElement>)

#. Mistake for const inc = 10 ? event.shiftKey : 1;

#. Partial correction: const inc: number = 10 ? event.shiftKey : 1;

#. Full correction: const inc: number = event.shiftKey ? 10 : 1;

#. Make the interface less browser-y by moving the event unpacking to the
   onClick handler, thus passing only event.shiftKey::

    <div onClick={(event: React.MouseEvent<HTMLElement>) => this.increment(event.shiftKey)}>

#. Even simpler, spread operator::

    <div onClick={({shiftKey}) => this.increment(shiftKey)}>

#. Extract to a separate file

#. Write a test...requires changing private


- Can also do passed-in functions that become part of interface (and take
  arguments)

What Happened
=============

See Also
========

