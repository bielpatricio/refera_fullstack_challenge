from django.urls import path
from categories.views import RouteCategories, RouteCategoriesWithId

urlpatterns = [
    path('', RouteCategories.as_view()),
    path('/<int:id>', RouteCategoriesWithId.as_view()),
]
