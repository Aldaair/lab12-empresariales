from django.db import models

# Create your models here.

class Autor(models.Model):
    id_autor = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    nacionalidad = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
class Libro (models.Model):
    id_libro = models.AutoField(primary_key=True)
    codigo = models.IntegerField()
    titulo = models.CharField(max_length=100)
    isbn = models.CharField(max_length=30)
    editorial = models.CharField(max_length=60)
    numpags = models.IntegerField()
    
    def __str__(self):
        return self.titulo
class Usuario(models.Model):
    id_usario = models.AutoField(primary_key=True)
    num_usuario = models.IntegerField()
    nif = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)
    
    def __str__(self):
        return self.nombre

class Prestamos(models.Model):
    id_prestamo = models.AutoField(primary_key=True)
    id_libro = models.ForeignKey(Libro,null=True,blank=True,on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuario ,null=True,blank=True,on_delete=models.CASCADE)
    fecha_prestamo = models.DateField()
    fecha_devolucion = models.DateField()
    def __str__(self):
        return ("Prestamo "  + str(self.id_prestamo))