import { useQueries } from '@tanstack/react-query';
import React from 'react';

import { currencyAPI } from 'api';

interface IUseCurrencies {
    from: string;
    to: string;
    index: number;
}

export const useCurrencies = (data: IUseCurrencies[]) => {
    const [currencyList, setCurrencyList] = React.useState<TCurrencyList[]>([]);

    const results = useQueries({
        queries: data.map((item) => ({
            queryKey: ['currency', item.index],
            queryFn: () => currencyAPI.getCurrency({ from: item.from, to: item.to, q: '1.0' })
                .then((response) => {
                    setCurrencyList((prev: any) => [...prev, { name: item.from, value: response.data }]);
                }),
            staleTime: Infinity
        }))
    });

    const isLoading = results.map((item) => item.isLoading);

    return { currencyList, isLoading };
};

type TCurrencies = 'USD' | 'EUR';

export type TCurrencyList = {
    name: TCurrencies;
    value: number;
}
