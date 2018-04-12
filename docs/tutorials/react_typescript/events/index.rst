.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 3m17s
    excerpt: Add event handling to a stateful class component.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

======
Events
======

Prerequisites
=============

Steps
=====

#. Let's start with a failing test that clicks on the div and checks if the
   number is updated. Clone the first test and change it as follows:

   .. code-block:: typescript

    it('should increment the count by one', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('.counter span').text())
            .toBe('1');
        wrapper.find('.counter').simulate('click');
        expect(wrapper.find('.counter span').text())
            .toBe('2');
    });

#. Add an onClick handler to the div, one attribute per line to keep tslint
   happy::

    <div
        className="counter"
        onClick={() => this.setState({count: this.state.count + 1})}
    >

#. The test should now pass. Let's move the logic out of the onClick handler.
   Add a method:

   .. code-block:: typescript

    increment() {
        this.setState({count: this.state.count + 1};
    }

#. Then change the click handler::

    onClick={() => this.increment()}

   Confirm that the tests still pass.

#. Counters should allow an optional starting value passed in as a prop.
   Let's first write a test that fails:

   .. code-block:: typescript

    it('should allow a starting value', () => {
        const wrapper = shallow(<Counter starting="10"/>);
        expect(wrapper.find('.counter span').text())
            .toBe('10');
    });

   TypeScript tells us, even before the test runs, that we have an error.

#. We can now add this as an optional prop:

   .. code-block:: typescript

    interface CounterProps {
        label?: string;
        starting?: number;
    }

#. When saved, TypeScript still complains, but for a different reason. We
   passed in a string instead of a number. Fix our test:

   .. code-block:: typescript

    const wrapper = shallow(<Counter starting={10}/>);

#. Now the compiler is happy, but the test fails. We're not assigning the
   property to the initial state. Let's fix that, and along the way, set
   a default value for the property:

   .. code-block:: typescript

    constructor(props: CounterProps) {
        super(props);
        this.state = {
            count: this.props.starting
        };
    }

    static defaultProps = {
        label: 'Count',
        starting: 1
    };

#. We're closer, but we have a compiler error. We've said ``starting`` is
   optional, which means it could be ``undefined``. That's not allowed on
   ``count``. Could fix it by doing the default a different way, but TS 2.7
   has "definite assignment assertion" with an exclamation:

   .. code-block:: typescript

        count: this.props.starting!

   Now the tests pass.

#. Let's add one more feature. If you click with the Shift key pressed, you
   increase by 10. The onClick arrow function actually gets an event passed,
   which we aren't using. Let's add it in::

    onClick={(event) => this.increment(event)}

#. TypeScript now tells us we have an error. ``increment`` is receiving an
   argument it didn't expect. Let's add that, with the correct type:

   .. code-block:: typescript

    increment(event: React.MouseEvent<HTMLElement>) {

   Ugh, that's a lot of keystrokes. Is it worth it? Let's show why.

#. In that method, let's determine the value to increment by, first as a
   mistake:

   .. code-block:: typescript

    increment(event: React.MouseEvent<HTMLElement>) {
        const inc = 10 ? event.shiftKey : 1;
        this.setState({count: this.state.count + inc});
    }

#. TypeScript told us that we were adding a boolean to a number. Let's make
   the type of ``inc`` explicity, instead of inferred. Our first fix:

   .. code-block:: typescript

    const inc: number = 10 ? event.shiftKey : 1;

#. That's closer. TypeScript now moves the error to the correct line. We
   see that we have to order wrong on the ternary...a frequent, maddening
   error. Here's the correct version:

   .. code-block:: typescript

    const inc: number = event.shiftKey ? 10 : 1;

#. Our click-handler test now fails, though. It needs ``shiftKey`` in the
   event. Let's fix that test, then clone to cover the with-shift case:

   .. code-block:: typescript

    it('should increment the count by one', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('.counter span').text())
            .toBe('1');
        wrapper.find('.counter').simulate('click', {shiftKey: false});
        expect(wrapper.find('.counter span').text())
            .toBe('2');
    });

    it('should shift-click increment the count by ten', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('.counter span').text())
            .toBe('1');
        wrapper.find('.counter').simulate('click', {shiftKey: true});
        expect(wrapper.find('.counter span').text())
            .toBe('11');
    });

#. While this works well, it's a shame to expose the ``increment`` method
   to mouse information. Let's refactor to make the caller determine if
   shift is pressed. Change ``increment`` first::

    increment(isShift: boolean) {
        const inc: number = isShift ? 10 : 1;
        this.setState({count: this.state.count + inc});
    }

#. Now make the ``onClick`` handler do the work::

    <div onClick={(event: React.MouseEvent<HTMLElement>) => this.increment(event.shiftKey)}>

#. In fact, with ES6 object destructuring, we can vastly simplify this::

    <div onClick={({shiftKey}) => this.increment(shiftKey)}>

#. The tests still pass, do things still work in the browser? Click and
   shift-click to see.

What Happened
=============

- Why is the arrow function needed in the onClick handler?

- Easier to write tests with the final ``increment``...though it requires
  component lifecycle management

See Also
========

- Definite assignment assertion in TypeScript 2.7 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html

TODO
====

- Add a mount-type test for event testing https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
