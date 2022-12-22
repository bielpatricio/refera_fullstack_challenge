from rest_framework import serializers

from categories.serializers import CategorySerializer

# It will be the objects used in transaction between


class OrderSaveSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    category_id = serializers.IntegerField()
    name = serializers.CharField()
    phone = serializers.CharField()
    estateAgency = serializers.CharField()
    description = serializers.CharField(allow_null=True)
    company = serializers.CharField()
    deadline = serializers.DateTimeField()


class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    category = CategorySerializer()
    name = serializers.CharField()
    phone = serializers.CharField()
    estateAgency = serializers.CharField()
    description = serializers.CharField(allow_null=True)
    company = serializers.CharField()
    deadline = serializers.DateTimeField()
