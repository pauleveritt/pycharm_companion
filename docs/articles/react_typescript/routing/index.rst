.. pcarticle::
    published: 2018-02-26 12:00
    excerpt: React single-page applications use client-side routing. Hook that up in a TypeScript app.
    is_pro: True
    references:
        author:
            - pauleveritt

=======
Routing
=======

Prerequisites
=============

- Project Setup

Steps
=====

#. npm install -S react-router-dom history

#. npm install -D @types/react-router-dom @types/history

#. Make a couple of inline SFC

#. history const history = createBrowserHistory();

#. Hook up some routes::

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/" component={Home}/>
                </Switch>
            </Router>
        );
    }

#. Put a simple SFC statement and interface on each::

    interface HomeProps {
    }

    const Home: React.SFC<HomeProps> = () => (

#. Extend the interface to extract route information::

        interface AboutProps extends RouteComponentProps<{}}> {

#.

What Happened
=============

See Also
========

