from kaybee.app import kb
from kaybee.plugins.articles.base_article import BaseArticleModel, BaseArticle


class BlogpostModel(BaseArticleModel):
    wp_url: str
    is_pro: bool = False


@kb.resource('blogpost')
class BlogpostResource(BaseArticle):
    props: BlogpostModel
