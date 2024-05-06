import { default as PocketBase, RecordService } from 'pocketbase';

export declare enum Collections {
    ContentProviders = "content_providers",
    Users = "users"
}
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;
export type BaseSystemFields<T = never> = {
    id: RecordIdString;
    created: IsoDateString;
    updated: IsoDateString;
    collectionId: string;
    collectionName: Collections;
    expand?: T;
};
export type AuthSystemFields<T = never> = {
    email: string;
    emailVisibility: boolean;
    username: string;
    verified: boolean;
} & BaseSystemFields<T>;
export declare enum ContentProvidersTypeOptions {
    "rss" = "rss"
}
export declare enum ContentProvidersEncodingOptions {
    "EUC-KR" = "EUC-KR"
}
export type ContentProvidersRecord = {
    encoding?: ContentProvidersEncodingOptions;
    fetch_content_selector?: string;
    name: string;
    type: ContentProvidersTypeOptions;
    url: string;
};
export declare enum UsersReadingLevelOptions {
    "E7" = "7",
    "E15" = "15",
    "E25" = "25"
}
export type UsersRecord<Tinterests = unknown> = {
    avatar?: string;
    background?: string;
    interests?: null | Tinterests;
    name?: string;
    reading_level?: UsersReadingLevelOptions;
    using_providers?: RecordIdString[];
};
export type ContentProvidersResponse<Texpand = unknown> = Required<ContentProvidersRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Tinterests = unknown, Texpand = unknown> = Required<UsersRecord<Tinterests>> & AuthSystemFields<Texpand>;
export type CollectionRecords = {
    content_providers: ContentProvidersRecord;
    users: UsersRecord;
};
export type CollectionResponses = {
    content_providers: ContentProvidersResponse;
    users: UsersResponse;
};
export type TypedPocketBase = PocketBase & {
    collection(idOrName: 'content_providers'): RecordService<ContentProvidersResponse>;
    collection(idOrName: 'users'): RecordService<UsersResponse>;
};
