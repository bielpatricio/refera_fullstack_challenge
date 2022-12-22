from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from categories.serializers import CategorySerializer
from categories.models import CategoryModel
from rest_framework.pagination import PageNumberPagination


class RouteCategories(APIView):
    def get(self, request: Request):
        category = CategoryModel.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, request: Request):
        category = CategorySerializer(data=request.data)
        category.is_valid(raise_exception=True)

        categoryCreated = CategoryModel.objects.create(
            **category.validated_data)

        category = CategorySerializer(categoryCreated)

        return Response(category.data, status.HTTP_201_CREATED)


class RouteCategoriesWithId(APIView):
    def get(self, _: Request, id: int):
        categorySelected = CategoryModel.objects.filter(id=id)

        if not categorySelected.first():
            return Response({'message': 'Category not found'}, status.HTTP_404_NOT_FOUND)

        category = CategorySerializer(categorySelected.first())

        return Response(category.data, status.HTTP_200_OK)

    def delete(self, _: Request, id: int):
        categorySelected = CategoryModel.objects.filter(id=id)
        if not categorySelected:
            return Response({'message': 'Category not found'}, status.HTTP_404_NOT_FOUND)

        categorySelected.delete()
        return Response({'message': 'Category deleted'}, status.HTTP_200_OK)

    def patch(self, request: Request, id: int):
        categorySelected = CategoryModel.objects.filter(id=id)
        if not categorySelected:
            return Response({'message': 'Order not found'}, status.HTTP_404_NOT_FOUND)

        category = CategorySerializer(data=request.data)
        category.is_valid(raise_exception=True)

        CategoryModel.objects.filter(id=id).update(**category.validated_data)

        categorySelected = CategoryModel.objects.filter(id=id).first()
        categorySelected = CategorySerializer(categorySelected)

        return Response(categorySelected.data, status.HTTP_200_OK)
