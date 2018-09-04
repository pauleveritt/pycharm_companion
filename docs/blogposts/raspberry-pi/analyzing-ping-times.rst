.. blogpost::
    published: 2017-07-12 12:00
    excerpt: (Second part of series) Use a Raspberry Pi to query and graph
        ping time data
    is_pro: True
    wp_url: 2017/12/building-an-api-using-flask-restful-and-using-the-pycharm-http-client/
    references:
        kbbtechnology:
            - postgresql
        kbbauthor:
            - ernsthaagsman

=================================================================
Remote Development on Raspberry Pi: Analyzing Ping Times (Part 2)
=================================================================

Last week we created a script that records ping times on a regular basis. We
developed the script remotely on a Raspberry Pi, and then added it to Cron to
make sure that times are recorded every 5 minutes into a PostgreSQL database.

This blog post covers:

- Let’s see some results

- Querying the Data

- Graphing the Data

- Querying the Data with Pandas
