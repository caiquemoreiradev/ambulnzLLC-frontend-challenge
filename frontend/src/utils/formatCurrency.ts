export function formatCurrency(value: number) {

    let currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return currency;
}