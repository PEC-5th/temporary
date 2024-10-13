import {
  MutationFunction,
  MutationKey,
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useQueryBase = <
  TQueryFnData,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>({
  queryKey,
  queryFn,
}: Pick<
  UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
  'queryFn' | 'queryKey'
>) => {
  return function useApplyQueryOptions(
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryFn' | 'queryKey'
    >,
  ): UseQueryResult<TData, AxiosError> {
    return useQuery({
      queryKey,
      queryFn,
      ...options,
    });
  };
};

const useMutationBase = <TData, TVariable, TContext = unknown>({
  mutationFn,
  mutationKey,
}: {
  mutationFn: MutationFunction<TData, TVariable>;
  mutationKey?: MutationKey;
}) => {
  return function useApplyMutationOptions(
    options?: Omit<
      UseMutationOptions<TData, AxiosError, TVariable, TContext>,
      'queryFn' | 'queryKey'
    >,
  ): UseMutationResult<TData, AxiosError, TVariable, TContext> {
    return useMutation({
      mutationKey,
      mutationFn,
      ...options,
    });
  };
};

export { useQueryBase, useMutationBase };
