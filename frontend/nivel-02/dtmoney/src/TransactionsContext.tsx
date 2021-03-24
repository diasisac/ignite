import { createContext, useEffect, useState, ReactNode} from 'react';
import { api } from './services/api';

interface Transaction{
    id:number,
    title:string,
    amount:number,
    category:string,
    type:string,
    createdAt: string
}

interface TransactionProviderPropos{
    children: ReactNode;
}
export const TransactionsContext = createContext<Transaction[]>([]);

export  function TransactionsProvider({children}: TransactionProviderPropos){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}