from api.models import Profile
from api.serializers import ProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProfileView(APIView):
    def post(self, request, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Resume Uploaded", "status": "success", "conditate": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors})
    
    def get(self, request, format=None):
        condidates = Profile.objects.all()
        serializer = ProfileSerializer(condidates, many=True)
        return Response({"status": "success", "condidates": serializer.data}, status=status.HTTP_200_OK)