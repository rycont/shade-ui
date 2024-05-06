import { ContentProvidersResponse, UsersResponse } from '../pocketbase-types';

export declare const getMe: () => Promise<UsersResponse<string[], {
    using_providers: ContentProvidersResponse[];
}>>;
