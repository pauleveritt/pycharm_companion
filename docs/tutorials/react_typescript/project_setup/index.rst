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

Project Creation
================

Start by running in ``create-react-app`` command, passing the argument to
use ``react-scripts-ts``:

.. code-block:: bash

    $ create-react-app my-app --scripts-version=react-scripts-ts
    $ cd my-app/
    $ npm start

The ``react-scripts-ts`` has good documentation about this process. As a
note, the first command will take a while.

If you're in PyCharm Professional, there's UI integration for this. Create
a new project, select ``React App`` as the project type, and make sure
to expand ``More Settings``. There you can supply ``Scripts version:``
as ``react-scripts-ts``.

You now have a working React+TypeScript project, toolchain, and hello-world
style app. It's actually quite an achievement. Assembling all of this, and
*keeping* it assembled, is an incredible effort. The ``create-react-app``
and ``react-scripts-ts`` have shifted that off your shoulders, onto theirs.
Trust me, it's a big deal.

Show Me a Page
==============

Let's see this React+TypeScript page in our browser. npm run scripts make
it easy to discover commands that are common to a project. The most common?
Starting the dev server, which compiles the universe, serves a page over
HTTP, and helpfully opens your browser:

.. code-block:: bash

    $ npm run-script start

This dev server is watching for changes. If you edit a file, it will
regenerate the universe and tell the page to reload. Open ``src/App.tsx``
and change ``Welcome to React`` to ``Welcome to React TypeScript``, then
save. Your terminal shows a recompile and your browser updates.

PyCharm Professional puts a nice UI on this. Click on the ``npm`` tool icon
(usually on the left) and double click ``start`` in the listing of run
scripts. You'll get a run window at the bottom with a nice UI for showing
output and restarting. Alternatively, open ``package.json`` and click the
green play icon in the gutter by the run scripts.

Production Build
================

That's great for development, but for production, we need files on disk,
shrunk as small as possible. There's a lot of complexity behind this, but
:ref:`technology-cra` has hidden it behind an npm run script:

.. code-block:: bash

    $ npm run-script build

This generates output into a ``build`` directory. The output is
self-contained, including even an ``index.html`` file. You can copy it to a
static hosting site as-is.

Running this is easy in PyCharm Professional: just click on ``build`` in the
npm tool window. As an optimization, right-click on the new ``build``
directory and ``Mark Directory As | Excluded``. This prevents the IDE from
indexing the contents of that directory, which you don't need during
development.

This Is Only a Test
===================

Projects generated from :ref:`technology-cra` are also wired for testing:
dependencies, configuration files, and sample tests. We'll see more later,
but for now, let's run the tests. Unsurprisingly, it's similar to the above:

.. code-block:: bash

    $ npm run-script test

This uses the :ref:`technology-jest` test runner. At the time of this writing,
there's an issue with test running when the project isn't under version
control. Let's fix that by changing the npm run script. Edit ``package.json``
and change the ``test`` script to:

.. code-block:: bash

    "test": "react-scripts-ts test --env=jsdom --watchAll",

Now run the tests:

.. code-block:: bash

    $ npm run-script test

The tests auto-run as you edit. To see this in action, open
``src/App.test.tsx`` and add a line to the test:

.. code-block:: typescript

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
      expect(1).toBe(2);
    });

When you save this, the test runner output tells you about the test failure.
Change the ``2`` to a ``1`` and save, and the tests pass.

As with the other run scripts, you can double-click to run in an IDE tool
window in PyCharm Professional. But that's the less-interesting way to do
it. We'll show in :doc:`../testing/index` the more-PyCharmic way.

In Depth
========

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

- npm run scripts have some common names such as ``start``

- Point to pre-requisites: npm, webpack and dev server

- The cra toolchain

- ``build`` is in the project's ``.gitignore``

- We will be using a real Jest run configuration type instead of running
  via npm run scripts

See Also
========

- create-react-app and wmonk

- https://basarat.gitbooks.io/typescript/content/

PyCharm Steps
=============

Here's a listing of steps specific to PyCharm.

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

#. Click the ``npm`` tool window (or open package.json and look at the run
   icons for scripts).

#. Double-click ``start`` and look in the opened browser window.

#. Open src/App.tsx, save a small change, and see the update in browser.

#. In the npm tool window, double-click ``build``, read output window
   for bundle size, right-click the new ``build`` directory, and
   ``Mark Directory As | Excluded``.

#. Edit ``package.json`` and change the ``test`` script to::

    "test": "react-scripts-ts test --env=jsdom --watchAll",

#. In tool window, double-click ``test``

#. Open src/App.test.tsx, make a small change adding
   ``expect(1).toBe(2);`` to the last line of the test, ignore the
   indentation warning, save.

#. See the update.
