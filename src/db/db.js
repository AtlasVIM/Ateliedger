


export const TransactionsDB = [
    {
        id:1, 
        date:'24/01/2024',
        transactionType: 'Sale', 
        type: 'Machines', 
        name: 'Fokoos', 
        variableCosts: [
            {costTitle: 'Electricity Per Hour' , costPerUnit: 0.15, unit: 'Hour'}, 
            {costTitle: 'Maintenance', costPerUnit:0.005, unit:'Hour'}
        ], 
        fixedCosts: [
            {costTitle: 'Price', costPerUnit:150}
        ]
    },
    {
        id:2,
        date:'25/02/2024', 
        transactionType: 'Purchase', 
        type: 'Machines', 
        name: 'Halot One', 
        variableCosts: [
            {costTitle: 'Electricity per Hour', costPerUnit:0.15, unit: 'Hour'}
        ], 
        fixedCosts: [
            {costTitle: 'Price', costPerUnit:100}
        ] 
    },
    {
        id:3, 
        date:'23/02/2024', 
        transactionType: 'Purchase', 
        type: 'Materials', 
        name: 'Creality Resin Gray 1KG', 
        variableCosts: [
            {costTitle: 'Cost per gram', costPerUnit:0.03, unit: 'Gram'}
        ], 
        fixedCosts: [
            {costTitle: 'Price', costPerUnit:30}
        ] },
]