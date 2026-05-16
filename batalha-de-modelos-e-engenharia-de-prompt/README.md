# 🌙 NightHub: Batalha de Modelos & Engenharia de Prompt

## 📝 Descrição do Projeto
Este projeto apresenta um estudo comparativo de **Engenharia de Prompt** utilizando uma estrutura baseada em **XML** para a criação do **NightHub**.O NightHub é um sistema SaaS focado na gestão e divulgação de eventos, promoções e geolocalização para estabelecimentos como adegas e tabacarias.

Desenvolvido como parte da disciplina de **Engenharia de Prompt e Aplicações em IA (2026)**, o experimento testou a capacidade de diferentes Grandes Modelos de Linguagem (LLMs) em gerar uma aplicação *Single Page* funcional com requisitos técnicos complexos, como sistemas de notificações push e painéis de publicação em tempo real.

## 🚀 Tecnologias e Metodologia
**Linguagens Geradas:** HTML5 e CSS3 integrado.
**Estruturação de Prompt:** Tags XML (`<tarefa>`, `<objetivo>`, `<diretrizes_design>`) para maior precisão.
**Modelos Avaliados:** ChatGPT, Gemini, Claude, Qwen, DeepSeek, Grok e Maritaca.
**Design:** Estética Dark com paleta em Preto, Roxo e Neon.

## 📊 Quadro Comparativo de Performance
O projeto avaliou a assertividade e o consumo de recursos de cada IA durante a geração do código:

| Modelo | Precisão Técnica | Criatividade/UI | Consumo (Tokens) |
| :--- | :--- | :--- | :--- |
| **Grok** | Excelente sistema de notificações | Ótimo (único com versão Mobile) | 12.700 |
| **Claude** | Ótima arquitetura e otimização | Foco em UX e eventos próximos  | 18.000 - 20.000 |
| **Qwen** | Alta assertividade em interações | Enfoque em tempo real | 23.000 |
| **DeepSeek** | Correto e interativo | Eficaz para prototipagem rápida | 7.600 |
| **Maritaca** | Precarizado/Ignorou requisitos | Interface simples e incompleta | 900 - 1.200 |

## 💡 Resultados e Aprendizados
**Eficiência de Tokens:** Observou-se que modelos com maior contagem de tokens (como Qwen e Claude) entregaram resultados mais robustos e completos.
**Compreensão Estrutural:** O **Grok** demonstrou a melhor compreensão da estrutura XML solicitada, atendendo rigorosamente aos requisitos de design e layout.
**Prototipagem vs. Complexidade:** O **DeepSeek** foi identificado como ideal para prototipagem rápida, enquanto o **Claude** mostrou-se superior para códigos complexos, especialmente com supervisão humana.

## 🔧 Como Replicar
1. Utilize o prompt estruturado em XML disponível na documentação.
2. Insira as diretrizes específicas de negócio (SaaS NightHub).
3. Execute em um dos modelos de IA citados para gerar o arquivo `index.html`.
4. Abra o arquivo gerado em qualquer navegador moderno para visualizar a interface responsiva.

---
**Autores:** Gustavo Ribeiro Totino, Vitor Alves Rodrigues Braulino e Fabricio Duarte Santos.

[Voltar ao portfólio](https://github.com/FabDuartZL/portfolio-fabricio-duarte-santos)
