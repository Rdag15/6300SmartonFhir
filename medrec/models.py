from django.db import models

# each model is a spreadsheet, each model is a table in a spreadsheet and each field is a column. 
class medications(models.Model):
    name = models.CharField(max_length = 100)
    dose = models.DecimalField(decimal_places=1, max_digits=10)
    datestarted = models.DateTimeField()
    dateended = models.DateTimeField()
    active = models.BooleanField()
