from kaybee.app import kb

from kaybee.plugins.articles.base_section import BaseSection


@kb.resource('tutorialsection')
class Tutorialsection(BaseSection):

    def featured_resource(self, resources):
        fd = self.props.featured_resource
        if not fd:
            return None
        else:
            return resources[fd]

    def steps(self, resources, references):
        """ The steps in the tutorial, from the toctree """
        results = []
        for docname in self.toctree:
            resource = resources[docname]
            these_references = []
            for reference_label in resource.props.references.keys():
                if reference_label != 'author':
                    for reference in references.resource_references(resource)[reference_label]:
                        these_references.append(
                            dict(
                                docname=reference.docname,
                                label=reference.props.label
                            )
                        )
            author = references.resource_references(resource)['author'][0]
            results.append(dict(
                title=resource.title,
                docname=resource.docname,
                excerpt=resource.excerpt,
                icon='react',
                headshot='authors/pauleveritt/paul_headshotx24.jpeg',
                published='2018/01/01',
                duration='4m22s',
                references=these_references,
                author=author
            ))
        return results
        # return [
        #     dict(
        #         icon='react',
        #         title='Project Setup',
        #         excerpt='Use PyCharm to create and open the project with
        # all '
        #                 'dependencies, then see some of the machinery in '
        #                 'action.',
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='4m22s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='Running Tests',
        #         excerpt="The Jest test runner integrates productively into "
        #                 "PyCharm. Let's put it to work.",
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='3m24s',
        #         references=[
        #             dict(docname='technologies/jest', label='jest'),
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='Debugging',
        #         excerpt="Work smart by developing with a visual debugger. "
        #                 "This lesson shows debugging tests directly in the "
        #                 "IDE, was well as debugging UIs in Chrome.",
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='2m05s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='JSX and ES6',
        #         excerpt='Using React and TypeScript means good JSX and ES6 '
        #                 'support in the IDE. This section shows some useful '
        #                 'features.',
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='5m19s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='Components',
        #         excerpt='React builds UIs as a tree of components. See how '
        #                 'to make stateful and stateless components
        # correctly '
        #                 'with TypeScript.',
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='3m41s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='Props and State',
        #         excerpt='TypeScript lets you work safely with prop and
        # state '
        #                 'data. See how the IDE can make this productive.',
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='3m22s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='Routing',
        #         excerpt='React single-page applications use client-side '
        #                 'routing. Hook that up in a TypeScript app.',
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='2m54s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        #     dict(
        #         icon='react',
        #         title='User Interfaces with Material UI',
        #         excerpt="There are many UI frameworks for UI. Let's use "
        #                 "Material-UI with TypeScript for an app-style UI.",
        #         headshot='authors/pauleveritt/paul_headshotx24.jpeg',
        #         published='2018/01/01',
        #         duration='7m33s',
        #         references=[
        #             dict(docname='technologies/typescript',
        #                  label='typescript'),
        #             dict(docname='technologies/react', label='react'),
        #         ]),
        #
        # ]
