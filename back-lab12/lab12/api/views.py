from django.shortcuts import render
from django.views import View
from .models import Prestamos
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
import json
# Create your views here.

class PrestamosView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        prestamos = list(Prestamos.objects.values())
        if len(prestamos) > 0:
            res = {'Success': True, 'prestamos': prestamos}
        else:
            res = {'Success': False, 'productos': 'No hay prestamos'}
        return JsonResponse(res)
    
    def post(self, request):

        jd = json.loads(request.body)
        Prestamos.objects.create(id_libro_id=jd['id_libro_id'], id_usuario_id=jd['id_usuario_id'], fecha_prestamo=jd['fecha_prestamo'],fecha_devolucion=jd['fecha_devolucion'])
        res = {'message': "Success"}

        return JsonResponse(res)

    def put(self, request, id):
        jd = json.loads(request.body)
        prestamos = list(Prestamos.objects.filter(id_prestamo=id).values())
        if len(prestamos) > 0:
            prestamo = Prestamos.objects.get(id_prestamo=id)
            prestamo.id_libro_id = jd['id_libro_id']
            prestamo.id_usuario_id = jd['id_usuario_id']
            prestamo.fecha_prestamo = jd['fecha_prestamo']
            prestamo.fecha_devolucion = jd['fecha_devolucion']
            prestamo.save()
            res = {'message': "Success"}
        else:
            res = {'message': "No se encontró el prestamo"}
        return JsonResponse(res)

    def delete(self, request, id):
        prestamos = list(Prestamos.objects.filter(id_prestamo=id).values())
        if len(prestamos) > 0:
            Prestamos.objects.filter(id_prestamo=id).delete()
            res = {'message': "Success"}
        else:
            res = {'message': "No se encontró el prestamo"}
        return JsonResponse(res)