from .models import Tareas
from rest_framework import serializers

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tareas
        fields = ('id','nombre','descripcion','realizada',)