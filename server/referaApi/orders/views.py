from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from orders.serializers import OrderSerializer, OrderSaveSerializer
from orders.models import OrderModel
from rest_framework.pagination import PageNumberPagination


class RoutePosts(APIView):
    def get(self, request: Request):
        order = OrderModel.objects.prefetch_related('category').all()
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(order, request)
        order = OrderSerializer(result_page, many=True)
        return paginator.get_paginated_response(order.data)

    def post(self, request: Request):
        order = OrderSaveSerializer(data=request.data)
        order.is_valid(raise_exception=True)

        orderCreated = OrderModel.objects.create(**order.validated_data)

        order = OrderSerializer(orderCreated)

        return Response(order.data, status.HTTP_201_CREATED)


class RoutePostsWithId(APIView):
    def get(self, request: Request, id: int):
        orderSelected = OrderModel.objects.prefetch_related(
            'category').filter(id=id).first()

        if not orderSelected:
            return Response({'message': 'Order not found'}, status.HTTP_404_NOT_FOUND)

        order = OrderSerializer(orderSelected)

        return Response(order.data, status.HTTP_200_OK)

    def delete(self, request: Request, id: int):
        orderSelected = OrderModel.objects.filter(id=id)
        if not orderSelected:
            return Response({'message': 'Order not found'}, status.HTTP_404_NOT_FOUND)

        orderSelected.delete()
        # orders = OrderModel.objects.all()
        # paginator = PageNumberPagination()
        # result_page = paginator.paginate_queryset(orders, request)
        # orders = OrderSerializer(result_page, many=True)
        return Response({'message': 'Order deleted'}, status.HTTP_200_OK)

    def patch(self, request: Request, id: int):
        orderSelected = OrderModel.objects.filter(id=id)
        if not orderSelected:
            return Response({'message': 'Order not found'}, status.HTTP_404_NOT_FOUND)

        order = OrderSaveSerializer(data=request.data)
        order.is_valid(raise_exception=True)

        OrderModel.objects.filter(id=id).update(**order.validated_data)
        order = OrderModel.objects.prefetch_related(
            'category').filter(id=id).first()

        orderSelected = OrderSerializer(order)

        return Response(orderSelected.data, status.HTTP_200_OK)
