// Dados para o gráfico de pessoas que gostam de desenhar globalmente
const dataGlobal = [
    {
        x: ['Desenho Tradicional', 'Pintura Digital', 'Ilustração Técnica'],
        y: [40, 35, 25], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#1e90ff', '#00bfff', '#4682b4']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Desenho (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Desenho',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f3f4f6',
    paper_bgcolor: '#f3f4f6'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de desenhar no Colégio Morelli
const dataMorelli = [
    {
        x: ['Desenho Tradicional', 'Pintura Digital', 'Ilustração Técnica'],
        y: [50, 30, 20], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#1e90ff', '#00bfff', '#4682b4']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Desenho no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Desenho',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f3f4f6',
    paper_bgcolor: '#f3f4f6'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

