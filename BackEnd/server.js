const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', express.static(path.join(__dirname, 'backend')));

const inforFilePath = path.join(__dirname, 'trabajadores.json')
const reportesFilePath = path.join(__dirname, 'reportes.json');

// Leer reportes desde el archivo JSON
const readReportesFromFile = () => {
  try {
    const data = fs.readFileSync(reportesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading reportes file:', err);
    return [];
  }
};

// Escribir reportes en el archivo JSON
const writeReportesToFile = (reportes) => {
  try {
    fs.writeFileSync(reportesFilePath, JSON.stringify(reportes, null, 2), 'utf8');
    console.log('Reportes successfully written to file.');
  } catch (err) {
    console.error('Error writing reportes file:', err);
  }
};

const readInfoFromFile = () => {
  try {
    const info = fs.readFileSync(inforFilePath, 'utf8');
    return JSON.parse(info);
  } catch (err) {
    console.error('Error reading reportes file:', err);
    return [];
  }
};
const writeInfoToFile = (reportes) => {
  try {
    fs.writeFileSync(inforFilePath, JSON.stringify(reportes, null, 2), 'utf8');
    console.log('Reportes successfully written to file.');
  } catch (err) {
    console.error('Error writing reportes file:', err);
  }
};

// Ruta para recibir datos del formulario

app.get('/api/info', (req, res) => {
  const reportes = readInfoFromFile();
  res.json(reportes);
});

app.post('/api/reportes', (req, res) => {

  const reportes = readReportesFromFile();
  const newReporte = req.body;
  reportes.push(newReporte);
  writeReportesToFile(reportes);
  res.status(201).json({ message: 'Se agrego el reporte con exito' });
});

app.get('/api/reportes', (req, res) => {
  const reportes = readReportesFromFile();
  res.json(reportes);
});

app.delete('/api/reportes/:id', (req, res) => {
  const { id } = req.params;
  let reportes = readReportesFromFile();

  // Encuentra el índice del reporte con el ID dado
  const index = reportes.findIndex((reporte) => reporte.id === id);

  if (index !== -1) {
    // Elimina el reporte del array
    reportes.splice(index, 1);
    // Escribe el array actualizado en el archivo JSON
    writeReportesToFile(reportes);
    res.status(200).json({ message: `Reporte con ID ${id} eliminado correctamente` });
  } else {
    res.status(404).json({ message: `No se encontró ningún reporte con el ID ${id}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});