from datetime import date
from typing import List

from kaybee.app import kb
from kaybee.plugins.articles.base_article import BaseArticleModel, BaseArticle
from kaybee.plugins.articles.videoplayer import VideoPlayerModel
from pydantic import BaseModel


class TwitterDateModel(BaseModel):
    tweet_id: str
    date: date


class TipModel(BaseArticleModel):
    twitter_dates: List[TwitterDateModel] = None
    full_movie: VideoPlayerModel = None
    is_pro: bool = False


@kb.resource('tip')
class TipResource(BaseArticle):
    props: TipModel
