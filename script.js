const salesData = [
    { date: '2025-01-08', region: 'North', category: 'Electronics', channel: 'Online', product: 'Laptop Pro', revenue: 148000, profit: 36200, orders: 185 },
    { date: '2025-01-18', region: 'South', category: 'Furniture', channel: 'Retail', product: 'Office Chair', revenue: 87000, profit: 18400, orders: 142 },
    { date: '2025-01-25', region: 'East', category: 'Apparel', channel: 'Wholesale', product: 'Performance Jacket', revenue: 76000, profit: 15900, orders: 210 },
    { date: '2025-02-06', region: 'West', category: 'Electronics', channel: 'Online', product: 'Wireless Headset', revenue: 101000, profit: 24300, orders: 330 },
    { date: '2025-02-16', region: 'North', category: 'Home Goods', channel: 'Retail', product: 'Coffee Maker', revenue: 68000, profit: 14200, orders: 165 },
    { date: '2025-02-24', region: 'South', category: 'Apparel', channel: 'Online', product: 'Running Shoes', revenue: 93000, profit: 21800, orders: 255 },
    { date: '2025-03-04', region: 'East', category: 'Furniture', channel: 'Retail', product: 'Standing Desk', revenue: 127000, profit: 29100, orders: 118 },
    { date: '2025-03-15', region: 'West', category: 'Electronics', channel: 'Wholesale', product: 'Tablet Air', revenue: 116000, profit: 26100, orders: 160 },
    { date: '2025-03-26', region: 'North', category: 'Home Goods', channel: 'Online', product: 'Air Purifier', revenue: 82000, profit: 18900, orders: 190 },
    { date: '2025-04-05', region: 'South', category: 'Electronics', channel: 'Retail', product: 'Smartphone X', revenue: 153000, profit: 36700, orders: 225 },
    { date: '2025-04-17', region: 'East', category: 'Apparel', channel: 'Online', product: 'Running Shoes', revenue: 98000, profit: 23200, orders: 270 },
    { date: '2025-04-27', region: 'West', category: 'Home Goods', channel: 'Wholesale', product: 'Cookware Set', revenue: 74000, profit: 15100, orders: 145 },
    { date: '2025-05-09', region: 'North', category: 'Furniture', channel: 'Retail', product: 'Standing Desk', revenue: 134000, profit: 30800, orders: 125 },
    { date: '2025-05-19', region: 'South', category: 'Home Goods', channel: 'Online', product: 'Air Purifier', revenue: 91000, profit: 21600, orders: 205 },
    { date: '2025-05-30', region: 'East', category: 'Electronics', channel: 'Wholesale', product: 'Laptop Pro', revenue: 172000, profit: 42100, orders: 195 },
    { date: '2025-06-07', region: 'West', category: 'Apparel', channel: 'Retail', product: 'Performance Jacket', revenue: 84000, profit: 18500, orders: 218 },
    { date: '2025-06-17', region: 'North', category: 'Electronics', channel: 'Online', product: 'Smartphone X', revenue: 166000, profit: 39400, orders: 244 },
    { date: '2025-06-28', region: 'South', category: 'Furniture', channel: 'Wholesale', product: 'Office Chair', revenue: 95000, profit: 20700, orders: 150 },
    { date: '2025-07-08', region: 'East', category: 'Home Goods', channel: 'Retail', product: 'Coffee Maker', revenue: 79000, profit: 16600, orders: 180 },
    { date: '2025-07-18', region: 'West', category: 'Electronics', channel: 'Online', product: 'Tablet Air', revenue: 143000, profit: 32500, orders: 205 },
    { date: '2025-07-29', region: 'North', category: 'Apparel', channel: 'Wholesale', product: 'Running Shoes', revenue: 104000, profit: 24000, orders: 280 },
    { date: '2025-08-06', region: 'South', category: 'Home Goods', channel: 'Retail', product: 'Cookware Set', revenue: 83000, profit: 17600, orders: 170 },
    { date: '2025-08-16', region: 'East', category: 'Electronics', channel: 'Online', product: 'Wireless Headset', revenue: 121000, profit: 29900, orders: 355 },
    { date: '2025-08-27', region: 'West', category: 'Furniture', channel: 'Retail', product: 'Standing Desk', revenue: 139000, profit: 31800, orders: 132 },
    { date: '2025-09-08', region: 'North', category: 'Home Goods', channel: 'Online', product: 'Air Purifier', revenue: 97000, profit: 23100, orders: 212 },
    { date: '2025-09-18', region: 'South', category: 'Electronics', channel: 'Wholesale', product: 'Laptop Pro', revenue: 181000, profit: 44300, orders: 202 },
    { date: '2025-09-28', region: 'East', category: 'Apparel', channel: 'Retail', product: 'Performance Jacket', revenue: 89000, profit: 19600, orders: 225 },
    { date: '2025-10-07', region: 'West', category: 'Home Goods', channel: 'Online', product: 'Coffee Maker', revenue: 86000, profit: 18300, orders: 195 },
    { date: '2025-10-17', region: 'North', category: 'Electronics', channel: 'Retail', product: 'Tablet Air', revenue: 157000, profit: 36900, orders: 226 },
    { date: '2025-10-28', region: 'South', category: 'Furniture', channel: 'Wholesale', product: 'Standing Desk', revenue: 145000, profit: 33400, orders: 138 },
    { date: '2025-11-08', region: 'East', category: 'Electronics', channel: 'Online', product: 'Smartphone X', revenue: 193000, profit: 45900, orders: 275 },
    { date: '2025-11-18', region: 'West', category: 'Apparel', channel: 'Retail', product: 'Running Shoes', revenue: 112000, profit: 26300, orders: 298 },
    { date: '2025-11-29', region: 'North', category: 'Furniture', channel: 'Wholesale', product: 'Office Chair', revenue: 102000, profit: 22100, orders: 164 },
    { date: '2025-12-06', region: 'South', category: 'Home Goods', channel: 'Online', product: 'Air Purifier', revenue: 118000, profit: 28700, orders: 240 },
    { date: '2025-12-15', region: 'East', category: 'Furniture', channel: 'Retail', product: 'Standing Desk', revenue: 151000, profit: 35100, orders: 142 },
    { date: '2025-12-22', region: 'West', category: 'Electronics', channel: 'Online', product: 'Laptop Pro', revenue: 206000, profit: 50800, orders: 230 }
];

const chartRefs = {};
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const palette = ['#2563eb', '#119c62', '#f79009', '#7c3aed', '#0891b2', '#d92d20'];
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('en-US');

const controls = {
    startDate: document.getElementById('startDate'),
    endDate: document.getElementById('endDate'),
    region: document.getElementById('regionFilter'),
    category: document.getElementById('categoryFilter'),
    channel: document.getElementById('channelFilter'),
    sort: document.getElementById('sortTable')
};

function sumBy(items, field) {
    return items.reduce((total, item) => total + item[field], 0);
}

function marginFor(item) {
    return item.revenue ? (item.profit / item.revenue) * 100 : 0;
}

function groupSum(items, key, field) {
    return items.reduce((groups, item) => {
        groups[item[key]] = (groups[item[key]] || 0) + item[field];
        return groups;
    }, {});
}

function topEntry(grouped) {
    return Object.entries(grouped).sort((a, b) => b[1] - a[1])[0] || ['-', 0];
}

function fillSelect(select, values) {
    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

function getFilteredData() {
    const start = new Date(controls.startDate.value);
    const end = new Date(controls.endDate.value);
    end.setHours(23, 59, 59, 999);

    return salesData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= start
            && itemDate <= end
            && (controls.region.value === 'all' || item.region === controls.region.value)
            && (controls.category.value === 'all' || item.category === controls.category.value)
            && (controls.channel.value === 'all' || item.channel === controls.channel.value);
    });
}

function monthlySeries(items, field) {
    return months.map((month, index) => {
        return items
            .filter(item => new Date(item.date).getMonth() === index)
            .reduce((total, item) => total + item[field], 0);
    });
}

function makeChart(id, config) {
    if (chartRefs[id]) {
        chartRefs[id].destroy();
    }

    chartRefs[id] = new Chart(document.getElementById(id), config);
}

function tooltipValue(context) {
    if (context.dataset.yAxisID === 'orders') {
        return number.format(context.parsed.y);
    }

    if (context.dataset.yAxisID === 'margin') {
        return `${context.parsed.y.toFixed(1)}%`;
    }

    return currency.format(context.parsed.y ?? context.parsed);
}

function chartOptions(extra = {}) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
            legend: { labels: { boxWidth: 12, color: '#344054' } },
            tooltip: {
                callbacks: {
                    label(context) {
                        return `${context.dataset.label}: ${tooltipValue(context)}`;
                    }
                }
            }
        },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#667085' } },
            y: {
                beginAtZero: true,
                grid: { color: '#edf1f5' },
                ticks: { color: '#667085', callback: value => currency.format(value) }
            }
        },
        ...extra
    };
}

function updateKpis(items) {
    const revenue = sumBy(items, 'revenue');
    const profit = sumBy(items, 'profit');
    const orders = sumBy(items, 'orders');
    const margin = revenue ? (profit / revenue) * 100 : 0;
    const aov = orders ? revenue / orders : 0;
    const [bestRegion, bestRegionRevenue] = topEntry(groupSum(items, 'region', 'revenue'));

    document.getElementById('revenueKpi').textContent = currency.format(revenue);
    document.getElementById('profitKpi').textContent = currency.format(profit);
    document.getElementById('ordersKpi').textContent = number.format(orders);
    document.getElementById('aovKpi').textContent = currency.format(aov);
    document.getElementById('bestRegionKpi').textContent = bestRegion;
    document.getElementById('bestRegionNote').textContent = currency.format(bestRegionRevenue);
    document.getElementById('marginNote').textContent = `Margin ${margin.toFixed(1)}%`;
    document.getElementById('recordsNote').textContent = `${number.format(items.length)} records`;
    document.getElementById('revenueNote').textContent = `${controls.region.options[controls.region.selectedIndex].text} selected`;
}

function renderInsights(items) {
    const revenue = sumBy(items, 'revenue');
    const [topProduct, topProductRevenue] = topEntry(groupSum(items, 'product', 'revenue'));
    const [topCategory, topCategoryRevenue] = topEntry(groupSum(items, 'category', 'revenue'));
    const [topChannel, topChannelRevenue] = topEntry(groupSum(items, 'channel', 'revenue'));
    const profitMargin = revenue ? (sumBy(items, 'profit') / revenue) * 100 : 0;

    const insights = [
        [`${topProduct} leads products`, `${currency.format(topProductRevenue)} in revenue from the selected sales records.`],
        [`${topCategory} is the strongest category`, `${currency.format(topCategoryRevenue)} revenue contribution in the current filter.`],
        [`${topChannel} is the top channel`, `${currency.format(topChannelRevenue)} revenue with ${profitMargin.toFixed(1)}% overall margin.`]
    ];

    document.getElementById('insightsList').innerHTML = insights.map(([title, text]) => {
        return `<li class="insight"><strong>${title}</strong><span>${text}</span></li>`;
    }).join('');
}

function renderCharts(items) {
    makeChart('revenueTrendChart', {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Revenue',
                    data: monthlySeries(items, 'revenue'),
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.12)',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3
                },
                {
                    label: 'Profit',
                    data: monthlySeries(items, 'profit'),
                    borderColor: '#119c62',
                    backgroundColor: 'rgba(17, 156, 98, 0.10)',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3
                }
            ]
        },
        options: chartOptions()
    });

    const regionEntries = Object.entries(groupSum(items, 'region', 'revenue'));
    makeChart('regionChart', {
        type: 'doughnut',
        data: {
            labels: regionEntries.map(([label]) => label),
            datasets: [{
                label: 'Revenue',
                data: regionEntries.map(([, value]) => value),
                backgroundColor: palette,
                borderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: chartOptions({
            cutout: '64%',
            scales: {},
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12, color: '#344054' } },
                tooltip: chartOptions().plugins.tooltip
            }
        })
    });

    const categoryEntries = Object.entries(groupSum(items, 'category', 'revenue')).sort((a, b) => b[1] - a[1]);
    makeChart('categoryChart', {
        type: 'bar',
        data: {
            labels: categoryEntries.map(([label]) => label),
            datasets: [{
                label: 'Revenue',
                data: categoryEntries.map(([, value]) => value),
                backgroundColor: '#0891b2',
                borderRadius: 6
            }]
        },
        options: chartOptions({ indexAxis: 'y' })
    });

    const channelRevenue = Object.entries(groupSum(items, 'channel', 'revenue'));
    const channelOrders = Object.entries(groupSum(items, 'channel', 'orders'));
    makeChart('channelChart', {
        type: 'bar',
        data: {
            labels: channelRevenue.map(([label]) => label),
            datasets: [
                {
                    label: 'Revenue',
                    data: channelRevenue.map(([, value]) => value),
                    backgroundColor: '#7c3aed',
                    yAxisID: 'y',
                    borderRadius: 6
                },
                {
                    label: 'Orders',
                    data: channelOrders.map(([, value]) => value),
                    type: 'line',
                    borderColor: '#f79009',
                    backgroundColor: '#f79009',
                    yAxisID: 'orders',
                    tension: 0.35
                }
            ]
        },
        options: chartOptions({
            scales: {
                x: { grid: { display: false }, ticks: { color: '#667085' } },
                y: {
                    beginAtZero: true,
                    grid: { color: '#edf1f5' },
                    ticks: { color: '#667085', callback: value => currency.format(value) }
                },
                orders: {
                    beginAtZero: true,
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    ticks: { color: '#667085', callback: value => number.format(value) }
                }
            }
        })
    });
}

function renderTable(items) {
    const sortKey = controls.sort.value;
    const sorted = [...items].sort((a, b) => {
        const aValue = sortKey === 'margin' ? marginFor(a) : a[sortKey];
        const bValue = sortKey === 'margin' ? marginFor(b) : b[sortKey];
        return bValue - aValue;
    });

    document.getElementById('tableMeta').textContent = `Sorted by ${controls.sort.options[controls.sort.selectedIndex].text.toLowerCase()}`;
    document.getElementById('salesTable').innerHTML = sorted.map(item => {
        return `
            <tr>
                <td>${new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td><strong>${item.product}</strong></td>
                <td>${item.region}</td>
                <td><span class="badge">${item.category}</span></td>
                <td>${item.channel}</td>
                <td class="numeric">${number.format(item.orders)}</td>
                <td class="numeric">${currency.format(item.revenue)}</td>
                <td class="numeric">${currency.format(item.profit)}</td>
                <td class="numeric">${marginFor(item).toFixed(1)}%</td>
            </tr>
        `;
    }).join('');
}

function renderDashboard() {
    const items = getFilteredData();
    document.getElementById('app').classList.toggle('is-empty', items.length === 0);

    if (!items.length) {
        return;
    }

    updateKpis(items);
    renderInsights(items);
    renderCharts(items);
    renderTable(items);
}

function initializeFilters() {
    fillSelect(controls.region, [...new Set(salesData.map(item => item.region))].sort());
    fillSelect(controls.category, [...new Set(salesData.map(item => item.category))].sort());
    fillSelect(controls.channel, [...new Set(salesData.map(item => item.channel))].sort());

    Object.values(controls).forEach(control => control.addEventListener('change', renderDashboard));
    document.getElementById('resetFilters').addEventListener('click', () => {
        controls.startDate.value = '2025-01-01';
        controls.endDate.value = '2025-12-31';
        controls.region.value = 'all';
        controls.category.value = 'all';
        controls.channel.value = 'all';
        controls.sort.value = 'revenue';
        renderDashboard();
    });
}

initializeFilters();
renderDashboard();
