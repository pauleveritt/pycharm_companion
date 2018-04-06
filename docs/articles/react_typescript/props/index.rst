.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: Use type information to make using properties into a productive workflow.
    is_pro: True
    references:
        author:
            - pauleveritt

=====
Props
=====

- Use TDD for this

Prerequisites
=============

Steps
=====

#. Header loads the logo itself. Let's pass it in as a prop.

#. {logo} and move const logo to App.tsx, explain spread operator in ES6,
   do it the long way also.

#. Fix <Header> to use it, with autocomplete

#. Typing: make const logo a number. Succeeds. But fails.

#. const Header: React.SFC<{ logo: string }> = ({logo})

#. Now the caller complains about the number.

#. What if the logo was optional? We can wrap {logo &&} but the typing breaks
   when logo={logo} is removed from the caller

#. logo? and then comment out const logo

#. Use Refactor to extract to HeaderProps interface

#. Testing along the way.

#. Discuss whether it is worth it to do const logo: string

- Typing helps the source/test contract


What Happened
=============

- SFCs are good for leaves, with no state or children (as they re-render a
  lot)

See Also
========

- https://mikebridge.github.io/articles/getting-started-typescript-react-2/