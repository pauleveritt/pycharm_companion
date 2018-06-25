.. section::
    style: info
    template: tip_section
    subheading: Bite-sized information to better your PyCharm skills
    in_nav: True
    nav_title: Tips
    weight: 10
    published: 2018-01-01 12:23
    acquireds:
        all:
            style: info

====
Tips
====

Bite-sized information to better your PyCharm skills, usually delivered
as tweets. The PyCharm Companion adds extra information beyond the
tweet: background information, a full narrated video, links to other
related resources, and arranging a number of tips into a series.

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Tips
          style: primary
          query:
              rtype: tip
              limit: 5
        - label: Pro-Only
          style: info
          query:
              rtype: tip
              props:
                  - key: is_pro
                    value: True
              limit: 5

.. toctree::
    :hidden:
    :glob:

    intro_debugging/index
    *
