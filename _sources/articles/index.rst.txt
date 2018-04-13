.. section::
    style: light
    subheading: Webinar recordings for technologies in Python
    in_nav: True
    nav_title: Articles
    weight: 15
    published: 2018-01-04 12:23
    acquireds:
        all:
            style: light

========
Articles
========

The PyCharm Companion organizes learning resources wherever they may lie.
But it also includes articles with working code in a repository. These
articles are both standalone and in series.

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Articles
          style: primary
          query:
              rtype: pcarticle
              limit: 5
        - label: Pro-Only
          style: info
          query:
              rtype: pcarticle
              props:
                  - key: is_pro
                    value: True
              limit: 5

.. toctree::
    :glob:

    frontend_tooling/index