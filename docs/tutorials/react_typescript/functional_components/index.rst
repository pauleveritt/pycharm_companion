.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 5m04s
    excerpt: React builds UIs as a tree of components. See how to make stateless functional component correctly with TypeScript.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

=====================
Functional Components
=====================

Prerequisites
=============

Steps
=====

#. Clean out the const in first test.

#. Extract ``<h1>`` to export const Hello = () => <h1>Hello React</h1>;

#. Duplicate the second test and change it to Hello

#. Fix the second test to find <Hello> and .toBeTruthy()

#. Show navigation to/from component, find usages, rename component

#. Move it to Hello.tsx, move the logo import (we'll fix that later)

#. Back in App.tsx, quick fix the import, undo, show autocomplete then
   quick fix

#. Leave the logo in place for now

#. View in browser

What Happened
=============

See Also
========

