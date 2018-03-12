.. section::
    style: danger
    subheading: Webinar recordings for technologies in Python
    in_nav: True
    nav_title: Webinars
    weight: 25
    published: 2018-01-04 12:23
    acquireds:
        all:
            style: danger

========
Webinars
========

PyCharm hosts webinars, usually on a monthly basis, where we cover some
topic of interest to our Python developer audience. This usually means
inviting an expert to present and fielding questions from the audience
during the webinar.

We record these and make them available on YouTube. Here is a compendium of
our webinars.

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Webinars
          style: primary
          query:
              rtype: webinar
              limit: 5
        - label: Pro-Only
          style: info
          query:
              rtype: webinar
              props:
                  - key: is_pro
                    value: True
              limit: 5

.. toctree::
    :glob:

    *
