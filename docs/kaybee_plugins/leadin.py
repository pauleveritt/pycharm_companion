"""

A tiny widget to put a left/right margin on some leadin text
for cover pages.

"""
from kaybee.app import kb
from kaybee.plugins.widgets.base_widget import BaseWidget
from sphinx.application import Sphinx


@kb.widget('leadin')
class LeadingWidget(BaseWidget):

    def make_context(self, context, sphinx_app: Sphinx):
        pass
