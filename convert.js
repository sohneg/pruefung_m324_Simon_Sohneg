import fs from 'fs';
import { marked } from 'marked'; // Benannter Import

fs.readFile('task-3.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  const htmlContent = marked(data);

  fs.writeFile('task-3.html', htmlContent, (err) => {
    if (err) {
      console.error('Fehler beim Schreiben der HTML-Datei:', err);
      return;
    }

    console.log('Die HTML-Datei wurde erfolgreich erstellt!');
  });
});
