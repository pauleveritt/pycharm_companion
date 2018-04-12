.. tutorialstep::
    published: 2018-02-26 12:00
    duration: 4m26s
    excerpt: React single-page applications use client-side routing. Hook that up in a TypeScript app.
    is_pro: True
    references:
        author:
            - pauleveritt
        technology:
            - react

=======
Routing
=======

Prerequisites
=============

- Project Setup

Steps
=====

#. npm install -S react-router-dom history -D @types/react-router-dom @types/history

#. Let's use a smaller starting point:

    - Delete Counter.tsx and Counter.test.tsx

    - Delete Hello.tsx and Hello.test.tsx

#. Simplify App.tsx down to::

    import * as React from 'react';

    class App extends React.Component {
        render() {
            return (
                <div>Hello</div>
            );
        }
    }

    export default App;

#. Each "page" is a component. Let's make a couple of "stateless functional
   components" (SFCs) for each page::

    const Home = () => <h1>Hello</h1>;
    const About = () => <h1>About</h1>;

#. The router needs an object to use as its "history"::

    const h = createBrowserHistory();

   Click on ``createBrowserHistory`` and use Alt-Enter to auto-generate the
   import.

#. Now comes the magic. Change the ``render`` to use routes::

    render() {
        return (
            <Router history={h}>
                <Switch>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/" component={Home}/>
                </Switch>
            </Router>
        );
    }

   Remember to let the IDE generate the imports for you (either when typing
   or, if cut-and-pasting, afterwards by clicking and using Alt-Enter.)

#. Our application has two pages. In the browser, edit the URL to switch
   between ``/`` and ``/about``.

#. The router can provide route information as props. Let's give a props
   interface as a starting point::

    interface HomeProps {
    }

    const Home: React.SFC<HomeProps> = () => (
        <h1>Hello</h1>
    );


#. Now extend the interface to extract route information::

    interface HomeProps extends RouteComponentProps<{}> {

#. And, as if by magic, we now have extra variables we can destructure from
   props::

    const Home: React.SFC<HomeProps> = ({location, match, history}) => (
        <div>
            <h1>Hello at path: {location.pathname}</h1>
        </div>
    );

    Note the autocompletion, not just in the h1, but actually in the
    destructuring.

#. Let's do the same for About::

    interface AboutProps extends RouteComponentProps<{}> {
    }

    const About: React.SFC<AboutProps> = ({location, match, history}) => (
        <div>
            <h1>About at path: {location.pathname}</h1>
        </div>
    );

#. Let's make it convenient to navigate between the two views using the
   ``Link`` component from the router::

    <div>
        <h1>Hello at path: {location.pathname}</h1>
        <Link to="/about">About</Link>
    </div>

   Note that the IDE can generate the import, either during autocomplete or
   later, by clicking on the node and using Alt-Enter.

#. In the About component, add a link back to the Home component.

#. One last part which really shows of something subtle and poorly-explained
   in React+TypeScript+Router: composing interfaces to include route
   parameters. Let's say you want a collection at ``/about/42``, ``/about/43``,
   etc. That's called ``match`` information. We'll say the number is
   ``shoe_size``.

#. First, we change the route definition to have the ``shoe_size`` parameter::

    <Route exact={true} path="/about/:shoe_size" component={About}/>

#. Already our page stops working. It doesn't match. Let's fix our link in
   the ``Home`` component::

    <Link to="/about/42">About</Link>

#. Navigation works, but we want the ``shoe_size`` variable. Make an
   interface as a contract for the data in the match::

    interface AboutMatch {
        shoe_size: string;
    }

#. Add that interface to the "generic" for the ``AboutProps`` interface::

    interface AboutProps extends RouteComponentProps<AboutMatch> {
    }

#. Finally, show this match information (and the URL hash) in the UI::

    <div>Shoe Size: {match.params.shoe_size}</div>
    <div>Hash: {history.location.hash || 'None'}</div>

#. The hash can be shown by adding ``#here`` to the URL.

What Happened
=============

See Also
========

