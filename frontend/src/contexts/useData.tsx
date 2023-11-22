import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PizzaProps } from "../@types/pizzaProps";

const loadPizzas = async (): AxiosPromise<PizzaProps[]> => {

    const response = await axios.get<PizzaProps[]>(`http://localhost:8080/pizzas`);

    return response;
}

export const useLoadPizzas = () => {

    const query = useQuery({
        queryKey: ['load-pizzas'],
        queryFn: loadPizzas,
    })

    return {
        ...query,
        data: query.data
    };
} 