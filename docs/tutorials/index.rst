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
        - - heading: Key Features
            bullets:
                - Built on the powerful, mature Sphinx documentation
                  system
                - Turn pages into resources with YAML embedded into the text
                - Validate that YAML with custom schemas
                - Associate templates with resources or individual pages
                - Inline widgets to query the documents and render output
                - Extensible references to connect resources
                - Built-in article system, ready-to-go, out-of-the-box
            style: is-primary
            more_href: features
          - heading: Resources
            subheading: YAML in pages to make resources
            bullets:
                - Use a special Sphinx directive to put some YAML at the top of your
                  document
                - Kaybee then records this in a Python document database in your app
                - Use out-of-the-box directives or write classes to make your own
                  resources using a simple decorator on a Python class
                - Access the resource in your Jinja2 template
                - Your Sphinx folder structure is available as a resource tree
            style: is-info
            more_href: using/resources
          - heading: Schemas
            subheading: Rich PEP-compliant validation
            style: is-warning
            more_href: using/schemas
            bullets:
                - YAML is validated against schemas
                - Write schemas as PEP-484 Python classes using
                  pydantic
                - Associate these schemas with your resource type definitions
                - Access these as resource "properties" in your Jinja2 templates or
                  widget queries
                - Push some properties to parents in the resource tree, to control
                  whole sections of the site
        - - heading: Templates
            subheading: Normal Python Jinja2 templating
            style: is-primary
            more_href: using/templates
            bullets:
                - Write Jinja2 templates for your resources, widgets, and more
                - Assign a template to a specific resource via YAML, or a section of
                  your site, or for all resources in a class
                - Associate a template with a specific widget on a certain page
                - Easily customize the data available in a template
          - heading: Widgets
            subheading: Report on your data in rich ways
            style: is-info
            more_href: using/widgets
            bullets:
                - Have a custom, data-driven box in the middle of a document
                - Use existing widgets or easily register your own, with associated
                  YAML schema and template
                - Express a query in YAML which collects resources from the Python
                  collection and renders in a custom template
          - heading: References
            subheading: Organized data with validated connections
            style: is-warning
            more_href: using/references
            bullets:
                - Use an existing reference system or define your own, such as tags or
                  authors
                - Associate documents as entries in that reference system with simple
                  YAML at the top
                - Then tag a resource as being in that category using reference-validated
                  YAML
                - Easily interate over forward and backwards references in templates
                - Make inline-linking references in content using the Sphinx syntax
        - - heading: Articles
            subheading: Starter kit for common cases
            style: is-primary
            more_href: using/articles
            bullets:
                - A ready-to-go publishing system with resources, widgets, references,
                  and more
                - Articles with publication date filtering
                - Widgets which query the resources in interesting ways
          - heading: Extensibility
            subheading: New kinds of things with simplified API
            style: is-info
            more_href: extending/index
            bullets:
                - Use Python classes with decorators to make new resources and widgets
                - Instances are available in templates
                - Far simpler than the Sphinx extension model
                - Easy to test
          - heading: Sphinx
            subheading: Built atop powerful Sphinx document system
            style: is-warning
            bullets:
                - Built on the mature static-site-generator used for ReadTheDocs and
                  Python
                - Sphinx provides rich facilities for organizing and extending your
                  content
                - Kaybee is a layer atop Sphinx that provides a simpler extension model

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

.. toctree::
    :hidden:

    react_typescript/index