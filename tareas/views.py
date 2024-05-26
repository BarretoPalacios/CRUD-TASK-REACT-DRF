from django.shortcuts import render
from .serializar import TareaSerializer
from rest_framework import viewsets
from .models import Tareas
# Create your views here.

class TareasView(viewsets.ModelViewSet):
    serializer_class = TareaSerializer
    queryset = Tareas.objects.all()