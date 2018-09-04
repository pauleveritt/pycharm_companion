import kaybee
import kaybee_bulma

kaybee_bulma_siteconfig = kaybee_bulma.SiteConfig(
    logo=dict(
        img_file='PyCharm_Logo.svg.png',
        alt='PyCharm Logo Alt'
    ),
    copyright='2018, All Rights Reserved',
    favicon='jetbrains_favicon.ico',
    navbar=dict(
        start=[
            # dict(
            #     css_class='documentation',
            #     accent='primary',
            #     label='PyCharm Guide',
            #     href='/'
            # ),
            dict(
                css_class='documentation',
                accent='primary',
                icon='book',
                label='Learn',
                href='/learn/'
            ),
            dict(
                css_class='blog',
                accent='rss',
                icon='rss',
                label='News',
                href='/news.html'
            )
        ],
        end=dict(
            links=[
                dict(
                    color='333',
                    href='github',
                    icon='github-alt',
                ),
                dict(
                    color='55acee',
                    href='twitter',
                    icon='twitter',
                ),
            ],
            buttons=[
                dict(
                    accent='primary',
                    href='xxx',
                    label='Search'
                ),
                dict(
                    accent='danger',
                    href='xxx',
                    label='Participate'
                ),

            ]
        )
    ),
    footer=dict(
        links=dict(
            columns=[
                # Column 1
                dict(
                    groups=[
                        # Group 1
                        dict(
                            label='Home',
                            href='/x',
                        ),
                        # Group 2
                        dict(
                            label='Blog',
                            href='/x',
                            more=dict(
                                label='View all posts',
                                href='/x'
                            ),
                            entries=[
                                dict(
                                    label='Automatic variables docs',
                                    href='/x',
                                ),
                                dict(
                                    label='Migrating to v0.7.0',
                                    href='/x',
                                ),
                                dict(
                                    label='Website redesign',
                                    href='/x',
                                ),
                            ]
                        ),
                    ]
                ),
                # Column 2
                dict(
                    groups=[
                        # Group 1
                        dict(
                            label='Documentation',
                            href='/x',
                            entries=[
                                dict(
                                    label='Overview',
                                    href='/x',
                                ),
                                dict(
                                    label='Customize',
                                    href='/x',
                                ),
                                dict(
                                    label='Modifiers',
                                    href='/x',
                                ),
                            ]
                        ),
                    ]
                ),
                # Column 3
                dict(
                    fullsize=True,
                    groups=[
                        dict(
                            label='More',
                            href='/x',
                            entries=[
                                dict(
                                    label='Expo',
                                    icon='star',
                                    accent='star',
                                    subtitle='Official Bulma showcase',
                                    href='/x'
                                ),
                                dict(
                                    label='Love',
                                    icon='heart',
                                    accent='danger',
                                    subtitle='Fans of Bulma around the world',
                                    href='/x'
                                ),
                                dict(
                                    label='Bulma start',
                                    icon='rocket',
                                    accent='success',
                                    subtitle='A tiny npm package to get '
                                             'started',
                                    href='/x'
                                ),
                            ]
                        )
                    ]
                ),
            ]
        )
    )
)

kaybee_settings = kaybee.KaybeeSettings(
    articles=dict(
        use_toctree=True
    )
)

project = 'PyCharm Companion'
copyright = '2018, Paul Everitt'
author = 'Paul Everitt'

# The short X.Y version
version = ''
# The full version, including alpha/beta/rc tags
release = '0.1'

# -- General configuration ---------------------------------------------------

# If your documentation needs a minimal Sphinx version, state it here.
#
# needs_sphinx = '1.0'

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.intersphinx',
    kaybee.__title__,
    kaybee_bulma.__title__
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The suffix(es) of source filenames.
# You can specify multiple suffix as a list of string:
#
# source_suffix = ['.rst', '.md']
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
language = None

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path .
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = 'sphinx'

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'kaybee_bulma'

# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
# html_theme_options = {}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# Custom sidebar templates, must be a dictionary that maps document names
# to template names.
#
# The default sidebars (for documents that don't match any pattern) are
# defined by theme itself.  Builtin themes are using these templates by
# default: ``['localtoc.html', 'relations.html', 'sourcelink.html',
# 'searchbox.html']``.
#
# html_sidebars = {}


# -- Options for HTMLHelp output ---------------------------------------------

# Output file base name for HTML help builder.
htmlhelp_basename = 'PyCharmCompaniondoc'

# -- Options for LaTeX output ------------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    #
    # 'papersize': 'letterpaper',

    # The font size ('10pt', '11pt' or '12pt').
    #
    # 'pointsize': '10pt',

    # Additional stuff for the LaTeX preamble.
    #
    # 'preamble': '',

    # Latex figure (float) alignment
    #
    # 'figure_align': 'htbp',
}

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    (master_doc, 'PyCharmCompanion.tex', 'PyCharm Companion Documentation',
     'Paul Everitt', 'manual'),
]

# -- Options for manual page output ------------------------------------------

# One entry per manual page. List of tuples
# (source start file, name, description, authors, manual section).
man_pages = [
    (master_doc, 'pycharmcompanion', 'PyCharm Companion Documentation',
     [author], 1)
]

# -- Options for Texinfo output ----------------------------------------------

# Grouping the document tree into Texinfo files. List of tuples
# (source start file, target name, title, author,
#  dir menu entry, description, category)
texinfo_documents = [
    (master_doc, 'PyCharmCompanion', 'PyCharm Companion Documentation',
     author, 'PyCharmCompanion', 'One line description of project.',
     'Miscellaneous'),
]

# -- Extension configuration -------------------------------------------------

# -- Options for intersphinx extension ---------------------------------------

# Example configuration for intersphinx: refer to the Python standard library.
intersphinx_mapping = {'https://docs.python.org/': None}