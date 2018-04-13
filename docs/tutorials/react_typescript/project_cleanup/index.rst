.. tutorialstep::
    published: 2018-02-26 12:00
    excerpt: Clean out some unneeded code from the default app, tweak some configuration in the IDE, and tour a few more features.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

===============
Project Cleanup
===============

Pre-requisites
==============

- Typescript (compiler, finding tsconfig.conf, validated editing tsconf)

Steps
=====

#. Terminate the ``test`` tool window and close ``App.test.tsx``.

#. Open ``App.tsx``.

#. Run ``Reformat Code``.

#. Edit ``tsconfig.json``, ``Reformat Code``, and (autocomplete) to
   add "baseUrl": "."

#. Restart tool window and the startup error goes away.

#. Edit App.tsx and Reformat Code.

#. Use Emmet to replace <div> with div>h1<enter>Hello React

#. Show TS error in tool window, unused import, show ``noUnusedLocals`` in tsconfig that
   governs it

#. Remove logo and delete ``logo.svg`` file

#. Ditto for App.css

#. Save

#. Show not importing React in a file that has JSX, quick fix

#. Navigation: Find Usages on App, go to index.tsx, then Cmd-B to jump back

#. More IDE features in each lesson

What Happened
=============

- Point to pre-requisites: npm, webpack and dev server

- The cra toolchain

See Also
========

- https://basarat.gitbooks.io/typescript/content/
