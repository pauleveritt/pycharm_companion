.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 4m59s
    excerpt: Make a very simple class component with local counter state, then make an interface for that state.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

============================================
Model Class State With TypeScript Interfaces
============================================

Prerequisites
=============

Steps
=====

We want to build a counter component which keeps track of clicks.

#. The Counter needs some component state. Let's write the interface first
   this time:

   .. code-block:: typescript

    interface CounterState {
        count: number;
    }

#. Now the class definition and constructor can setup state:

   .. code-block:: typescript

    class Counter extends React.Component<CounterProps, CounterState> {
        constructor(props: CounterProps) {
            super(props);
            this.state = {
                count: 1
            };
        }

#. Have the span now use this state:

   .. code-block:: html

    <span>{this.state.count}</span>

    The tests still pass, so we're in good shape.

#. View in browser.

What Happened
=============

See Also
========

