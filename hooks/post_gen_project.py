import os
import shutil
from glob import glob


license_id = '{{ cookiecutter.license_id }}'
use_mikro_orm = '{{ cookiecutter.use_mikro_orm }}'

if license_id != 'None':
    os.rename('LICENSE.{{ cookiecutter.license_id }}', 'LICENSE')

for license_file in glob('LICENSE.*'):
    os.unlink(license_file)

if use_mikro_orm == 'no':
    os.unlink('mikro-orm.config.ts')
    shutil.rmtree('src/modules/user')
