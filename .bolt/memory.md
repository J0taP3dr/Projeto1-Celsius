# Project memory

## Product intent & audience

- Conversor de Celsius para Fahrenheit, web, simples e didático.
- Backend Node.js + Express servindo página estática com formulário.

## Brand personality & voice

- Direta, objetiva, em português (pt-BR).
- Foco em clareza e simplicidade.

## Visual design & UX direction

- Cartão centralizado sobre gradiente azul de fundo.
- Formulário com campo de texto e botão "Converter".
- Estados de foco e erro visíveis.
- Layout responsivo, adaptando para telas pequenas.
- Resultado exibe temperatura em Celsius e Fahrenheit lado a lado.

## Decisions, constraints & rationale

- Stack: Node.js + Express apenas; sem Astro, sem React ou qualquer framework frontend.
- Estrutura mínima: `index.js`, `package.json`, `public/index.html`, `public/estilo.css`.
- Servidor Express na porta 8030, host `0.0.0.0`.
- Arquivos estáticos servidos da pasta `public`.
- Rota `GET /celsius/fahrenheit/:temperatura` lê valor via `req.params.temperatura`.
- Fórmula: `(celsius * 1.8) + 32`.
- Validação numérica no servidor; erro amigável com HTTP 400 para valores inválidos.
- Validação client-side no formulário antes de enviar.
- `npm start` inicia o servidor; Express é a única dependência.
- Sem deploy ou publicação.

## Open questions & assumptions

- Projeto já estava na estrutura correta; apenas limpeza menor foi feita (remoção de variável não utilizada em `index.js`).
- Assume-se que Express é a única dependência necessária.
- Não há `.bolt/prompt` configurado.