from django.db import models

STATE_CHOICE = (
    ("Bihar", "Bihar"),
    ("Delhi", "Delhi"),
    ("Noida", "Noida"),
    ("Bangalore", "Bangalore"),
)

class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    dob = models.DateField(auto_now_add=False, auto_now=False)
    state = models.CharField(choices=STATE_CHOICE,max_length=200)
    gender = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    pimage = models.ImageField(upload_to="pimages", blank=True)
    rdoc = models.FileField(upload_to="rdoc", blank=True)