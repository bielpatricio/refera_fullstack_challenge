from rest_framework import serializers


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    category = serializers.CharField()
