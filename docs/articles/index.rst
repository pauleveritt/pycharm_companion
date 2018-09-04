.. section::
    style: light
    subheading: Webinar recordings for technologies in Python
    in_nav: True
    nav_title: Articles
    weight: 5
    published: 2018-01-04 12:23
    acquireds:
        all:
            style: light

========
Articles
========

.. leadin::
    name: l1

    The PyCharm Guide organizes learning resources wherever they may lie.
    But it also includes articles with working code in a repository. These
    articles are both standalone and in series.


.. filteredlisting::
    name: fl1
    filename: ../catalog.json
    parent_docname: articles/index

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Articles
          style: primary
          query:
              rtype: kbbarticle
              limit: 5
        - label: Pro-Only
          style: info
          query:
              rtype: kbbarticle
              props:
                  - key: is_pro
                    value: True
              limit: 5

.. toctree::
    :glob:
    :hidden:

    frontend_tooling/index