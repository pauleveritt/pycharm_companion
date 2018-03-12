from kaybee.app import kb
from kaybee.plugins.articles.base_article import BaseArticleModel, BaseArticle
from kaybee.plugins.articles.videoplayer import VideoPlayerModel


class WebinarModel(BaseArticleModel):
    wp_url: str
    is_pro: bool = False
    full_movie: VideoPlayerModel = None


@kb.resource('webinar')
class WebinarResource(BaseArticle):
    props: WebinarModel
