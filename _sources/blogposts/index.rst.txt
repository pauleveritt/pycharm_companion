.. section::
    style: primary
    subheading: Tutorials on the PyCharm blog
    in_nav: True
    nav_title: Blog Posts
    weight: 20
    published: 2018-01-04 12:23
    acquireds:
        all:
            style: primary

==========
Blog Posts
==========

Bite-sized information to better your PyCharm skills, usually delivered
as tweets. The PyCharm Companion adds extra information beyond the
tweet: background information, a full narrated video, links to other
related resources, and arranging a number of tips into a series.

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Blog Posts
          style: primary
          query:
              rtype: blogpost
              limit: 5
        - label: Pro-Only
          style: info
          query:
              rtype: blogpost
              props:
                  - key: is_pro
                    value: True
              limit: 5

.. toctree::

    developing-cloud-applications/index