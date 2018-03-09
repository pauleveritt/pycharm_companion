from kaybee.app import kb
from kaybee.plugins.articles.base_article_reference import \
    (
    BaseArticleReference, BaseArticleReferenceModel
)


class TechnologyModel(BaseArticleReferenceModel):
    website: str


@kb.resource('technology')
class Technology(BaseArticleReference):
    props: TechnologyModel
