.. section::
    style: link
    subheading: Tutorials on the PyCharm blog
    in_nav: True
    nav_title: Blog Posts
    weight: 20
    published: 2018-01-04 12:23
    acquireds:
        all:
            style: link

==========
Blog Posts
==========

Bite-sized information to better your PyCharm skills, usually delivered
as tweets. The PyCharm Guide adds extra information beyond the
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
    analyzing-data-in-amazon-redshift
    developing-django-under-the-debugger
    how-to-publish-to-pypi
    life-without-project-explorer
    ssh-agent-simplify-keys
    three-quick-git-videos
    using-docker-compose-on-windows
    announcing-micropython-plugin
    hacking-reddit-with-pycharm
    make-sense-of-your-variables
    template-debugging
    upgrade-your-testing-with-bdd
    using-sets-to-compare-keymaps
    docker-compose-flask-db/index
    raspberry-pi/index


