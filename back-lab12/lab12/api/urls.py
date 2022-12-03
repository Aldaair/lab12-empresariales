from django.urls import path
from .views import PrestamosView
urlpatterns = [
    path('prestamos/', PrestamosView.as_view(), name='prestamos_list'),
    path('prestamos/<int:id>', PrestamosView.as_view(), name='prestamos_process')
]