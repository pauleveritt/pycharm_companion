.. blogpost::
    published: 2017-12-18 12:00
    excerpt: Make a REST API with Flask-RESTful and use PyCharm's HTTP Client
             to test it
    is_pro: True
    wp_url: 2017/12/building-an-api-using-flask-restful-and-using-the-pycharm-http-client/
    references:
        technology:
            - flask
            - flask_restful
            - postgresql
            - rest
        topic:
            - debugging
            - breakpoints
        author:
            - ernsthaagsman

===================================
Building an API using Flask-RESTful
===================================

With Flask running in Vagrant under Ansible out of the way in part one, the
series moves to mixing in Flask-RESTful talking to PostgreSQL (and pgmigrate.)
To ensure that we get the right responses during development, we show the
use of PyCharm's HTTP Client.
