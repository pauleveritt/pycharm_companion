.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Make a simple class component with local counter state.
    is_pro: True
    references:
        author:
            - pauleveritt

===========
Class State
===========

Prerequisites
=============

Steps
=====

We want to build a counter component which keeps track of clicks.

#. The Counter needs some component state. Let's write the interface first
   this time::

    interface CounterState {
        count: number;
    }

#. Now the class definition and constructor can setup state::

    class Counter extends React.Component<CounterProps, CounterState> {
        constructor(props: CounterProps) {
            super(props);
            this.state = {
                count: 1
            };
        }

#. Have the span now use this state::

    <span>{this.state.count}</span>

    The tests still pass, so we're in good shape.

#. View in browser.

What Happened
=============

See Also
========

