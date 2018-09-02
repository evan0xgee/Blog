from django.apps import AppConfig
from suit.apps import DjangoSuitConfig

class BlogConfig(AppConfig):
    name = 'blog'


class SuitConfig(DjangoSuitConfig):
    layout = 'horizontal'