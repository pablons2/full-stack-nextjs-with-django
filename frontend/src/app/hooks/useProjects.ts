import useSWR from 'swr';
import api from '../services/api';


export const useProjects = () => {
    const fetcher = (url: string) => api.get(url).then(res => res.data);
    const { data, error, isLoading } = useSWR('/projects', fetcher);

    return { data, error, isLoading };
};
