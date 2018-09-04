.. blogpost::
    published: 2017-08-16 12:00
    excerpt: Pandas Dataframes, Amazon Redshift, and PyCharm
    wp_url: 2017/08/analyzing-data-in-amazon-redshift-with-pandas/
    references:
        kbbtechnology:
            - aws
            - rest
        kbbauthor:
            - ernsthaagsman

=============================================
Analyzing Data in Amazon Redshift with Pandas
=============================================

Redshift is Amazon Web Services’ data warehousing solution. They’ve extended
PostgreSQL to better suit large datasets used for analysis. When you hear
about this kind of technology as a Python developer, it just makes sense to
then unleash Pandas on it. So let’s have a look to see how we can analyze
data in Redshift using a Pandas script!

This blog post covers:

- Setting up RedShift

- Connecting to RedShift

- Loading Redshift Data into a Pandas Dataframe