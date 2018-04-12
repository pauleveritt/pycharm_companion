.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 3m47s
    excerpt: Use type information to make using properties into a productive workflow.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

=====
Props
=====

- Use TDD for this

Prerequisites
=============

Steps
=====

#. Let's have the recipient of the greeting passed in with props. The most
   obvious::

    export const Hello = (props) => <h1>Hello {props.recipient}</h1>;

#. ES6 destructuring is nice. It unpacks one or more values from an object::

    export const Hello = ({recipient}) => <h1>Hello React</h1>;

#. TypeScript's compiler settings are, by default, very conservative. Let's
   relax this in tsconfig.json with ``"noImplicitAny": false"```

#. Back in our file, that error now disappears. But we have a new error.
   ``<Hello>`` doesn't pass a prop, e.g. ``<Hello recipient="React"/>``.
   Instead of changing the App and the test, let's give a default value and
   use in the ``<h1>``::

    export const Hello = ({recipient = 'React'}) => <h1>Hello {recipient}</h1>;


   Note that autocomplete worked for the variable. Our tests now pass again.

#. Write a test that provides a non-default value. Notice autocomplete.

#. We still don't have typing and in fact have allowed ``any`` anywhere in
   the project. Let's change this by using ``React.SFC``::

     export const Hello: React.SFC<{recipient: string}> = ({recipient = 'React'}) => <h1>Hello {recipient}</h1>;

#. We now have an error in contract between component and usage. Make
   recipient optional::

     export const Hello: React.SFC<{recipient?: string}> = ({recipient = 'React'}) => <h1>Hello {recipient}</h1>;

#. Back in our test, we now see that test writing now got more "contract-y".
   Try passing in a number.

#. That's a long line. Let's extract the property type information to an
   interface. Use Refactor -> Interface.

#. Still a long line. Put a proper return with ``{}`` instead of a long line.

#. Finally, move the component to its own file ``Hello.tsx`` as a default
   export.

#. Notice something? We never looked at our browser. We used TDD the
   entire time. Let's make sure the browser still works ok.

What Happened
=============

- SFCs are good for leaves, with no state or children (as they re-render a
  lot)

- Destructuring is good, moves the contract enforcement further out

See Also
========

- https://mikebridge.github.io/articles/getting-started-typescript-react-2/