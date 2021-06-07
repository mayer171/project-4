"""
WSGI config for App_Manager project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os
from dotenv import load_dotenv
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'App_Manager.settings')

project_folder = os.path.expanduser('/Users/michael/sei/projects/project4/Portfolio_App')
load_dotenv(os.path.join(project_folder, '.env'))

application = get_wsgi_application()
