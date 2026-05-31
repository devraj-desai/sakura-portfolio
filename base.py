import base64

with open("photo.jpg", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode("utf-8")
print("")
print(encoded_string)