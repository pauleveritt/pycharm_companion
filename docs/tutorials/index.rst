.. section::
    style: success
    subheading: Multi-step tutorials with videos, explanation, and working code.
    in_nav: True
    weight: 12
    published: 2018-01-01 12:23
    acquireds:
        all:
            style: success

=========
Tutorials
=========


.. featuretiles::
    name: featuretiles1
    rows:
        - - heading: Updated
            style: is-primary
            bullets:
                - Built on the powerful, mature Sphinx documentation
                  system
          - heading: Visual
            subheading: YAML in pages to make resources
            style: is-info
            bullets:
                - Updated videos, with captions for the transcript
          - heading: Supported
            subheading: Rich PEP-compliant validation
            style: is-warning
            bullets:
                - Perhaps a forum like Disqus
        - - heading: Gradual
            style: is-primary
            bullets:
                - Written instructions for each step
                - Text with deeper explanation and links to supporting material
          - heading: Explained
            subheading: YAML in pages to make resources
            style: is-info
            bullets:
                - Updated videos, with captions for the transcript
          - heading: Organized
            subheading: Rich PEP-compliant validation
            style: is-warning
            bullets:
                - Interlinking, external resources
                - Useful search
                - Links to pre-requisite courses, to keep these courses lean-and-mean
        - - heading: Open
            style: is-primary
            bullets:
                - Written instructions for each step
                - Text with deeper explanation and links to supporting material
          - heading: Working Code
            subheading: YAML in pages to make resources
            style: is-info
            bullets:
                - A repo with working code, where you can ask questions (or file
                  pull requests for improvements)
          - heading: IDE
            subheading: Rich PEP-compliant validation
            style: is-warning
            bullets:
                - Nothing requires the IDE
                - IDE productivity features sprinkled into each lesson

.. querylist::
    name: ql1
    template: querylist
    queries:
        - label: Recent Tutorials
          style: primary
          query:
              rtype: tutorial
              limit: 5
        - label: Recent Tutorial Steps
          style: info
          query:
              rtype: tutorialstep
              limit: 5

.. filteredlisting::
    name: fl1
    filename: ../catalog.json
    parent_docname: tutorials/index

.. toctree::
    :hidden:

    react_typescript/index