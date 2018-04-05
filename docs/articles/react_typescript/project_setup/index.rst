.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Use PyCharm to create and open the project with all dependencies, then see some of the machinery in action.
    is_pro: True
    references:
        author:
            - pauleveritt

=============
Project Setup
=============

Pre-requisites
==============

- Typescript (compiler, finding tsconfig.conf, validated editing tsconf)

Steps
=====

#. Open PyCharm Professional

#. React App

    - Location

    - Paths to node etc.

    - ``Scripts version:`` react-scripts-ts IMPORTANT

    - Open in new window

#. It's generating and indexing. Why? Explain

#. Git init

Running
=======

#. Open package.json and look at the run icons for scripts

#. Run start, click on link in the window to open in browser

#. Note that it chose npm/yarn, look at the preference

#. Open src/App.tsx, make a small change, see update in window

#. Back to package.json with Cmd-E

#. Click green triangle beside build, choose run, read output window
   for bundle size, look at build directory, mark build directory as
   Excluded

#. Open src/App.test.tsx, make a small change, see the update, point out
   that we'll be doing this smarter in (make a reference to other lesson)

IDE Features
============

- Code formatting

- Quick fixes e.g. using JSX without importing React

- Navigation

- Auto-import

- More in each lesson

What Happened
=============

- Point to pre-requisites: npm, webpack and dev server

- The cra toolchain

See Also
========

- https://basarat.gitbooks.io/typescript/content/