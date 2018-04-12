.. tutorialstep::
    published: 2018-02-26 12:00
    excerpt: Make a simple class component with a single prop.
    duration: 3m14s
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

================
Class Components
================

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

#. Since we now have a prop, write a test which confirms passing one in::

    it('should have a custom label', () => {
        const wrapper = shallow(<Counter label="Custom"/>);
        expect(wrapper.find('.counter label').text())
            .toBe('Custom');
    });

   Note the use of autocomplete on the ``label`` property.

#. Extract to its own file.

#. Update tests.

#. Refactor into an interface.

#. Wire into UI.

#. View in browser.


What Happened
=============

See Also
========

