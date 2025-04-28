#!/bin/bash

# Installer les dépendances Python nécessaires
pip3 install pandas matplotlib scikit-learn numpy

# Vérifier l'installation
python3 -c "import pandas; import matplotlib; import sklearn; import numpy; print('Dépendances installées avec succès!')" 