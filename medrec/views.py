from django.http.response import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.http import JsonResponse
import json
import requests
import traceback
# Create your views here.
def home(request):
    return render(request, "home.html", {})

def patient(request, pat_id):
    return HttpResponse(f'<p>patient view with id (pat_id)</p>')

def launch(request):
    return TemplateResponse(request, 'launch.html', {})

def base(request):
    return TemplateResponse(request, 'base.html', {})

@csrf_exempt
def medications(request):
    #input variable will take in json_data from js file
    input = json.loads(request.body)

    #our input variables contains, FHIR endpoint, Patient ID and Access token
    # we will now build our request for data
    # Fhir endpoint obtained from EHR vendor
    fhir_endpoint = input["baseURL"]
     
    #let the fhir endpoint know we are accepting only JSON data
    headers = {'Accept': 'application/json',
               'Authorization': "Bearer " + input["token"]}

    #build query -resource + parameters
    resource = "MedicationStatement"
    parameters = {"patient": input["patient"]}

    #format the query url. Print it to see if there are any problems
    query_url = fhir_endpoint + "/" + resource

    #make get request
    try:
        r = requests.get(query_url, params=parameters, headers=headers)
        #now load the json data for procvessing
        if (r.status_code == 200):
            #success 
            data = r.json()
            # json output corresponding for each row
            output = [] #store rows

            #each item in output must be a dict with table columns as key
            # JSON processing of the data, and generate json object as object
            i = 0
            while i < 10:
                row = {"medication": "Med" + str(i), "start": "Start " + str(i),
                "quantity": "Quantity " + str(i)}
                output.append(row)
                i += 1
        else: 
            #error message
            output = {"error":r.headers["Status"]}
        return JsonResponse(output, safe=False)
    except:
        e = traceback.format_exc()
        data = {"error": str(e)}
        return JsonResponse(data)
