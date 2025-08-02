import express from "express";
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/integration', express.static(path.join(__dirname, 'integration')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'integration', 'acceuil.html'));
});

// Route pour la page d'accueil (alternative)
app.get('/accueil', (req, res) => {
  res.sendFile(path.join(__dirname, 'integration', 'acceuil.html'));
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - Page non trouvée</h1><p>La page que vous cherchez n\'existe pas.</p>');
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📄 Page d'accueil: http://localhost:${PORT}`);
});