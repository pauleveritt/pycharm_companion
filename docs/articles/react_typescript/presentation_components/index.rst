.. tutorialstep::
    published: 2018-02-26 12:00
    excerpt: Follow the React pattern of container/presentation components.
    is_pro: True
    references:
        author:
            - pauleveritt

=======================
Presentation Components
=======================

React encourages a separation of concerns. UI components, aka presentation
components, aka dumb components, are created by the bushel and managed by
container components, aka smart components. The container maintains state,
logic, and passes things into the presenation component.

Our Counter component is, as originally intended. Let's make it a
presentation component by moving the state up to the container (App) and
the incrementing logic as well.

Prerequisites
=============

Steps
=====

#. It's going to get annoying seeing all the failing tests in
   ``Counter.test.tsx``, so comment out all but the first test.

#. Change the props interface to contain, for now, just the optional label
   and a value passed in from the container::

    interface CounterProps {
        label?: string;
        count: number;
    }

#. Delete the ``CounterState`` interface, since we won't be needing it.

#. Since this is now a very simple, very dumb component, let's switch it
   back to a SFC::

    const Counter: React.SFC<CounterProps> = (
        {label = 'Count', count}
    ) => {
        return (
            <div
                className="counter"
            >
                <label>{label}</label>:
                <span>{count}</span>
            </div>
        );
    };

#. Fix the first test, as this component now needs a (starting) count passed
   in::

    const wrapper = shallow(<Counter count={1}/>);

#. We now need event handlers. As explained below, these are arrow functions
   passed in as props. First, we change the interface to allow this::

    interface CounterProps {
        label?: string;
        count: number;
        onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void;
    }

#. Add an onClick handler which simple points to this prop::

    onClick={onCounterIncrease}

#. The first test passes but has a compiler warning. We're missing
   ``onCounterIncrease``, a mandatory prop. It's easy to shut up this test,
   as it doesn't test clicking::

    const handler = jest.fn();
    const wrapper = shallow(<Counter count={1} onCounterIncrease={handler}/>);

   ``jest.fn()`` is a simple mock function.

#. Uncomment the second and third tests and do the same: add an initial,
   define a fake handler, and pass that handler in as a ``onCounterIncrease``
   prop.

#. Event handling is a bit trickier. We need a "spy" that tells whether our
   passed-in handler gets called, and called the right way. Also, we don't
   test whether the value updates, since the container is responsible for
   that::

    it('should increment the count by one', () => {
        const handler = jest.fn();
        const wrapper = shallow(<Counter count={1} onCounterIncrease={handler}/>);
        wrapper.find('.counter').simulate('click', {shiftKey: false});
        expect(handler).toBeCalledWith({shiftKey: false});
    });

#. Fix the last test in a similar way. The last test is no longer needed.

Container Component
-------------------

Let's now turn to our container component, ``App``.

#. This component will now have some state. Add the interface and change
   the class setup::

    interface CounterState {
        count: number;
    }

    class App extends React.Component<{}, CounterState> {
        constructor(props: {}) {
            super(props);
            this.state = {
                count: 0
            };
        }

#. It will also need the increment method exactly as was on the previous
   lesson, but under ``Counter``::

    increment(isShift: boolean) {
        const inc: number = isShift ? 10 : 1;
        this.setState({count: this.state.count + inc});
    }

#. The ``render`` method's usage of ``<Counter/>`` gets richer. It needs to
   pass in the state *and* an arrow-function reference to its *own*
   increment::

    <Counter
        count={this.state.count}
        onCounterIncrease={({shiftKey}) => this.increment(shiftKey)}
    />

#. Now that we're wired up, let's give it a try in the browser. Click on the
   counter and shift-click to see the number go up.

What Happened
=============

- Would be good to test more of App, but that would mean deeper testing.

See Also
========

- https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8