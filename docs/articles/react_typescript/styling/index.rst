.. tutorialstep::
    published: 2018-02-26 12:00
    excerpt: Use the TypeScript linter tslint to manage styling with the IDE
    is_pro: True
    references:
        author:
            - pauleveritt

===================
Styling with tslint
===================

Steps
=====

#. Start from Project Setup

#. Pre-requisite: Project Cleanup, linting

#. Open tslint.conf

#. Preferences -> tslint

#. Notice that tslint.json itself has some warnings, fix them

    - What caused this? cra-ts is behind on latest version of tslint (common in
      world of JS)

    - Delete the member-ordering and show the import of rules at the top

    - Emphasize ``no-consecutive-blank-lines``

#. Back to App.tsx, show this in action...add 4 blank lines, show tslint
   error, Reformat Code, still an error...WebStorm reformats to 2

#. Back to tslint.json, change to the variant [true, 1]

#. Show adding blank lines, reformat, works

- In App.tsx, quick-fix the import to be "react", show error, save, see
  webpack complain

- What governs that? tslint.json, change it (and see the Apply code style)

- Say yes, then show where in WS preferences that changed

- Back to tslint.json, back to single

- Back to App.tsx, use Quick-fix just that occurrence, or all

- Save, compile is fine


What Happened
=============


See Also
========

- https://www.jetbrains.com/help/webstorm/tslint.html

- https://www.jetbrains.com/help/webstorm/using-tslint-code-quality-tool.html


TODO Q: What WS machinery is driving validation of tslint.conf?

