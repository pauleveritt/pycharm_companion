.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: React builds UIs as a tree of components. See how to make stateful and stateless components correctly with TypeScript.
    is_pro: True
    references:
        author:
            - pauleveritt

==========
Components
==========

Prerequisites
=============

Steps
=====

#. Extract header to Header

#. Change tsconfig.json to allow no implicit any (notice type checking in
   .json file)

#. No more warning

#. Show navigation to/from component, autocomplete of logo, find usages,
   rename component

#. Change to React.SFC<{}>

#. Move it to Header.tsx, move the logo import (we'll fix that later)

#. Back in App.tsx, quick fix the import, undo, show autocomplete then
   quick fix

#. Leave the logo in place for now

#. View in browser

#. Write a test for <Header> and run it

What Happened
=============

See Also
========

