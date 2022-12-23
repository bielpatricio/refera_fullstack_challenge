from django.urls import path
from orders.views import RoutePosts, RoutePostsWithId

urlpatterns = [
    path('', RoutePosts.as_view()),
    path('/<int:id>', RoutePostsWithId.as_view()),
]
