.. pcarticle::
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

- Start from Project Setup

- Pre-requisite: Project Setup, linting

- Open tslint.conf

- `Apply code style from TSLint?` say `Yes` (only applies some of them, alas
  double blank lines is not one of them, and is only one-time)

- Preferences -> tslint

- Notice that tslint.conf itself has some warnings, fix them

- What caused this? cra-ts is behind on latest version of tslint (common in
  world of JS)

- TODO Q: What WS machinery is driving validation of this file?

- In App.tsx, make a double-quote violation

- Quick-fix just that occurrence, or all

- Make a double blank line, violation

- Code format, puts it back in violation

- Explain issue, fix (either tslint.conf or WS style setting)




What Happened
=============


See Also
========

- https://www.jetbrains.com/help/webstorm/tslint.html

- https://www.jetbrains.com/help/webstorm/using-tslint-code-quality-tool.html

