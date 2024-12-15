const ctx = document.getElementById('customChart').getContext('2d');

// Data
const lineData = [45, 40, 38, 42, 30, 35, 40, 39, 37, 25, 20, 23, 18, 21, 20, 24];
const barData = [10, 12, 8, 9, 7, 6, 10, 8, 12, 9, 5, 4, 6, 8, 5, 10];
const labels = [
    '19:00', '19:05', '19:10', '19:15', '19:20', '19:25', '19:30', 
    '19:35', '19:40', '19:45', '19:50', '19:55', '19:58', '19:59', '19:50', '19:55'
];

// Chart configuration
const customChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            // Bar chart (background volume)
            {
                type: 'bar',
                label: 'Volume',
                data: barData,
                backgroundColor: 'rgba(47, 73, 224, 0.2)',
                borderWidth: 0,
                borderRadius: 2
            },
            // Line chart (main data)
            {
                type: 'line',
                label: 'Price',
                data: lineData,
                borderColor: '#2f49e0',
                borderWidth: 2,
                fill: false,
                pointRadius: 0, // Hide data points
                tension: 0.4 // Smooth curve
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)'
                },
                beginAtZero: true,
                suggestedMax: 50
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#1e1e2d',
                titleColor: '#ffffff',
                bodyColor: '#ffffff'
            }
        }
    }
});
