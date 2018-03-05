from datetime import datetime
from typing import List

from kaybee.app import kb
from kaybee.plugins.articles.base_article import BaseArticleModel, BaseArticle
from kaybee.plugins.articles.videoplayer import VideoPlayerModel


class TipModel(BaseArticleModel):
    dates: List[datetime] = None
    full_movie: VideoPlayerModel = None


@kb.resource('tip')
class TipResource(BaseArticle):
    props: TipModel
