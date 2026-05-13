from django.shortcuts import render

# Create your views here.

# Windsurf: Refactor | Explain | Generate Docstring | X
def listings(request):
    return render(request, "listings/listings.html")

# Windsurf: Refactor | Explain | Generate Docstring | X
def listing(request, listing_id):
    return render(request, "listings/listing.html")

