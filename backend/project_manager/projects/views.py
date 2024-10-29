from rest_framework import viewsets # type: ignore
from rest_framework.permissions import IsAuthenticated # type: ignore
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
