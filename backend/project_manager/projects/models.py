from django.db import models # type: ignore
from django.contrib.auth.models import User # type: ignore

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

class UserRole(models.TextChoices):
    ADMIN = "admin", "Admin"
    GERENTE = "gerente", "Gerente"
    OPERADOR = "operador", "Operador"

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=UserRole.choices) # type: ignore
