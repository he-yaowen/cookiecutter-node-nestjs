import os
import shutil


{% if cookiecutter.license_id != 'No license' %}
shutil.copy('LICENSE.{{ cookiecutter.license_id }}', 'LICENSE')
{% endif %}
os.unlink('LICENSE.Apache-2.0')
os.unlink('LICENSE.BSD-3-Clause')
os.unlink('LICENSE.GPL-3.0')
os.unlink('LICENSE.MIT')
os.unlink('LICENSE.MPL-2.0')
