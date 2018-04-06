.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Make a simple class component with local counter state.
    is_pro: True
    references:
        author:
            - pauleveritt

===========
Class State
===========

Prerequisites
=============

Steps
=====

We want to build a counter component which keeps track of clicks.

#. Start with a test in ``Counter.test.tsx``:

    .. code-block:: javascript

        it('should render a counter', () => {
            const wrapper = shallow(<Counter/>);
            expect(wrapper.find('.counter span').text())
                .toBe('1');
        });

#. Auto-complete ``shallow`` to auto-import it.

#. Make a component, for now, in the test file. We're not yet committed::

    class Counter extends React.Component {
        render() {
            return (
                <div className="counter">
                    <span>1</span>
                </div>
            );
        }
    }

   The test should now pass.

#. To show the class-based equivalent of the previous section, let's make an
   optional prop that has a label for the counter. First, add a failing
   test::

    it('should have a default label', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('.counter label').text())
            .toBe('Count');
    });

#. Now add a static implementation::

            <div className="counter">
                <label>Count</label>
                <span>1</span>
            </div>


#. The test passes. Classes handle props with defaults a little differently::

    class Counter extends React.Component<{ label?: string }> {
        static defaultProps = {
            label: 'Count'
        };

   Remember the ``?`` means optional.

#. Now make the ``<label>`` dynamic::

    <label>{this.props.label}</label>

#. Since we now have a prop, write a test which confirms passing one in:

    it('should have a custom label', () => {
        const wrapper = shallow(<Counter label="Custom"/>);
        expect(wrapper.find('.counter label').text())
            .toBe('Custom');
    });


#.


#. ----------------
#. Start writing the HTML inline::

     <div className="counter" onClick={() => alert('Clicked!')}>
        <span>10</span>
     </div>

#. Click in browser

#. Add a prop for a label to show the count, make it optional with ? and
   put || 'Count: ' in the span

#. Extract to an interface for props

#. Make an interface for CounterState and add to generic

#. Make a constructor to setup the state

#. Replace the <span> value with this.state.count

#. Replace the onClick handler with::

       <div onClick={() => this.setState({count: this.state.count + 1})}>
          Hello
       </div>

#. Why is the arrow function needed? Try without it.

#. Use refactor to make the method:

   .. code-block:: javascript

        private increment() {
            this.setState({count: this.state.count + 1});
        }

#. Use a prop as the starting value....add starter?: number to the props

#. Set initial state with count: this.props.starter || 0

#. Show autocomplete on <Counter>

#. Show mistakenly doing <Counter starter="10"/>

#. Shift click to increment by 10

#. onClick={(event) => this.increment(event)}

#. increment(event: React.MouseEvent<HTMLElement>)

#. Mistake for const inc = 10 ? event.shiftKey : 1;

#. Partial correction: const inc: number = 10 ? event.shiftKey : 1;

#. Full correction: const inc: number = event.shiftKey ? 10 : 1;

#. Make the interface less browser-y by moving the event unpacking to the
   onClick handler, thus passing only event.shiftKey::

    <div onClick={(event: React.MouseEvent<HTMLElement>) => this.increment(event.shiftKey)}>

#. Even simpler, spread operator::

    <div onClick={({shiftKey}) => this.increment(shiftKey)}>

#. Extract to a separate file

#. Write a test...requires changing private

- Do the moral equivalent of destructuring (in the render), and with a
  default value

- Have App return a <div> wrapping Hello.



What Happened
=============

See Also
========

