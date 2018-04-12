.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 4m18s
    excerpt: Work smart by developing with a visual debugger. This lesson shows debugging tests directly in the IDE, was well as debugging UIs in Chrome.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

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

#. Let's make the displayed label into something that can be overridden in
   subclasses (primitive alternative to props)

#. Add:

   .. code-block:: jsx

        label() {
            return 'Hello React';
        }

#. Change <h1> to {this.label()} using autocompletion

#. Save, works fine, but with a soft warning, quick fix (and note it rewrites
   ``this.`` to ``App.``)

#. Let's make this parameterize, pass in name, quick-fix the string to be
   a template string, `Hello ${name}`, then pass in 'React'

#. Tests pass, but TS is mad about missing typing

#. Add ``:number`` and show it breaking when a number is passed, change to
   string

#. Let's poke at that in the debugger, in a test. First, something easy.

#. Stop the watching test runner

#. Edit the test to have const a = 1, e = 2, expect(a).toEqual(e)...duh,
   why is this broken? Want to explore interactively

#. Set a breakpoint in the test on const a

#. Run under the debugger

#. Inspect what is going on in the test, step, etc.

#. Clear breakpoint, set a breakpoint in component's render, stop there

#. ``this`` is an App instance

#. Put cursor in ``static label`` and run to cursor

#. Stop debugger, resume normal running

#. Write a test for the label method:

   .. code-block:: jsx

    it('have a label method', () => {
        expect(App.label('React')).toBe('Hello React');
    });



What Happened
=============

- One reason TDD and thus small components is so enticing...debug in Node
  instead of browser

See Also
========

TODO
====

- WebStorm doesn't like setting breakpoints in JSX