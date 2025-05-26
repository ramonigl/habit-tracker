import { useSelector } from "react-redux";
import styles from './style.module.css';
import PageContainer from '../../components/grids/PageContainer/PageContainer.jsx';
import Card from '../../components/Card/Card.jsx';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

function Dashboard() {
    const categorias = useSelector(state => state.categorias.categorias);
    const atividades = useSelector(state => state.atividades.atividades);
    const metas = JSON.parse(localStorage.getItem('metas')) || [];

    const tempoTotal = categorias.reduce((acc, cat) => acc + (cat.tempo || 0), 0);
    const categoriaTop = categorias.reduce((top, cat) => (!top || (cat.tempo || 0) > (top.tempo || 0)) ? cat : top, null);
    const metasComProgresso = metas.map(meta => {
        const cat = categorias.find(c => String(c.id) === String(meta.categoriaId));
        const progresso = cat ? (cat.tempo || 0) / meta.tempo : 0;
        return { ...meta, progresso, nomeCategoria: cat ? cat.nome : "Categoria removida" };
    });
    metasComProgresso.sort((a, b) => b.progresso - a.progresso);
    const metaMaisProxima = metasComProgresso[0];
    const metasCumpridas = metasComProgresso.filter(m => m.progresso >= 1).length;
    const percentualMetas = metas.length > 0 ? Math.round((metasCumpridas / metas.length) * 100) : 0;
    const atividadeRecente = atividades.slice().sort((a, b) => new Date(b.data) - new Date(a.data))[0];

    function formatarTempo(minutos) {
        const h = Math.floor(minutos / 60);
        const m = minutos % 60;
        if (h > 0 && m > 0) return `${h}h ${m}min`;
        if (h > 0) return `${h}h`;
        return `${m}min`;
    }

    const categoriasLabels = categorias.map(cat => cat.nome);
    const categoriasTempos = categorias.map(cat => cat.tempo || 0);

    const dataCategorias = {
        labels: categoriasLabels,
        datasets: [
            {
                label: 'Tempo dedicado (min)',
                data: categoriasTempos,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const optionsCategorias = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    const atividadesPorCategoria = categorias.map(cat => 
        atividades.filter(ativ => String(ativ.categoriaId) === String(cat.id)).length
    );

    const categoriaMaisAtividades = categoriasLabels[
        atividadesPorCategoria.indexOf(Math.max(...atividadesPorCategoria))
    ] || "Nenhuma";

    const mediaTempoAtividade = atividades.length > 0
        ? Math.round(atividades.reduce((acc, at) => acc + (at.tempo || 0), 0) / atividades.length)
        : 0;

    const dataMetas = {
        labels: ['Cumpridas', 'Não cumpridas'],
        datasets: [
            {
                data: [metasCumpridas, metas.length - metasCumpridas],
                backgroundColor: ['#4caf50', '#ff4d4f'],
            },
        ],
    };

    const optionsMetas = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true },
        },
    };

    const dataAtividades = {
        labels: categoriasLabels,
        datasets: [
            {
                label: 'Atividades',
                data: atividadesPorCategoria,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const optionsAtividades = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    const dataDistribuicaoTempo = {
        labels: categoriasLabels,
        datasets: [
            {
                data: categoriasTempos,
                backgroundColor: [
                    '#4caf50', '#2196f3', '#ff9800', '#e91e63', '#9c27b0', '#ffeb3b', '#00bcd4', '#8bc34a'
                ],
            },
        ],
    };

    const optionsDistribuicaoTempo = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true },
        },
    };

    const topCategorias = categorias
        .slice()
        .sort((a, b) => (b.tempo || 0) - (a.tempo || 0))
        .slice(0, 5);

    const dataTopCategorias = {
        labels: topCategorias.map(cat => cat.nome),
        datasets: [
            {
                label: 'Tempo dedicado (min)',
                data: topCategorias.map(cat => cat.tempo || 0),
                backgroundColor: '#ff9800',
            },
        ],
    };

    const optionsTopCategorias = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: { beginAtZero: true }
        }
    };

    return (
        <PageContainer titulo="Dashboard" className={styles.dashboard}>
            <div className={styles.dashboardGrid}>
                <Card className="container">
                    <h2>Visão Geral</h2>
                    <div className={styles.insightsGrid}>
                        <div>
                            <span className={styles.insightTitle}>Categorias</span>
                            <span className={styles.insightValue}>{categorias.length}</span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Atividades</span>
                            <span className={styles.insightValue}>{atividades.length}</span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Tempo total</span>
                            <span className={styles.insightValue}>{formatarTempo(tempoTotal)}</span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Categoria + tempo</span>
                            <span className={styles.insightValue}>
                                {categoriaTop ? `${categoriaTop.nome} (${formatarTempo(categoriaTop.tempo)})` : "Nenhuma"}
                            </span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Meta mais próxima</span>
                            <span className={styles.insightValue}>
                                {metaMaisProxima
                                    ? `${metaMaisProxima.nomeCategoria} (${Math.round(metaMaisProxima.progresso * 100)}%)`
                                    : "Nenhuma"}
                            </span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>% Metas cumpridas</span>
                            <span className={styles.insightValue}>{percentualMetas}%</span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Atividade recente</span>
                            <span className={styles.insightValue}>
                                {atividadeRecente
                                    ? `${atividadeRecente.nome} (${atividadeRecente.data})`
                                    : "Nenhuma"}
                            </span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Categoria + atividades</span>
                            <span className={styles.insightValue}>{categoriaMaisAtividades}</span>
                        </div>
                        <div>
                            <span className={styles.insightTitle}>Média tempo/atividade</span>
                            <span className={styles.insightValue}>{formatarTempo(mediaTempoAtividade)}</span>
                        </div>
                    </div>
                </Card>
                <Card className="container">
                    <h2>Tempo dedicado por categoria</h2>
                    <Bar data={dataCategorias} options={optionsCategorias} />
                </Card>
                <Card className="container">
                    <h2>Metas cumpridas</h2>
                    <Pie data={dataMetas} options={optionsMetas} />
                </Card>
                <Card className="container">
                    <h2>Atividades por categoria</h2>
                    <Bar data={dataAtividades} options={optionsAtividades} />
                </Card>
                <Card className="container">
                    <h2>Distribuição de tempo por categoria</h2>
                    <Pie data={dataDistribuicaoTempo} options={optionsDistribuicaoTempo} />
                </Card>
                <Card className="container">
                    <h2>Top 5 Categorias por Tempo Dedicado</h2>
                    <Bar data={dataTopCategorias} options={optionsTopCategorias} />
                </Card>
            </div>
        </PageContainer>
    );
}

export default Dashboard;