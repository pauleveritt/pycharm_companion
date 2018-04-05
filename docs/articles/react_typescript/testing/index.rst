.. pcarticle::
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

#. Edit package.json and install enzyme, we'll need it for later

#. Make a Jest run config with the args

#. Run tests, single, etc.

#. Edit in a failure, watch the re-run, show red colored gutter icon

#. Fix failure

#. Jump between test and source with Shift-Command-T (Go To | Test and
   Go To | Test Subject)

#. Install Enzyme npm install -D enzyme enzyme-adapter-react-16
   @types/enzyme @types/enzyme-adapter-react-16

#. Or: npm install -D enzyme @types/enzyme react-addons-test-utils

#. Add a bootstrap file for Enzyme at src/setupTests.js:

   .. code-block:: javascript

        // src/setupTests.ts
        import * as Enzyme from 'enzyme'
        import * as Adapter from 'enzyme-adapter-react-16'

        Enzyme.configure({
          adapter: new Adapter(),
        })

#. Add a test:

    .. code-block:: jsx

        it('renders', () => {
            const wrapper = shallow(<div>
              <h1>Hello, Enzyme!</h1>
            </div>)
            expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
          })

- Side-by-side mode

- Snapshot testing

- Typing helps the source/test contract

What Happened
=============

- Explain the extra args

- What specifically does Enzyme add? When to use pure Jest vs. with Enzyme?

- There's a pile of stuff hidden behind the scenes in cra scripts

- Why not the WS watch?

- Code coverage is not...covered

See Also
========

- https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html

- https://www.jetbrains.com/help/webstorm/run-debug-configuration-jest.html

- https://blog.jetbrains.com/webstorm/tag/jest/

- https://medium.com/kevin-salters-blog/testing-react-with-enzyme-fbfc30190e70

- https://javascriptplayground.com/introduction-to-react-tests-enzyme/

- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8

- https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter