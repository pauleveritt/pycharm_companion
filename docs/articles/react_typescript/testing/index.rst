.. tutorialstep::
    published: 2018-02-26 12:00
    excerpt: The Jest test runner integrates productively into PyCharm. Let's put it to work.
    is_pro: True
    references:
        author:
            - pauleveritt

=================================
Unit Testing with Jest and Enzyme
=================================

Let's take a look at Jest testing in the context of a cra-ts project.
Meaning, testing React components (stateful, stateless) that are written in
TypeScript. This lesson doesn't cover everything, just enough to get started.

- Awesome that it just figures everything out in the config, even ghosting
  the suggestion for the two args

Prerequisites
=============

- Jest

- Project Setup

Steps
=====

#. Make a Jest run config with the args

#. Run tests, single, etc.

#. Add to the code:

   .. code-block:: javascript

        const a = 1;
        const b = 2;
        expect(a).toBe(b);

#. Reformat code, watch the re-run, show red colored gutter icon

#. I wanted ``e`` (expected) instead of b, use Refactor -> Rename.

#. Fix failure, show test passes.

#. Jump between test and source with Shift-Command-T

#. Terminal

#. Install Enzyme npm install -D enzyme enzyme-adapter-react-16
   react-addons-test-utils @types/enzyme @types/enzyme-adapter-react-16

#. Add a bootstrap file for Enzyme at src/setupTests.js:

   .. code-block:: javascript

        import * as Enzyme from 'enzyme'
        import * as Adapter from 'enzyme-adapter-react-16'

        Enzyme.configure({
          adapter: new Adapter(),
        })

#. Add a test:

    .. code-block:: jsx

        it('renders the provided text', () => {
            const wrapper = shallow(<App/>);
            expect(wrapper.find('div').text()).toBe('Hello React');
        });

#. Let the IDE generate the shallow import, but with missing spacing

#. Preferences, search for ES6 import braces (Code Style -> TypeScript ->
   Spaces -> Within -> ES6 import/export braces)

#. TDD mode step one: source and test side-by-side mode


- TODO It seems this has been a no-op all along::

    expect(wrapper.find('Hello'))
        .toBeTruthy();


What Happened
=============

- Explain the extra args

- What specifically does Enzyme add? When to use pure Jest vs. with Enzyme?

- There's a pile of stuff hidden behind the scenes in cra scripts

- Why not the WS watch?

- Code coverage is not...covered

- Snapshot testing

See Also
========

- https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html

- https://www.jetbrains.com/help/webstorm/run-debug-configuration-jest.html

- https://blog.jetbrains.com/webstorm/tag/jest/

- https://medium.com/kevin-salters-blog/testing-react-with-enzyme-fbfc30190e70

- https://javascriptplayground.com/introduction-to-react-tests-enzyme/

- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8

- https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter