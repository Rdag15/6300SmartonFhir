from django.http.response import HttpResponse
from django.shortcuts import render
from django.template.response import TemplateResponse

from .models import medications
# Create your views here.
def home(request):
    meds = medications.objects.all()
    return render(request, "home.html", {
        'meds': meds,
    })

def patient(request, pat_id):
    return HttpResponse(f'<p>patient view with id (pat_id)</p>')

def launch(request):
    return TemplateResponse(request, 'launch.html', {})

def base(request):
    return TemplateResponse(request, 'base.html', {})
