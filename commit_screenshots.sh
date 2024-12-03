# Asegúrate de que las capturas de pantalla existan
if [ -d "/e2e/cypress/screenshots" ] && [ "$(ls -A /e2e/cypress/screenshots)" ]; then
  echo "Capturas de pantalla encontradas. Procediendo con commit."

  # Añade las capturas de pantalla al repositorio

 git add -A /e2e/cypress/screenshots

  # Realiza el commit si hay algo nuevo
  git commit -m "Agrega capturas de pantalla de Cypress"
  
  # Realiza el push al repositorio
  git push
else
  echo "No se encontraron capturas de pantalla. No se realizará commit."
fi
