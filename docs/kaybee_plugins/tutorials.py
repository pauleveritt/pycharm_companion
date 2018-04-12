from kaybee.app import kb
from kaybee.plugins.articles.base_article import BaseArticle, BaseArticleModel

from kaybee.plugins.articles.base_section import BaseSection, BaseSectionModel
from kaybee.plugins.articles.videoplayer import VideoPlayerModel


class TutorialstepModel(BaseArticleModel):
    full_movie: VideoPlayerModel = None
    is_pro: bool = False
    duration: str = None


@kb.resource('tutorialstep')
class Tutorialstep(BaseArticle):
    props: TutorialstepModel

    @property
    def nonauthor_references(self):
        """ Return list of non-empty props references except author """
        return [
            label
            for label in self.props.references.keys()
            if label != 'author' and self.props.references.get(label)
        ]

    def extract_references(self, references):
        """ Extract reference info for non-authors """

        reference_info = []
        for label in self.nonauthor_references:
            for reference in references.resource_references(self)[label]:
                reference_info.append(
                    dict(
                        docname=reference.docname,
                        label=reference.props.label
                    )
                )
        return reference_info

    def author_info(self, references):
        a: BaseArticle = references.resource_references(self)['author'][0]
        h = a.find_prop_item('images', 'usage', 'icon_24').filename
        headshot = f'authors/pauleveritt/{h}'
        return dict(
            docname=a.docname,
            title=a.title,
            headshot=headshot
        )

    def icon(self, references):
        """ Return a thumbnail for the technology or topic """
        refs = references.resource_references(self)
        if refs:
            technologies = refs.get('technology')
            if technologies:
                technology = technologies[0]
                if technology:
                    return technology.props.label


class TutorialModel(BaseSectionModel):
    is_pro: bool = False


@kb.resource('tutorial')
class Tutorial(BaseSection):
    props: TutorialModel

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
            resource: Tutorialstep = resources[docname]
            these_references = resource.extract_references(references)
            author_info = resource.author_info(references)
            results.append(dict(
                title=resource.title,
                docname=resource.docname,
                excerpt=resource.excerpt,
                icon=resource.icon(references),
                published=resource.props.published.strftime('%Y-%m-%d'),
                duration=resource.props.duration,
                references=these_references,
                author_info=author_info
            ))
        return results
