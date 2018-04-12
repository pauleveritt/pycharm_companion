.. tutorialstep::
    published: 2018-02-25 12:00
    excerpt: Use PyCharm to create and open the project with all dependencies, then see some of the machinery in action.
    is_pro: True
    duration: 2m34s
    references:
        author:
            - pauleveritt
        technology:
            - react

=============
Project Setup
=============

Pre-requisites
==============

- Typescript (compiler, finding tsconfig.conf, validated editing tsconf)

Steps
=====

#. Make sure NodeJS and create-react-app are installed on your system.

#. Open PyCharm Professional

#. In the New Project dialog, select React App with:

    - Location

    - Paths to node etc.

    - ``Scripts version:`` react-scripts-ts IMPORTANT

    - Open in new window

#. As a note, it will choose yarn if it is installed

#. It's generating and indexing. Why? Explain

#. Close the run window and expand the root folder

#. VCS -> Enable VCS Integration, choose Git

#. Select public, src, everything in root except .gitignore,
   then git add, git commit

#. Note: node_modules is marked as "library root" and is "Excluded"

Running
-------

#. Click the npm tool window (or open package.json and look at the run
   icons for scripts)

#. Run start, click on link in the window to open in browser

   .. note::

        Why the warnings about baseUrl? That's something from stuff
        that react-scripts-ts generated

#. Open src/App.tsx, make a small change, see update in window

#. In npm tool window, click ``build``, read output window
   for bundle size, look at build directory, mark build directory as
   Excluded

#. In tool window, click ``test``

#. Open src/App.test.tsx, make a small change adding
   ``expect(1).toBe(2);`` to the last line of the test, ignore the
   indentation warning, save

    .. note::

        Explain saving and difference for Jest watcher

#. see the update, point out that we'll be doing this smarter in (make a
   reference to other lesson)

Cleanup
-------

- baseUrl

- Change markup

- Remove import of logo

- Remove .svg and .css files

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

TODO
====

- Don't get git init
- Don't have the package manager chooser in prefs
- Seem to reformat TS code with double quotes instead of single