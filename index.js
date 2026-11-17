const express = require("express");
const path = require("path");

const app = express();
const PORT = 8030;
const HOST = "0.0.0.0";

app.use(express.static(path.join(__dirname, "public")));

app.get("/celsius/fahrenheit/:temperatura", (req, res) => {
  const valor = req.params.temperatura;
  const valorFormato = valor.replace(",", ".");

  if (
    valor.trim() === "" ||
    isNaN(Number(valorFormato)) ||
    !/^-?\d*\.?\d+$/.test(valorFormato)
  ) {
    return res.status(400).send(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Conversor de Celsius para Fahrenheit</title>
        <link rel="stylesheet" href="/estilo.css" />
      </head>
      <body>
        <main class="card">
          <h1>Conversor de Celsius para Fahrenheit</h1>
          <div class="resultado erro">
            <p><strong>Valor inválido.</strong></p>
            <p>O valor informado ("<span>${valor}</span>") não é um número válido.</p>
            <p>Por favor, informe uma temperatura numérica, por exemplo: <em>25</em> ou <em>-5.7</em>.</p>
          </div>
          <a class="btn-voltar" href="/">Voltar</a>
        </main>
      </body>
      </html>
    `);
  }

  const celsius = Number(valorFormato);
  const fahrenheit = celsius * 1.8 + 32;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Conversor de Celsius para Fahrenheit</title>
      <link rel="stylesheet" href="/estilo.css" />
    </head>
    <body>
      <main class="card">
        <h1>Conversor de Celsius para Fahrenheit</h1>
        <div class="resultado">
          <p class="linha"><span class="rotulo">Temperatura original:</span> <strong>${celsius} °C</strong></p>
          <p class="linha"><span class="rotulo">Resultado:</span> <strong>${fahrenheit.toFixed(2)} °F</strong></p>
        </div>
        <a class="btn-voltar" href="/">Nova conversão</a>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
