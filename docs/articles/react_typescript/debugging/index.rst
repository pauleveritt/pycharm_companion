.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Work smart by developing with a visual debugger. This lesson shows debugging tests directly in the IDE, was well as debugging UIs in Chrome.
    is_pro: True
    references:
        author:
            - pauleveritt

=========
Debugging
=========

Prerequisites
=============

- nodejs debugging

- chrome debugging

- Project Setup

- Previous step's run config

Steps
=====

#. Stop the watching test runner

#. Edit the test to have const a = 1, b = 2, expect(a).toEqual(2)

#. Set a breakpoint in the test

#. Run under the debugger

#. Inspect what is going on in the test, step, etc.

#. Clear breakpoint, set a breakpoint in component's render, stop there

#. ``this`` is an App instance

What Happened
=============

- One reason TDD and thus small components is so enticing...debug in Node
  instead of browser

See Also
========

