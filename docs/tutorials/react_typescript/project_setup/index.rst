.. tutorialstep::
    published: 2018-02-25 12:00
    excerpt: Use PyCharm to create and open the project with all dependencies,
        then see some of the IDE features in action.
    is_pro: True
    duration: 2m34s
    references:
        author:
            - pauleveritt
        technology:
            - react
            - nodejs
            - cra

=============
Project Setup
=============

Like all other frontend technologies, it's difficult to get React, TypeScript,
the tools, and the entire build environment configured in a new project.
Once you do, everything changes and you have to start over.

Many frameworks have recently built CLI (command-line interpreter) tools that
make those decisions for you, using best practices. They'll generate a
project with the right choices then update those choices as things evolve.

React's :ref:`technology-cra` takes care of this. And it's extensible
with scripts such as
`react-scripts-ts <https://github.com/wmonk/create-react-app-typescript>`_
which provides a :ref:`technology-typescript` version of the generated
project.

In this tutorial step, we use the IDE to generate the project, then look at
the results.

Code
====

The finished code for this tutorial step is
`on GitHub <https://github.com/pauleveritt/pycharm_companion/tree/master/docs/tutorials/react_typescript/project_setup>`_.

Pre-requisites
==============

*Here we'll link to tutorials that you're expected to do before this one,
as a way to keep each tutorial as focused as possible.*

- Typescript (compiler, finding tsconfig.conf, validated editing tsconf)

Creation
========

First we create a new React project.

#. Make sure NodeJS and create-react-app are installed on your system.

#. Open PyCharm Professional

#. In the New Project dialog, select ``React App`` as the project type.

#. Set ``Location`` set to the directory you'd like the project to be
   generated in.

#. Expand ``More Settings``.

#. Set ``Scripts version:`` to ``react-scripts-ts``

#. Click ``Create``.

#. In the next dialog, select ``Open in new window`` and click ``Ok``.

#. Wait a few minutes while ``create-react-app`` downloads a bunch of
   npm dependencies and generates the project.

#. Close the ``Run`` tool window and expand the root folder.

#. Put things in a local Git repository by selecting the menu
   ``VCS -> Enable VCS Integration`` then selecting ``Git``.

#. Select the folder/file entries for ``public``, ``src``, and everything in
   the root except ``.gitignore``, then ``Ctrl-V`` and ``Add to VCS``.

#. ``Ctrl-V | Commit`` to commit the starting point.

Running
=======

Let's run some React stuff.

#. Click the ``npm`` tool window (or open package.json and look at the run
   icons for scripts).

#. Double-click ``start`` and look in the opened browser window.

#. Open src/App.tsx, save a small change, and see the update in browser.

#. In the npm tool window, double-click ``build``, read output window
   for bundle size, right-click the new ``build`` directory, and
   ``Mark Directory As | Excluded``.

#. In tool window, double-click ``test``

#. Open src/App.test.tsx, make a small change adding
   ``expect(1).toBe(2);`` to the last line of the test, ignore the
   indentation warning, save.

#. See the update.

What Happened
=============

Before anything can happen, you have to install NodeJS on your system. Then,
you have to install :ref:`technology-cra` either "globally" or somewhere
that you can point the IDE to.

PyCharm Professional integrates with :ref:`technology-cra` to generate the
new project. The IDE lets you pass an argument to the generator for the
extra script to use. We want to use ``react-scripts-ts``, a mature "fork"
of :ref:`technology-cra` which changes the output to be React+TypeScript.

If ``yarn`` is installed, :ref:`technology-cra` will choose it as the
package manager and generate a yarn-oriented project. PyCharm Professional
will respect that decision.

It takes a while for :ref:`technology-cra` to download all the dependencies
then generate the file. This will be faster in some subsequent runs, as the
npm/yarn cache has many of the versions. Also, the IDE needs to index all
the downloaded software which can also take a number of seconds.

The ``node_modules`` directory is detected as a library root and marked as
"Excluded". This speeds up indexing by not having those files reindexed as
your code changes.

#. Note: node_modules is marked as "library root" and is "Excluded"

#. Why the warnings about baseUrl? That's something from stuff
   that react-scripts-ts generated

#. Explain saving and difference for Jest watcher


- Point to pre-requisites: npm, webpack and dev server

- The cra toolchain

- We will be using a real Jest run configuration type instead of running
  via npm run scripts

See Also
========

- https://basarat.gitbooks.io/typescript/content/
