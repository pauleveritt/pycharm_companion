.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Add event handling to a stateful class component.
    is_pro: True
    references:
        author:
            - pauleveritt

======
Events
======

Prerequisites
=============

Steps
=====

#. Let's start with a failing test that clicks on the div and checks if the
   number is updated. Clone the first test and change it as follows::

    it('should increment the count by one', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find('.counter span').text())
            .toBe('1');
        wrapper.find('.counter').simulate('click');
        expect(wrapper.find('.counter span').text())
            .toBe('2');
    });

#. Add an onClick hander to the div, one attribute per line to keep tslint
   happy::

    <div
        className="counter"
        onClick={() => this.setState({count: this.state.count + 1})}
    >


#. Use refactor to make the method::

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


- Can also do passed-in functions that become part of interface (and take
  arguments)

What Happened
=============

- Why is the arrow function needed in the onClick handler?

See Also
========

