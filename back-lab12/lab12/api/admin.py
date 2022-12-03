from django.contrib import admin
from .models import Prestamos, Autor, Libro, Usuario
# Register your models here.

admin.site.register(Prestamos)
admin.site.register(Autor)
admin.site.register(Libro)
admin.site.register(Usuario)