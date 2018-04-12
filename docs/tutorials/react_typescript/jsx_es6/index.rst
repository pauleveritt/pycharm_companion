.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 3m24s
    excerpt: Using React and TypeScript means good JSX and ES6 support in the IDE. This section shows some useful features.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

===========
JSX and ES6
===========

Prequisites
===========

- ES6

- JSX

    - Syntax highlighting, JSX/component/method completion, navigation,
      linting, auto-import, quick-fixes (e.g. missing method)

- Testing

Steps
=====

#. Start by removing some stuff from previous Debugging step:

    - Remove the last test

    - Put the <h1> back to ``Hello React``

    - Remove the static method for label

    - Start running the test runner again

#. These are ES6 classes. Let's make label a "field", which in TS is a variable
   defined in a class. Add ``label = 'Hello React';``

#. Write a test to see if it is there:

   .. code-block:: javascript

        it('has a label field', () => {
            const app = new App({}, {});
            expect(app.label).toBe('Hello React');
        });

#. JSX can insert JS into HTML with brackets. Change to
   ``<h1>{this.label}</h1>``. Tests still pass.

#. TS can help flag type errors, even in markup. Make the label uppercase
   and change the value to a number.

#. ES6 arrow functions let you do a lot of work in a small space. Let's
   uppercase the label. Change the render:

   .. code-block:: jsx


    render() {
        const label = this.label.toUpperCase();
        return (
            <div>
                <h1>{label}</h1>
            </div>
        );
    }

#. The test needs to be fixed.

#. Labels need to be strings. It's inferred, but we can make it explicit
   with ``label: string = 'Hello React';``

#. The TypeScript keyword ``public`` is inferred. Let's make it private and
   see what happens when the test accesses it. Note that the code still
   compiles and works in the browser.

#. JSX can have onclick handlers that are inline JavaScript. Let's make an
   alert that shows the label::

       <h1 onClick={() => alert(this.label)}>Something</h1>

#. As you see with ``onClick``, JSX maps some HTML attributes to special
   names to which it applies special handling. ``className`` is another.
   The IDE can help you autocomplete those (and warn when you forget.
   Show this.)

#. What governs this in the IDE? Languages & Frameworks -> JavaScript sets
   the project to React JSX which implies ES6 and JSX

#. Use ``.ts`` for files that have no JSX (aka TSX) in it and ``.tsx`` for
   files with markup.

#. The IDE provides useful navigation. Click on ``this.label`` in the
   ``<h1>`` and type Cmd-B to jump to the definition, no matter what project
   file it is located in. Type ``Alt-F7`` to then go in the reverse direction
   and see all places in the project where that symbol is used.

#. Rename also works. With the cursor on the ``label`` declaration, type
   ``Ctrl-T`` and choose ``Rename``. Type in ``heading``, press ``Enter``,
   and choose ``Do Refactor``. You'll see the
   field name change not just in the declaration, but also in the JSX and
   even the tests.

#. Multiline JSX generates an error. For example::

        return <div>
            <h1 onClick={() => alert(this.heading)}>{label}</h1>
        </div>;

#. Select the ``<div>`` and type ``(``. Presumes SmartQuote setting. Move the
   cursor and press Enter to put ``<div>`` on a new line.

What Happened
=============

See Also
========

- MS TypeScript pages for ES6 and React/JSX
